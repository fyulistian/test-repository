# CLAUDE.md — dev-tracker
<!-- Auto-loaded by Claude Code for every session in dev-tracker\ -->
<!-- Last updated: 2026-07-03 -->

> Inherits shell conventions + commit format from `Projects\CLAUDE.md` → `Users\fandi\.claude\CLAUDE.md`

---

## Repository Overview

| Field | Value |
|---|---|
| **Repo** | `dev-tracker` |
| **Owner** | Fandi Yulistian — fyulistian013@gmail.com |
| **Primary project** | <Project Name> |
| **Stack** | <stack list related to project> |
| **Purpose** | Daily journal · activity tracking · performance review tooling |

---

## Repository Structure

```
dev-tracker\
├── README.md                          ← Journal template + section examples + Google Form link
├── CLAUDE.md                          ← This file
├── scripts\
│   └── review-deck-build.js           ← PPTX build script for performance review deck
├── output\
│   └── Fandi_4Month_Review_2026.pptx  ← latest generated review deck
├── journals\
│   └── YYYY\MM\YYYY-MM-DD.md          ← daily journal files
└── activity\
    └── YYYY-MM-DD\                    ← one folder per working day
        ├── <topic>\                   ← kebab-case, short name
        │   ├── files\               ← .html files (v1, v2, fix)
        │   ├── storybook\             ← Storybook HTML samples
        │   ├── component\             ← component screenshots (.png)
        │   └── img\                   ← error / progress screenshots
        └── notes.md                   ← daily plan + scratchpad
```

---

## Daily Workflow

```
Morning  → /daily-tracker          startup briefing + create notes.md if missing
During   → work, save files        activity\<date>\<topic>\files\, img\, notes.md
EOD      → /journal today          generate journal file
           /send today             send journal file
```

---

## Core Workflow: Generating a Daily Journal

**Trigger:** `/journal <date>` — accepts `YYYY-MM-DD`, `today`, `yesterday`,
or Indonesian/English month names (`25 Mei`, `25 May`).

**Steps:**
1. Read ALL files inside `activity\YYYY-MM-DD\` — `.md`, `.html`; OPEN `.png` screenshots (template-branch / final-layout reveal completion state that filenames don't)
2. For files — diff v1 vs v2 to identify what changed and why
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
Project: <Project Name>
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
| Component work | `Development — <Component Name(s)>` |
| install / setup | `Local Installation — <subtitle>` |
| Bug fixes | `Bug Fix Tracker` |
| Writing docs | `Documentation — <Doc Name>` |
| Other-project support | `Support — <PROJECT> : <Task>` |
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

## Diff Pattern

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
- Files: `<component-name>-v1.html`, `<component-name>-v2.html`, `<component-name>-fix.html`
- Screenshot files: `<descriptive-kebab>.jpeg` / `.png` (no timestamps, no spaces)
- Journal files: `YYYY-MM-DD.md` under `journals\YYYY\MM\`

---

## dev-tracker Constraints

- **NEVER** modify journal files after they are written — read only
- **NEVER** delete `DONE.md` — append only
- **NEVER** auto-trigger `/gform` — always manual
- PowerShell 5.1 · `curl.exe` only — never `Invoke-WebRequest`
