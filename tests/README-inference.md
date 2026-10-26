# Inference monument

`src/inference.js` is one static bronze sculpture at [48,-48], north of the existing datacenter. The old yard and every prior structure retain their coordinates. Nineteen separated horizontal cast plates form a head, with seven brass incoming paths at the rear and a single illuminated token at its lips. A stepped plinth carries the inscriptions «ИНФЕРЕНС» and «ЕЩЁ ОДИН ТОКЕН». Thirteen paving stones join the datacenter's north edge. No real model is run by this object; no capacity, shared-compute accounting, resource production, needs or game saves are modified.

The inhabited sector2:-2 and place29 lead to actual geometry. Stable resident id `inference_monument` has its landing point at the front-left plinth [46,.6,-44.8], so the resident does not materialize inside the bronze head. It offers the existing 45-second `study` action. It uses the existing trusted action/observation pipeline, not an invented new tool or a use-counter mechanic. Visitors can inspect, rotate, pan and zoom without leaving the resident's read-only view or writing to an API. The sculpture remains in the shared world while inspected, not in an unrelated dream.

Tests:

- `node tests/inference.test.mjs`: actual Three.js geometry, finite vertices, 19 layers/one token, dimensions, batching, registry, path and 8 modules/32 tools retained.
- `node tests/inference-browser.test.cjs desktop` / `mobile`: map travel, real clickable controls and sculpture picking, all4view angles, framing of all6611mesh vertices, zoom, home/reenter/reload, saved local games untouched, short screen sizes and overflow/errors.
- `node tests/inference-live.test.cjs desktop` / `mobile` (optionally `awake`): **synthetic HTTP snapshot/EventSource-event fixtures**, not an actual GLM action or network SSE handshake. Read-only viewing, sleep/position/needs, history/filter/collapse and zeroAPIwrites.
- `world_mechanics`: fresh declared cases plus actual live-state migration/ticks of all8existing modules.

The vitals declared cafe tests previously assumed the live resident was never at the cafe; when this check ran while he actually was near it, an order correctly succeeded instead of returning `visit_cafe`. Their cafe+farm mixed-operation guard is now position-independent. The server code and schema are unchanged. Dedicated cafe-rest/cafe/quote-farm tests still exercise both near/far distances, orders and consumption. Old exact settled-sector assertions were updated from16to17 for the new occupied plot, without changing mechanics assertions.
