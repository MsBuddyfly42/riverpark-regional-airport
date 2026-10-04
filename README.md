# Riverpark Regional Airport — Friday Night Storm

A fictional, browser-based airport-operations simulation. You are the Airport Director at Riverpark Regional Airport (RPA), an Arkansas-inspired regional gateway facing its first major Friday-evening thunderstorm peak.

## Play now

Open `index.html` in a modern browser, or deploy this repository as a static site. No installation, database, account, API key, or build tooling is required.

## Gameplay

The shift presents four sequential operational decisions:

1. Manage the security queue before passengers miss boarding.
2. Resolve a conflict at Gate 4 caused by late-arriving flight RP214.
3. Choose between Belt 2 recovery and the CR801 cargo weather window.
4. Decide what Riverpark protects as the storm reduces runway capacity.

Every decision changes cash reserves, passenger satisfaction, airline confidence, cargo confidence, system-health indicators, and the end-of-shift score.

## Local launch

```bash
# Clone the repository
git clone https://github.com/MsBuddyfly42/riverpark-regional-airport.git
cd riverpark-regional-airport

# Open index.html in your browser
```

A lightweight local static server is optional:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Render deployment

This repository contains `render.yaml` for a static-site deployment. In Render:

- Select **New → Static Site**
- Connect this GitHub repository
- Branch: `main`
- Build Command: leave empty
- Publish Directory: `.`
- Enable auto-deploy

## Project structure

```text
index.html                   Game interface
styles.css                   Responsive dashboard styling
app.js                       Simulation state, decisions, timer, and scorecard
assets/riverpark-logo.svg    Original RPA vector mark
render.yaml                  Render static-site blueprint
```

## Scope and safety

Riverpark is fictional. It uses invented airlines, flights, metrics, facilities, and procedures. It is an entertainment simulation and does not connect to, control, replicate, or provide instructions for real airport or air-traffic operations.

## Roadmap

- Multiple randomized shifts and weather patterns
- Airport expansion and long-term career mode
- Cargo Village, RiverLink, and energy-resilience scenarios
- Better mobile interaction and accessibility settings
- Optional saved-game support

Built as the first playable prototype for Riverpark Regional Airport.