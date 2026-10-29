# Small data center / place 28

At [48,.6,-35], north of the existing [48,.6,-24] power station. Old objects and load simulation are not moved or changed. The map labels their existing sector `электростанция и ЦОД`; no extra parcel is settled. The slab ends at z=-37.6, the station starts at z=-31.0; a short footpath crosses the gap. A visitor-only inspection cutaway hides the nearby power hall, common slab, or unselected unit. Home/collapsing the inspector restores them. No production writes.

The open rig is a stylized reconstruction from the actual supplied photograph 27088: L-section metal frame, household wire rack, horizontal triple-fan cards and right-side vertical cards, beige formed egg packaging, corrugated sheet and rolled cardboard, silver CPU fin stack, exposed motherboard, white front cable, black loops, red bottom pad. The mesh count is an artistic arrangement, not a hardware inventory identified from the photo. The Mike tower is generic: only a parts-table screenshot, not a case photo, was supplied. Three.js is local.

The public catalog is `public/datacenter-catalog.json`, imported locally into the frontend. `garage` v5 extends the *existing* pump tool with `datacenter=inspect|alexey|mike`, readable anywhere. It returns the sourced catalog (including explicit unknowns) without resetting any garage/energy state. Normal elapsed energy time still passes. Mixed energy/legacy args are rejected. Existing energy tools/32 total tools remain. New `datacenter_alexey` and `datacenter_mike` manifest objects support basic `study` near their actual positions. No new electricity, temperature, inference, rewards, or compulsory mini-game.

Mike's values are transcribed from his own June-July 2026 table (27094), not verified receipts. Mainboard **19599** (not 19999); arithmetic sum **569283**, including delivery and **five planned rows**. GPU/RAM/cooler rows cite receipt descriptions from the table; those receipts were not supplied. Exact listed SKU fields are preserved; absent SKU stays null. Actual purchased prices, unknown prices, and planned amounts must not be conflated. No current listings have been independently verified. Alexey's exact board/RAM/card SKU, dates and purchase prices were not supplied to this workshop. They stay explicitly unknown; the price addendum remains unfinished, even though the object is installed. Do not fill gaps from appearance or memory.

## Reproduce

`npm run build`

`node tests/datacenter.test.cjs` — public catalog equality and sum, planned vs purchased, unknown values, read-only inspection, normal-time energy advance, v2 migration normalization with all stores/collections intact, mixed args, registry and 8-module/32-tool limit.

`node tests/datacenter-browser.test.cjs desktop` and `mobile` — unit tabs, passport access, four isometric angles, short screens, picking, map, home, neighboring station and old leg count. PNGs under `/captures`.

`node tests/datacenter-live.test.cjs desktop` and `mobile` — synthetic HTTP snapshot and EventSource event fixture, sleep/awake head at the rig, needs/history, small screens and zero API writes. **Not** a real resident action or actual network SSE handshake.

Run `world_mechanics` for fresh tests plus migration/tick from the actual current live state, then ordinary `world_preview` and publish. Do not claim all old browser games were fully rerun unless they were.

## Price accounting, revision 2

The existing `purchaseRub` fields are kept verbatim for compatibility with earlier passports; for a `status: план` row they are a planned amount, **not** a confirmed payment. UI now labels those five rows `плановая сумма`, never `покупка`. `priceSummary` is a read-only catalog projection returned by the same resident tool, not new game state or currency. Mike: receipt-labeled rows 462388 RUB (includes 660 delivery), planned rows 106895 RUB, sum 569283 RUB. These labels come from the participant's table, not independently checked receipts. Alexey: all four amounts still unknown; zero known sums must not be read as zero cost. No current prices have been checked. `scripts/sync-mechanics.mjs` embeds the public JSON in the server module during reproducible preparation to avoid frontend/server drift.

`node tests/datacenter-accounting.test.cjs` additionally checks exact row conservation, sums, nulls, schema assertions and read-only equality with ticks across migration/action modes and elapsed times. No new physics, state fields, positions, session changes or writes. The price addendum is still PARTIAL until real matching SKU/purchase evidence/current dated offers are obtained.

Close inspection also temporarily hides the resident mesh, its ring and shadow to keep top cards visible even if the resident is at the unit. Saved visibility is restored on home, inspector collapse, switching place or dream entry. Server position/action/sleep and public HUD/history are untouched.
