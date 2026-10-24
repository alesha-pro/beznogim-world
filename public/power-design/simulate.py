#!/usr/bin/env python3
"""Independent stdlib recheck. Fictional load/weather; not an engineering design.
The earlier chat's original files were not mounted in this workshop. This file
reconstructs the stated scale and tests alternatives, not a bytewise reproduction.
Run: python3 public/power-design/simulate.py
"""
import math,json,pathlib
BASE=100
GROWTH=1.5428374077

def load(h):
    return BASE*GROWTH+32*math.cos(2*math.pi*(h%24-18)/24)+20*math.cos(2*math.pi*h/8760)+15.49625923*math.cos(4*math.pi*(h%24-18)/24)

def simulate(blocks,solar=0,battery=0,power=0,outage=False):
    soc=battery/2;gas=unserved=spill=pv_total=gen_total=served=loss_total=charge_total=discharge_total=0
    # Fuel is metered but ample for the DESIGN comparison; live stocks are finite.
    for h in range(8760):
        demand=load(h)
        cloudy=.12 if outage and h<168 else .55+.35*math.cos(2*math.pi*h/168)
        pv=solar*max(0,math.sin(math.pi*((h%24)-6)/12))*cloudy
        capacity=sum(blocks)-(blocks[0] if outage and h<168 else 0)
        regular=min(power,max(0,demand-pv),max(0,soc-battery*.2)*.95)
        gen=min(capacity,max(0,demand-pv-regular));gas+=gen/.4
        surplus=max(0,pv+gen-demand);short=max(0,demand-pv-gen)
        charge=min(power,surplus,(battery-soc)/.95)
        discharge=min(power,short,soc*.95)
        soc+=charge*.95-discharge/.95
        loss=charge*.05+discharge*(1/.95-1)
        deficit=max(0,short-discharge)
        pv_total+=pv;gen_total+=gen;served+=demand-deficit;unserved+=deficit
        spill+=surplus-charge;loss_total+=loss;charge_total+=charge;discharge_total+=discharge
        assert -.000001<=soc<=battery+.000001
    # AC balance and storage balance, in kWh.
    assert abs(gen_total+pv_total+discharge_total-served-charge_total-spill)<1e-5
    assert abs(battery/2+charge_total*.95-discharge_total/.95-soc)<1e-5
    assert abs(gen_total/.4-gas)<1e-5
    return dict(gas_kwh_lhv=round(gas,3),unserved_kwh=round(unserved,3),pv_kwh=round(pv_total,3),spill_kwh=round(spill,3),battery_end_kwh=round(soc,3),loss_kwh=round(loss_total,3))

def main():
    configs=[('2x100',[100,100],0,0,0),('1x250',[250],0,0,0),('2x250',[250,250],0,0,0),('hybrid',[250,250],300,800,200)]
    rows={name:{'normal':simulate(b,pv,bat,p),'winter_n1':simulate(b,pv,bat,p,True)} for name,b,pv,bat,p in configs}
    demands=[load(h) for h in range(8760)]
    result={'provenance':'Independent reconstruction; earlier original files unavailable in isolated workshop. No official power sizing inference.','load_mean_kw':sum(demands)/8760,'load_peak_kw':max(demands),'configurations':rows,'pv_only_diagnostic':simulate([250,250],300,0,0)}
    assert abs(result['load_mean_kw']-154.28374077)<1e-8
    assert round(result['load_peak_kw'],2)==221.78
    assert rows['2x100']['normal']['unserved_kwh']>0
    assert rows['1x250']['winter_n1']['unserved_kwh']>0
    assert rows['2x250']['winter_n1']['unserved_kwh']==0
    assert rows['hybrid']['winter_n1']['unserved_kwh']==0
    assert rows['hybrid']['normal']['gas_kwh_lhv']<rows['2x250']['normal']['gas_kwh_lhv']
    assert rows['hybrid']['normal']['gas_kwh_lhv']<result['pv_only_diagnostic']['gas_kwh_lhv']
    path=pathlib.Path(__file__).parent
    (path/'results.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n')
    print(json.dumps(result,ensure_ascii=False,indent=2))
if __name__=='__main__':main()
