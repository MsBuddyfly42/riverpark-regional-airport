# Passenger journeys

Open `passenger.html`; the original director mode remains at `index.html`, with a single link between them. `app.js` and `styles.css` are unchanged. No runtime dependencies or build required.

## Journey

Plan a holiday → buy round-trip ticket → book airport transfer → check in → repack/label luggage → screening → lounge and live gate change → find gate → boarding → seat/stow/belt → takeoff, cruise and landing → arrivals → match baggage receipt → hotel transfer. The explicit unconnected vacation handoff advances to day 14, then hotel checkout starts the complete return pathway. The existing round-trip ticket is reused but check-in and every airport stage are repeated. Return concludes with luggage collection and transport home.

The simulation clock advances on actions and explicit waiting, and pauses while reading. Four reproducible weather scenarios: clear, rain, storm, snow. Storm/snow add a 45-minute gate hold; rain/snow have reduced-motion-aware visual effects. All flight times share a fictional local clock (no time zones). No real booking/payment/identity services. Names should be fictional.

The fictional game holiday windows are Dec 15–Jan 10, July 1–20, Nov 15–Dec 5. The complete inclusive 14-day itinerary must fit within one window. They are configurable policy data, not claims about official holidays. Return is exactly departure + 13 days. No vacation-city gameplay or city connection is asserted.

## Reuse

`passenger-core.js` has no DOM dependency; use `RiverparkPassenger` in a browser or `require` it in Node. Exports include `fresh`, `act`, `valid`, `allowed`, `holidays`, `handoff`, `stages`, and `labels`. `act(state,currentStage,values)` validates the current task and returns `{ok,message}`. UI-level forms are not the only stage guard. Weather and both legs use the same engine. `allowed(date,windows)` accepts alternate holiday policy windows. A future city must agree its own policy before connecting.

`handoff(state)` exports `riverpark-vacation/v1` JSON: passenger, destination, departure, returnDate, durationDays, holidayOnly, ready, returnStage and `connected:false`. `ready` is true only at the completed outbound/hotel stage. This is an export contract, not a working cross-app save transfer. A future host must validate it and coordinate the return explicitly; no arbitrary callback URLs or cross-origin messaging are accepted.

Browser save key: `riverpark.passenger.v1`, separate from director and Loom saves. JSON backups can restore on another device; malformed/incompatible files leave current state unchanged. Save failures show an export warning. Saves are local, not account-synced. Reset requests confirmation. Do not import untrusted backups as proof of completion; this is personal practice, not an anti-cheating system.

## Verification

`node tests/passenger.cjs` exercises both legs in all four weather conditions, holiday boundaries including cross-year dates, invalid dates, wrong name/gate/flight/bag decisions, stage guards, checked-bag repacking, hotel checkout, funds, serialization and handoff readiness.

Educational source: https://www.tsa.gov/travel/travel-tips/travel-checklist (consulted October 29, 2026). Practice checkpoint steps are simplified and explicitly defer to airport staff and current equipment. Fictional airline allowances, fares, groups, seating, and timing are scenario rules.

Photographic assets are bundled locally from Unsplash image delivery, under the Unsplash license (https://unsplash.com/license):
- terminal.jpg: https://images.unsplash.com/photo-1517400508447-f8dd518b86db — traveler and departure board.
- gate.jpg: https://images.unsplash.com/photo-1542296332-2e4473faf563 — aircraft at jet bridge.
- flight.jpg: https://images.unsplash.com/photo-1436491865332-7a61a109cc05 — aircraft wing in flight.

These are reference photographs, not Riverpark location photographs. No remote photo dependency at runtime.
