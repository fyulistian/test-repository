# CLAUDE.md — dev-tracker
<!-- Auto-loaded by Claude Code for every session in dev-tracker\ -->
<!-- Last updated: 2026-07-03 -->

> Inherits shell conventions + commit format from `Projects\CLAUDE.md` → `Users\fandi\.claude\CLAUDE.md`

---

## Repository Overview

| Field | Value |
|---|---|
| **Repo** | `dev-tracker` |
| **Owner** | Fandi Yulistian — fandi@aleph-labs.com |
| **Primary project** | BNI 20: Website Company Sitecore - 2026 |
| **Stack** | Sitecore XM 10.4.1, SXA 10.4.0, Scriban templating, .NET 8, Identity Server |
| **Purpose** | Daily journal · activity tracking · performance review tooling |

---

## Repository Structure

```
dev-tracker\
├── README.md                          ← Journal template + section examples + Google Form link
├── CLAUDE.md                          ← This file
├── .claude\
│   └── commands\
│       ├── journal.md                 ← /journal slash command
│       ├── plan-tomorrow.md           ← /plan-tomorrow slash command
│       ├── suggest-commit.md          ← /suggest-commit slash command
│       ├── gform.md                   ← /gform slash command (MANUAL ONLY — never auto-trigger)
│       ├── daily-tracker.md           ← /daily-tracker morning startup agent
│       └── review-validate.md         ← /review-validate performance review command
├── scripts\
│   └── review-deck-build.js           ← PPTX build script for performance review deck
├── output\
│   └── Fandi_4Month_Review_2026.pptx  ← latest generated review deck
├── journals\
│   └── YYYY\MM\YYYY-MM-DD.md          ← daily journal files
└── activity\
    └── YYYY-MM-DD\                    ← one folder per working day
        ├── <topic>\                   ← kebab-case, short name
        │   ├── scriban\               ← .html Scriban files (v1, v2, fix)
        │   ├── storybook\             ← Storybook HTML samples
        │   ├── component\             ← component screenshots (.png)
        │   └── img\                   ← error / progress screenshots
        └── notes.md                   ← daily plan + scratchpad
```

> `.claude\` is gitignored. All slash commands are local-only.
> Non-topic folders excluded from metrics: `img`, `INSTALL`

---

## Slash Commands

| Command | What it does |
|---|---|
| `/journal <date>` | Reads `notes.md` FIRST as source of truth, then all activity files (diffs scriban v1→v2), writes `journals\...\YYYY-MM-DD.md`; flags coverage gaps |
| `/plan-tomorrow [today\|yesterday\|date]` | Re-looks at REFERENCE day's notes+files AND journal, reconciles them, carries only OPEN items to TARGET's `notes.md` |
| `/suggest-commit [file\|folder\|all]` | Diffs staged/unstaged changes, suggests typed commit message + PS `$msg` command |
| `/gform <date>` | Reads journal, URL-encodes all fields, outputs Google Form pre-fill URL — **MANUAL ONLY** |
| `/daily-tracker` | Morning startup: scans activity + journals, prints session briefing, creates notes.md if missing |
| `/review-validate` | Validates performance review deck vs current dev-tracker data — report only |
| `/review-validate --update` | Validate + show diff + rebuild deck on explicit confirmation |
| `/review-validate --rebuild` | Force rebuild deck regardless of drift |
| `/review-validate --since <date>` | Limit scan to entries after given date |

> **`/gform` is intentionally manual** — never trigger automatically under any circumstance.
> **Google Form URL**: stored in `README.md` → `🔗 Google Form` section.

---

## Daily Workflow

```
Morning  → /daily-tracker          startup briefing + create notes.md if missing
During   → work, save files        activity\<date>\<topic>\scriban\, img\, notes.md
EOD      → /journal today          generate journal file
           /suggest-commit all     staged changes → commit message
           /gform today            MANUAL — generate Google Form pre-fill URL
```

---

## Core Workflow: Generating a Daily Journal

**Trigger:** `/journal <date>` — accepts `YYYY-MM-DD`, `today`, `yesterday`,
or Indonesian/English month names (`25 Mei`, `25 May`).

**Steps:**
1. Read ALL files inside `activity\YYYY-MM-DD\` — `.md`, `.html`; OPEN `.png` screenshots (template-branch / final-layout reveal completion state that filenames don't)
2. For Scriban files — diff v1 vs v2 to identify what changed and why
3. Match each activity to an **Activity Type** (see table below)
4. Pick the correct **Feeling** based on the day's tone
5. Write `journals\YYYY\MM\YYYY-MM-DD.md` following the template in `README.md`
6. Each distinct topic = one `Part` (Part 1, Part 2, etc.)

If no `activity\` folder exists for the date, fall back to `README.md` Current Work section.

---

## Journal Structure (quick reference)

```
======================================================================================================================

🧾 Daily Journal

Date: DD Month YYYY
Project: BNI 20: Website Company Sitecore - 2026
Feeling: <see Feeling Enum>

⸻

⏰ Log Activities

Part 1

Activity: <type label>
Description:
    <detail>

⸻

📅 Plan Ahead (Tomorrow)
•   <action>

⸻

⚠️ Risks / Blockers / Concerns
    •   <blocker with root cause>   OR   •   None

⸻

🙏 Gratitude
    •   Love my wife as always ❤️
    •   Fresh air and morning coffee ☕
    •   Always learning something new
    •   Never been better
    •   Stay humble, stay grateful

"<quote>"
― <Author>

======================================================================================================================
```

---

## `notes.md` Plan Format

```markdown
# Notes — DD Month YYYY

## 🎯 Focus for Today
- <carry-over from Plan Ahead or active blockers>

## 📋 Tasks
- [ ] <task 1>
- [ ] <task 2>

## 🧱 Known Blockers Going In
- <blocker> → <what to try>

## 📝 Scratchpad
<!-- freeform notes during the day -->
```

---

## Feeling Enum

| Value | When to use |
|---|---|
| `⭐ Great : Productive and positive` | Tasks completed smoothly, good flow |
| `✅ Good : Steady progress` | Solid output, things moving forward |
| `🔄 Okay : Up and down` | Mixed day, some progress, some friction |
| `⚠️ Struggling : Facing challenges` | Blockers hit, errors unresolved, stuck |
| `💤 Tired : Low energy` | Low output, fatigue |
| `🎯 Focused : In the zone` | Deep focused work, productive |

---

## Activity Type Labels

| Activity | `Activity:` label pattern |
|---|---|
| Scriban component work | `Scriban Development — <Component Name(s)>` |
| Sitecore install / setup | `Sitecore Local Installation — <subtitle>` |
| Bug fixes | `Bug Fix Tracker` |
| Writing docs | `Documentation — <Doc Name>` |
| Other-project support | `Support — <PROJECT> : <Task>` |
| LDAP / SAML / SSO work | `LDAP/SAML Integration — <subtitle>` |
| Code commit / review | `Code Review & Commit` |
| Page / feature integration | `Page Integration — <Page Name>` |
| Data ops / migration | `Data Operations — <subtitle>` |

---

## Status Badges (inline in Description)

```
Status: ✅ Done
Status: 🔄 On Progress
Status: 🔄 On Progress (Continued from <date>)
Status: ❌ Blocked — <reason>
```

---

## Scriban Diff Pattern

When `activity\` contains `component-v1.html` + `component-v2.html`:

1. Read both files
2. Identify what was added / removed / replaced
3. Journal entry format:

```
Component: <name> (v1 → v2)
    Page: <Page — Role>
    What changed (v2):
        - <change> → <reason / impact>
    Key fix summary:
        v1: <old approach and problem>
        v2: <new approach and benefit>
```

**Common Scriban patterns in this project:**
- `sc_raw` / `sc_field` / `sc_follow` / `sc_followmany` / `sc_query`
- `i_datasource` / `i_page` / `i_item` / `i_home`
- `sc_placeholder "key"` — SXA placeholder inside Scriban wrapper
- `resolve_general_link` — parses General Link XML (linktype, href, text, target)
- `array.reverse` on `sc_query "ancestor::*"` — top-down breadcrumb
- Null guards: `if $val != null && $val != ''`
- `sc_raw card 'FieldName' | string.split 'text="'` — reliable General Link text extraction (v2)

**SXA Rendering Variant Pattern (established 2026-06-10):**
- All Scriban variants → shared view: `~/Views/BNI/Component/Empty/GlobalWrapper.cshtml`
- Custom `.cshtml` only when Razor logic is required beyond Scriban
- Scriban variant script owns full HTML output including `sc_placeholder` calls
- Mega menu / datasource content → managed from Sitecore Content Editor, no deployment needed

---

## Commit Message Convention

### Types

| Type | When to use |
|---|---|
| `track:` | Activity folders, journal `.md` files, `notes.md` |
| `docs:` | `README.md`, `CLAUDE.md`, documentation changes |
| `refactor:` | Rename / restructure files or folders |
| `chore:` | Config, `.gitignore`, tooling, dependency updates |
| `fix:` | Correct a bug or error in an existing file |
| `feat:` | Add a new feature or capability |
| `style:` | Formatting only — whitespace, indentation, no logic change |
| `perf:` | Performance improvement |
| `test:` | Add or correct tests |
| `revert:` | Revert a previous commit |

### Rules
- Format: `<type>: <Capitalized short summary>` — **≤50 characters**
- Imperative mood — "Add", "Update", "Fix" (not "Added" / "Fixes")
- No period at end
- Body: blank line separator, wrap at 72 chars, `- What:` / `- Why:` bullets
- **Granularity:** a day's activity folder and its journal are **separate `track:` commits** (activity first, then journal)
- **Empty-stub guard:** a `journals\...\YYYY-MM-DD.md` that exists but is a 1-line/empty stub is **NOT generated** — treat as missing and backfill from the activity folder

```powershell
$msg = "<type>: <Capitalized short summary under 50 chars>

- What: <what changed>
- Why: <why it was changed>
- Journal: journals/YYYY/MM/YYYY-MM-DD.md"
git commit -m $msg
```

> **Avoid** `@'...'@` here-strings — injects a leading `@` into commit subject on GitHub.

---

## Naming Conventions

- Activity folders and file names: **kebab-case, short** (no spaces)
- Scriban files: `<component-name>-v1.html`, `<component-name>-v2.html`, `<component-name>-fix.html`
- Screenshot files: `<descriptive-kebab>.jpeg` / `.png` (no timestamps, no spaces)
- Journal files: `YYYY-MM-DD.md` under `journals\YYYY\MM\`
- Topic subfolders to exclude from metrics: `img`, `INSTALL`

---

## Key Technical Context

### Sitecore / BNI Project

| Field | Value |
|---|---|
| CM host | `cm.bni.local` → `C:\inetpub\wwwroot\cm.bni.local` |
| IS host | `id.bni.local` → `C:\inetpub\wwwroot\id.bni.local` |
| Staging CM | `https://awscm-bid.equiw.com` |
| Staging CD | `https://awscd-bid.equiw.com` |
| Storybook | `https://awssb-bid.equiw.com` |
| Design repo | `bni-corporate-web-html` (local) |
| Install script | `sitecore-interaktif-install-updated.ps1` |
| Install status | ✅ Completed 2026-05-25 — CM + IS + SQL + Solr + CD all operational |

See `Projects\CLAUDE.md` → **Local install — resolved issues** for full install lessons learned.

### SAML / ADSS Integration
- **IdP:** ManageEngine ADSelfService Plus (`admplusdev.bni.co.id`)
- **Finding:** ADSS sends `username` (not `sAMAccountName`) and `group` (CN only, not full DN)
- **Files merged (21 May 2026):** `SamlSettings.cs`, `SamlClaimsTransformer.cs`, `AuditTrailLog`
- **Fandi's contribution:** `AuditTrailLog` module only — full SAML integration done by teammate

### Performance Review

| Field | Value |
|---|---|
| Last deck | `output\Fandi_4Month_Review_2026.pptx` — Mar–Jun 2026 |
| Key metrics | 39 days · 90% positive sentiment · ~75% plan hit rate · 18 work topics |
| Validate | `/review-validate` |
| Rebuild | `/review-validate --rebuild` |
| Build script | `scripts\review-deck-build.js` |
| Rebuild dep | `npm i pptxgenjs` — no `package.json` in repo yet |
| Rebuild run | `$env:NODE_PATH = (npm root -g)` before `node scripts\review-deck-build.js` — resolves global pptxgenjs |
| Output path | script writes repo-relative `output\...pptx` — never `/mnt/user-data/outputs/` (claude.ai sandbox path — `ENOENT` on Windows) |
| Output | `output\` is **gitignored** — generated `.pptx` never committed |
| Protected slides | S1 Cover · S4 SAML attribution · S12 Support asks |
| Data slides | S5 Topics · S10 Metrics · S13 Summary |

---

## Ongoing / Unresolved Items (as of 2026-07-03)

| Item | Status | Notes |
|---|---|---|
| Sitecore XM 10.4 local install | ✅ Done | 2026-05-25 — CM, IS, SQL, Solr operational |
| Solr schema populate | ✅ Done | 11 bni_* cores — 2026-05-25 |
| Solr index rebuild | ✅ Done | Content cores indexed — 2026-05-25 |
| CD site 302 (workflow) | ✅ Done | Approve workflow + republish — 2026-05-26 |
| IIS default SSL site warning | ✅ Done | cm.bni.local IP-based (sslFlags=0) — 2026-05-26 |
| Sitecore CLI setup | ✅ Done | .NET 6.0.36 + plugins 5.2.113 + login confirmed |
| Header New rendering variant | ✅ Done | GlobalWrapper.cshtml + Scriban header-wrapper.html — 2026-06-10 |
| rv-breadcrumb v2 | ✅ Done | rv-breadcurmb-v2.html — 2026-06-10 |
| CC Page duplicate nav fix | ✅ Done | Removed duplicate Navigation from __Standard Values — 2026-06-10 |
| CC Page template publish to CD | ✅ Done | Published — 2026-06-10 |
| CC Detail Hero | ✅ Done | v1→v2 complete |
| CC Landing Tabing List | ✅ Done | v1→v2 complete |
| SAML + AuditTrailLog | ✅ Done | Merged to main — 2026-05-21 |
| Performance review deck | ✅ Done | Fandi_4Month_Review_2026.pptx — 2026-06-22 |
| Deck day-count re-sync | 🔄 Pending | Adding May 27/28 → 42 working days; deck currently shows 40 — re-run `/review-validate --rebuild` |
| Scriban component backlog | 🔄 In Progress | Continue rendering-variant backlog |
| Custom 404 implementation | ⏸️ On Hold | Using CM default Sitecore static error page instead of custom module — ref: https://doc.sitecore.com/sai/en/developers/sitecoreai/content-modeling-and-presentation/sitecoreai-for-developers/content-editor-items/sites/configure-a-custom-static-error-page.html (staged: 404.config, Custom404ItemSetter.cs, ErrorStatusModule.cs, 404SxaOverride.config) |
| Fee/Interest load-more fix | ✅ Done | BniTableLoadMore v2 — showAllRows + Show gate, verified on STG — 2026-06-23 |
| Savings page migrations | ✅ Done | Futures + Transactional migrated & published to CD — 2026-06-26 |
| PLP / PDP template baselines | ✅ Done | General Use baselines (refs: Global Network / Savings·Loans·CC) — 2026-07-01 |
| Global Search scopes + UI | ✅ Done | 6 scopes, `s`+ScopeQuery, client-side merge/sort — 2026-07-02 |
| News/Promo tag filtering | 🔄 In Progress | News List source pattern; apply to Promo lists next |
| Locator Items bucketing | 🔄 In Progress | Publish to web + rebuild sitecore_sxa_web_index (carried 18 Jun) |

---

## dev-tracker Constraints

- **NEVER** modify journal files after they are written — read only
- **NEVER** delete `DONE.md` — append only
- **NEVER** auto-trigger `/gform` — always manual
- `/review-validate` is read-only unless `--update` or `--rebuild` flag is explicitly passed
- PowerShell 5.1 · `curl.exe` only — never `Invoke-WebRequest`
