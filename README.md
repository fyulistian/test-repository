# Dev Tracker — Daily Journal & Activity Log

> **For AI tools**: Read the `## Current Work` section first for active tasks and blockers,
> then use the rest of this file as the journal generation template.
> Full generation workflow is in `CLAUDE.md` (same folder).

---

## 📋 Current Work (AI: parse this first)
<!-- Update this section at the start of each working day -->
<!-- Last updated: <Date> -->

### 🔴 Active / In Progress

| Item | Project | Status | Notes |
|------|---------|--------|-------|
| <Item> | <Project> | <Status> | <Notes> |

### ✅ Recently Completed

| Date | Item | Project | Notes |
|------|------|---------|-------|
| <Date> | <Item> | <Project> | <Notes> |
| <Date> | <Item> | <Project> | <Notes> |
| <Date> | <Item> | <Project> | <Notes> |
| <Date> | <Item> | <Project> | <Notes> |

### 🧱 Blockers

| Blocker | Affects | Notes |
|---------|---------|-------|
| <Blocker> | <Affects> | <Note> |
| <Blocker> | <Affects> | <Note> |

---

## 📁 Journal File Convention

```
journals/
  2026/
    05/
      2026-05-23.md      ← YYYY-MM-DD.md
activity/
  2026-05-23/
    <page-or-topic>/     ← kebab-case, short name
      files/             ← .html files (v1, v2, fix)
      storybook/         ← storybook HTML samples
      component/         ← screenshots (.png)
      img/               ← error/progress screenshots
    notes.md             ← freeform notes
```

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

## 🏷️ Activity Type Patterns

| Type | Typical Activity label |
|------|------------------------|
| Component work | `Development — <Component Name(s)>` |
| Install / setup | `<Env> Installation — <subtitle>` |
| Bug fixes | `Bug Fix Tracker` |
| Writing docs | `Documentation — <Doc Name>` |
| Other-project support | `Support — <PROJECT> : <Task>` |
| Code commit / review | `Code Review & Commit` |

---

## 🔖 Status Badges

Use inline in Description when a task spans multiple days:

```
Status: ✅ Done
Status: 🔄 On Progress
Status: ❌ Blocked — <reason>
Status: 🔄 On Progress (Continued from <date>)
```

---

## 📝 Journal Template

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

---

## 📐 Section Examples by Activity Type

---

### Development (v1 → v2 diff)

```
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

---

### Environment Setup / Installation

```
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

---

### Bug Fix Tracker

```
Activity: Bug Fix Tracker
Description:
    - <ID>: <Page / Component> : <Issue description>
        Note: "<clarification or resolution>"
        Status: ✅ Ready to Test  |  🔄 In Progress  |  ❌ Blocked

    - <ID>: <Page / Component> : <Issue description>
        Status: ✅ Done
```

---

### Documentation

```
Activity: Documentation — <Doc Name>
Description:
    Document: <filename.md or .pdf>
        - <section or topic covered>
        - <key finding or decision>

    ⚠️ Key Finding:
        <important discovery that affects implementation>
```

---

### Support (Other Project)

```
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

### URL Encoding Quick Reference

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
| ☕ | `%E2%98%95` | | |

======================================================================================================================