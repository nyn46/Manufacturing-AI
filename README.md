# Manufacturing AI · Factory Opportunity Explorer

Start with the work in your factory. Find where AI or automation could help before deciding what to build.

An illustrated, interactive guide for factory owners and manufacturing teams. Explore 24 processes, adapt a filled-in sample factory, review candidate opportunities, and assess a sensible first pilot.

**[Open the live explorer](https://factory-opportunity-explorer.nayansi46.chatgpt.site/)** · Built by [Nayansi Jain](https://github.com/nyn46)

![Factory workflow illustration](dist/assets/factory.png)

## Features

- **Explore opportunities:** choose an industry and browse six departments, 24 detailed processes, discovery questions, records needed, human approvals, possible benefits, and measures to check.
- **Try your factory:** start with sample processes and illustrative records. Edit steps, tools, problems, and records; add, remove, or reorder processes; undo structural changes; export a JSON draft.
- **Review matches:** reveal candidate opportunities and compare current workflows with proposed AI and automation workflows.
- **My opportunity report:** assess frequency, manual effort, consequences, data access, ownership, integration, and existing software capabilities. Download an HTML report.
- Practical examples of pattern analysis, scheduling decisions, supplier follow-up, and a daily attention list.
- Responsive layouts, gentle entrance animations, scroll reveals, keyboard focus styles, reduced-motion support, and print controls.

## Run locally

No framework, package installation, API key, or build step is required. Serve the static files over HTTP because the app uses JavaScript modules.

```sh
git clone https://github.com/nyn46/Manufacturing-AI.git
cd Manufacturing-AI
python3 -m http.server 8000 --directory dist
```

Open **http://localhost:8000** in a modern browser. On Windows, `py -m http.server 8000 --directory dist` also works when Python is installed.

## Deploy

Upload the contents of `dist/` to a static host. The files are ready to serve as-is. There are no environment variables or server services to configure.

| Setting | Value |
| --- | --- |
| Framework | None / static HTML |
| Build command | None |
| Publish directory | `dist` |

For GitHub Pages, publish the contents of `dist/` using a Pages deployment workflow. Hash-based tabs require no server-side route rewrites. Linking this repository does not automatically update the existing ChatGPT-hosted site.

## How suggestions work

Suggestions use **catalogue keyword matching**, not a live language model or an analysis of factory systems. Editing a process updates the catalogue matches. A match is a starting point to investigate, not proof that a bottleneck exists.

Sample records are fictional, independent examples, not one reconciled factory dataset. Visitor descriptions are unverified. The readiness assessment uses visitor inputs; monthly manual effort is **not** guaranteed savings, cash payback, or a forecast. Decisions and approvals remain with authorised people.

## Data and privacy

Drafts and readiness assessments are stored in the current browser's `localStorage`. The application does not send these entries to an AI service and has no backend, analytics integration, or account system. Browser storage can be cleared or unavailable, so export anything you need to keep. Drafts do not sync across devices. External reference links open third-party websites.

## Project structure

| File | Purpose |
| --- | --- |
| `dist/index.html` | Four-tab interface |
| `dist/style.css` | Responsive styling, print rules, and motion |
| `dist/app.mjs` | Industry guide and examples |
| `dist/data.mjs`, `dist/catalogue.mjs` | Process content and opportunity catalogue |
| `dist/factory-editor.mjs` | Factory draft and JSON export |
| `dist/opportunity-matcher.mjs` | Samples, validation, and keyword matching |
| `dist/sample-records.mjs` | Illustrative records |
| `dist/discovery.mjs` | Candidate workflows, readiness forms, HTML report |
| `dist/assessment.mjs` | Readiness logic and manual-effort calculation |
| `dist/motion.mjs` | Scroll reveals and tab transitions |
| `dist/examples.mjs` | Practical examples |
| `dist/assets/` | Factory and department illustrations |

## Development checks

With Node.js installed, check module syntax without installing dependencies:

```sh
for file in dist/*.mjs; do node --check "$file" || exit 1; done
```

Before publishing changes, check the four tabs, selectors, sample editing, matches, assessment inputs, exports, mobile layout, and reduced-motion behaviour in a browser.

## Credits and reuse

Created by Nayansi Jain. Illustrations were generated for this project. Process references are linked inside the guide. No open-source licence has been selected; public availability alone does not grant an unrestricted reuse licence.
