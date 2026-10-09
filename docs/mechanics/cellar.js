// A patient cellar: no spoilage, no daily reward, no penalty for being away.
function world(input) {
  const old = input.state || {};
  const s = JSON.parse(JSON.stringify(old));
  if (!Array.isArray(s.shelf)) s.shelf = [];
  if (!Number.isInteger(s.nextId)) s.nextId = 1;
  if (!Number.isInteger(s.cutCount)) s.cutCount = 0;
  if (!['damp','dry'].includes(s.air)) s.air = 'damp';
  if (!('batch' in s)) s.batch = null;
  if (!Number.isFinite(s.updated)) s.updated = input.now;
  // Integrate elapsed time once. A late tick never over-ripens a wheel.
  const dt = Math.max(0, input.now - s.updated);
  if (s.batch) {
    const b = s.batch;
    const step = Math.min(dt, Math.max(0, 360 - b.age));
    b.age += step;
    b.exposure[b.face] += step;
    b[s.air === 'damp' ? 'wet' : 'dry'] += step;
  }
  s.updated = Math.max(s.updated, input.now);
  let result = null, label = 'осматривает сырный погреб', seconds = 10;
  if (input.mode === 'action') {
    const a = input.args || {};
    if (input.tool === 'set_batch') {
      if (s.batch) result = {ok:false, reason:'wheel_present', remaining:Math.max(0,360-s.batch.age)};
      else {
        s.batch = {id:s.nextId++, culture:a.culture, age:0, face:0, exposure:[0,0], wet:0, dry:0, turns:0};
        result = {ok:true, id:s.batch.id, culture:a.culture, ready_in:360};
        label = 'закладывает сырное колесо'; seconds = 35;
      }
    } else if (input.tool === 'tend') {
      s.air = a.air;
      if (s.batch && s.batch.age < 360 && a.turn) {s.batch.face = 1-s.batch.face; s.batch.turns++;}
      result = {ok:true, air:s.air, face:s.batch ? s.batch.face : null, turns:s.batch ? s.batch.turns : 0};
      label = 'проветривает погреб и смотрит корку'; seconds = 20;
    } else if (input.tool === 'cut') {
      const b = s.batch;
      if (!b || b.age < 360) result = {ok:false, reason:b?'not_ready':'no_wheel', remaining:b?360-b.age:0};
      else {
        const even = Math.abs(b.exposure[0]-b.exposure[1]) <= 120;
        const kind = !even ? 'lopsided' : b.culture === 'moon' && b.wet >= 180 ? 'moon_stair' : b.culture === 'stone' && b.dry >= 180 ? 'stone' : 'holes';
        const cheese = {id:b.id, culture:b.culture, kind, exposure:b.exposure.slice(), wet:b.wet, dry:b.dry, turns:b.turns};
        s.shelf.push(cheese); s.shelf = s.shelf.slice(-6); s.cutCount++; s.batch = null;
        result = {ok:true, cheese, stored:s.shelf.length};label = 'разрезает колесо и заглядывает внутрь';seconds = 30;
      }
    }
  }
  const b = s.batch;
  const pub = {air:s.air, batch:b ? {...b,ready:b.age >= 360,remaining:Math.max(0,360-b.age)} : null, shelf:s.shelf, cutCount:s.cutCount};
  return {state:s, public:pub, result, seconds, label};
}
