# Mike: virtual computation exchange

Existing datacenter, existing `datacenter_mike`, garage version 4. No additional datacenter or node. Inspired by the requested permission + remote task exchange pattern; no DPC implementation, model generation, network, member machine connection, or real hardware throughput claim. Unchanged catalog and energy dispatch. Existing 8 modules / 32 tool names remain.

`resident_ext_garage_pump`:
- `sharing: inspect` anywhere: public permission, active task, queue and receipts.
- `sharing: enable|disable` within 2.4 of `[50.5,.6,-35]`: resident's game permission for Mike's existing virtual unit. Initially disabled. Revocation **cancels** unfinished work and records cancelled receipts, never quietly finishes it later.
- `sharing: submit, task: sort|checksum|route, batch: 1|2|3, ticket: nextTicket` anywhere. An active task and at most three waiting. Each fictional job takes 60 seconds × batch. No prompt or member-provided code is executed. Output is structured deterministic simulation data, not LLM-generated text.

Monotonic durable ticket numbers make retry safe, including after a receipt has left the last-12 display. A retry returns the existing record or a retired-ticket response, never another job. Deadline-based FIFO completion catches up offline during tick/action/migrate; a completed job is removed before the next is started, then saved atomically with its receipt. Ticks every 30 seconds. Public progress is the latest server snapshot; no browser settlement of resident work. The virtual tasks do not add an invented electrical load or alter the station's old profile.

Browser: choose place28 → inspect → Mike tab. Lights on the existing front panel: blue running, amber waiting, twelve green receipt slots. Public controls are read-only. “своя песочница” switches to a separate localStorage-backed simulation; no API writes. Public events still arrive while local play is open. Reload returns to public view when available; local work/results persist separately. With no sharing snapshot, only the independent local game is offered.

Tests:
- `node tests/compute-sharing.test.mjs`: off/guards/position, queue and busy, exact deadlines, independent calculations, 104 completions, cancellations, retries and retired tickets, JSON/reload/offline, backward clock, additive legacy migration, normal energy tick equivalence at every timestamp.
- `node tests/compute-sharing-stress.test.mjs`: 8000 deterministic transitions, accepted/work/done/cancelled conservation, unique immutable receipts, JSON migration every17 steps, and permanent retry safety.
- `node tests/compute-sharing-browser.test.cjs desktop` / `mobile`: synthetic public HTTP snapshot + synthetic EventSource events, not a real GLM action/network SSE handshake. Public readonly, local queue/results/reload and independence, 3D lights, four view angles, 320×568/650×390/390×650, awake/sleep/needs/history, zero writes. PNGs `/captures/sharing-*`.
- `node tests/datacenter-browser.test.cjs desktop|mobile`: old catalog, both units, view angles, map, picking/home, old station access. `node tests/power.test.cjs` and all old mechanics cores remain regression tests.
- Trusted `world_mechanics` checks fresh state, declared tools and **actual live-state** migrations/ticks before release.

