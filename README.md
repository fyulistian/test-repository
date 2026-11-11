# Dev Tracker — Daily Journal & Activity Log

> **For AI tools (`Claude Code` / Local AI)**: Read the `## Current Work` section first for active tasks and blockers, then use the rest of this file as the structural reference and journal generation template. Full workflow definitions reside in `CLAUDE.md`.

---

## 📋 Current Work (AI: parse this first)
<!-- Update this section at the start of each working day -->
<!-- Last updated: <Date> -->

### 🔴 Active / In Progress

| Item | Project | Status | Notes |
|------|---------|--------|-------|
| Sample Item | Project | Status | Notes |

### ✅ Recently Completed

| Date | Item | Project | Notes |
|------|------|---------|-------|
| Sample Date | Sample Item | Project | Notes |
| Sample Date | Sample Item | Project | Notes |
| Sample Date | Sample Item | Project | Notes |
| Sample Date | Sample Item | Project | Notes |

### 🧱 Blockers

| Blocker | Affects | Notes |
|---------|---------|-------|
| Sample Blocker | Affects | Notes |
| Sample Blocker | Affects | Notes |

---

## 🏗️ Repository Overview & Architecture

The `dev-tracker` repository is engineered for automated daily developer journaling, precise activity tracking, and streamlined performance review artifact generation. It enforces strict folder hierarchies, typed git conventions, and seamless integration with local AI coding assistants.

```
dev-tracker\
├── README.md                          ← Journal template + section examples + quick ref
├── CLAUDE.md                          ← AI assistant session rules & command triggers
├── scripts\
│   └── review-deck-build.js           ← PPTX build script for performance reviews
├── output\
│   └── Fandi_4Month_Review_2026.pptx  ← Latest generated performance review deck
├── journals\
│   └── YYYY\MM\YYYY-MM-DD.md          ← Compiled immutable daily journal files
└── activity\
    └── YYYY-MM-DD\                    ← One folder per working day
        ├── <topic>\                   ← kebab-case, short descriptive name
        │   ├── files\               ← Source artifacts (.html v1, v2, fix)
        │   ├── storybook\             ← Storybook HTML samples
        │   ├── component\             ← Component screenshots (.png)
        │   └── img\                   ← Error / progress screenshots
        └── notes.md                   ← Daily plan + scratchpad
```

---

## 🔄 Daily Workflow & Automation

The lifecycle of each working day follows a predictable, structured pattern combining manual engineering notes with automated AI journal compilation.

```
Morning  → /daily-tracker          Startup briefing + create notes.md if missing
During   → Work, save files        activity\<date>\<topic>\files\, img\, notes.md
EOD      → /journal today          Generate journal file in journals\YYYY\MM\
           /send today             Send/sync journal file
```

### Core Workflow: Generating a Daily Journal (`/journal <date>`)
1. **Read Inputs:** Read ALL files inside `activity\YYYY-MM-DD\` (`.md`, `.html`); open `.png` screenshots to inspect visual completion states.
2. **Diff Analysis:** Diff `v1` vs `v2` files to explicitly identify what changed and why.
3. **Classification:** Match each distinct task block to an **Activity Type** and select the appropriate **Feeling Enum**.
4. **Compile:** Write `journals\YYYY\MM\YYYY-MM-DD.md` strictly following the template. Each distinct topic maps to one part (`Part 1`, `Part 2`, etc.).
5. **Fallback:** If no `activity\` directory exists for the date, fall back to the `Current Work` section in this file.

---

## 🌿 Git Commit Standards

All commits within the repository must adhere to typed prefixes and strict formatting rules.

### Commit Types

| Type | When to use |
|---|---|
| `track:` | Activity folders, journal `.md` files, `notes.md` |
| `docs:` | `README.md`, `CLAUDE.md`, documentation updates |
| `refactor:` | Renaming or restructuring files/folders |
| `chore:` | Configuration, `.gitignore`, tooling, dependency updates |
| `fix:` | Correcting a bug or error in an existing file |
| `feat:` | Adding a new feature or capability |
| `style:` | Formatting only (whitespace, indentation, no logic change) |
| `perf:` | Performance improvements |
| `test:` | Adding or correcting test suites |
| `revert:` | Reverting a previous commit |

### Formatting Rules
- **Subject line:** Format as `<type>: <Capitalized short summary>` — **≤ 50 characters**.
- **Mood:** Imperative mood ("Add", "Update", "Fix", not "Added" or "Fixed"). No trailing period.
- **Body:** Blank line separator, wrapped at 72 characters, structured with `- What:` and `- Why:` bullet points.
- **Granularity:** A day's activity folder and its compiled journal are **separate `track:` commits** (activity committed first, followed by the journal).
- **Empty-Stub Guard:** A journal file that exists as an empty or 1-line stub is **not generated**—treat as missing and backfill from the activity folder.

#### PowerShell Commit Example
```powershell
$msg = "track: Log daily development activities for feature module

- What: Added activity folder with v1/v2 html diffs and screenshots
- Why: Complete daily tracking requirement before journal generation
- Journal: journals/2026/05/2026-05-23.md"
git commit -m $msg
```
> *Note:* Avoid `@'...'@` here-strings in PowerShell to prevent injecting a leading `@` into GitHub commit subjects.

---

## 🌡️ Feeling Options

| Value | Use when |
|-------|----------|
| `⭐ Great : Productive and positive` | Tasks completed smoothly, good flow |
| `✅ Good : Steady progress` | Solid output, things moving forward |
| `🔄 Okay : Up and down` | Mixed day, some progress, some friction |
| `⚠️ Struggling : Facing challenges` | Blockers hit, errors unresolved, stuck |
| `💤 Tired : Low energy` | Low output, fatigue |
| `🎯 Focused : In the zone` | Deep focused work, productive |

---

## 🏷️ Activity Type Patterns & Status Badges

### Activity Type Labels
- Component work: `Development — <Component Name(s)>`
- Install / setup: `<Env> Installation — <subtitle>`
- Bug fixes: `Bug Fix Tracker`
- Writing docs: `Documentation — <Doc Name>`
- Other-project support: `Support — <PROJECT> : <Task>`
- Code commit / review: `Code Review & Commit`

### Inline Status Badges
Use these status markers inline within task descriptions when work spans multiple sessions or days:
- `Status: ✅ Done`
- `Status: 🔄 On Progress`
- `Status: ❌ Blocked — <reason>`
- `Status: 🔄 On Progress (Continued from <date>)`

---

## 📝 Journal Template

```markdown
======================================================================================================================

🧾 Daily Journal

Date: DD Month YYYY
Project: <Project Name>
Feeling: <pick one from Feeling Options above>

⸻

⏰ Log Activities

Part 1

Activity: <Activity Type>
Description:
    <topic or page name>
        - <what was done / what changed>
        - <key detail or finding>

⸻

Part 2

Activity: <Activity Type>
Description:
    <topic or page name>
        - <what was done / what changed>

⸻

📅 Plan Ahead (Tomorrow)
•   <specific next action>
•   <specific next action>

⸻

⚠️ Risks / Blockers / Concerns
    •   <blocker or risk — include root cause if known>
    •   None  ← use this when nothing to flag

⸻

🙏 Gratitude
    •   Love my wife as always ❤️
    •   Fresh air and morning coffee ☕
    •   Always learning something new
    •   Never been better
    •   Stay humble, stay grateful

"<closing quote>"
― <Author>

======================================================================================================================
```

---

## 📐 Section Examples by Activity Type

### Development (v1 → v2 Diff Pattern)
```markdown
Activity: Development — <Component Name(s)>
Description:

    Component: <kebab-name> (v1 → v2)
        Page: <Page Section — Component Role>
        What changed (v2):
            - <change 1 with reason>
                → <impact / fix detail>
            - <change 2>

        Key fix summary:
            v1: <old approach and problem>
            v2: <new approach and benefit>
```

### Environment Setup / Installation
```markdown
Activity: Environment Installation — <subtitle>
Description:
    New Laptop (Windows) — Environment Local Setup
        - Status: 🔄 On Progress (Blocked — <error type>)
        - Steps completed:
            ✅ <step done>
            ✅ <step done>
            ❌ <step failed — error message>
               → Screenshot: <filename.jpeg>
               → Root cause: <explanation>
        - Next step: <what to try next>
```

### Bug Fix Tracker
```markdown
Activity: Bug Fix Tracker
Description:
    - <ID>: <Page / Component> : <Issue description>
        Note: "<clarification or resolution>"
        Status: ✅ Ready to Test  |  🔄 In Progress  |  ❌ Blocked

    - <ID>: <Page / Component> : <Issue description>
        Status: ✅ Done
```

### Documentation
```markdown
Activity: Documentation — <Doc Name>
Description:
    Document: <filename.md or .pdf>
        - <section or topic covered>
        - <key finding or decision>

    ⚠️ Key Finding:
        <important discovery that affects implementation>
```

### Support (Other Project)
```markdown
Activity: Support — <PROJECT NAME> : <Task>
Description:
    Project: <Project> — <Task description>
        - Task: <what needs to be done>
        - Config / files changed: <filename>

        Progress:
            ✅ <done item>
            ✅ <done item>
            ❌ Blocked — <reason>
               → Screenshot: <filename>
```

---

## 🔣 URL Encoding Quick Reference

| Char | Encoded | Char | Encoded |
|------|---------|------|---------|
| space | `%20` | newline | `%0A` |
| `"` | `%22` | `&` | `%26` |
| `:` | `%3A` | `/` | `%2F` |
| `=` | `%3D` | `+` | `%2B` |
| `$` | `%24` | `—` (em dash) | `%E2%80%94` |
| `→` | `%E2%86%92` | `•` (bullet) | `%E2%80%A2` |
| `―` (horiz bar) | `%E2%80%95` | `(` `)` | literal — no encoding needed |
| ✅ | `%E2%9C%85` | ❌ | `%E2%9D%8C` |
| 🔄 | `%F0%9F%94%84` | ⚠️ | `%E2%9A%A0%EF%B8%8F` |
| ⭐ | `%E2%AD%90` | 🎯 | `%F0%9F%8E%AF` |
| 💤 | `%F0%9F%92%A4` | ❤️ | `%E2%9D%A4%EF%B8%8F` |
| ☕ | `%E2%88%95` | | |