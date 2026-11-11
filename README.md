# Dev Tracker — Daily Journal & Activity Log

> **For AI tools**: Read the `## Current Work` section first for active tasks and blockers,
> then use the rest of this file as the journal generation template.
> Full generation workflow is in `CLAUDE.md` (same folder).

---

## 📋 Current Work (AI: parse this first)
<!-- Update this section at the start of each working day -->
<!-- Last updated: 2026-06-09 -->

### 🔴 Active / In Progress

| Item | Project | Status | Notes |
|------|---------|--------|-------|
| Scriban component backlog | BNI-Sitecore | 🔄 In Progress | Header Wrapper (pc + rv) ✅ done, PC Breadcrumb ✅ done — RV Breadcrumb stub pending |
| rv-breadcurmb-v2.html | BNI-Sitecore | 🔄 In Progress | Responsive breadcrumb — stub only, needs full depth-check + ancestor traversal parity with PC version |
| Navigation Tab cleanup | BNI-Sitecore | 🔄 In Progress | Remove manually-added duplicate Navigation rendering from Credit Card Page `__Standard Values` |
| Credit Card Page — CD publish | BNI-Sitecore | 🔄 In Progress | Publish template + `__Standard Values` to CD; regression test BNI Layout pages (4 templates) |

### ✅ Recently Completed

| Date | Item | Project | Notes |
|------|------|---------|-------|
| 2026-06-09 | Header Wrapper + PC Breadcrumb Scriban | BNI-Sitecore | pc-header-wrapper, rv-header-wrapper, pc-breadcrumb all done |
| 2026-06-09 | Navigation Tab fix — Credit Card Page | BNI-Sitecore | Added Base Page to Credit Card template chain → nav appeared, no deployment needed |
| 2026-06-05 | BNIBaseLayout + Credit Cards Scriban | BNI-Sitecore | BNIBaseLayout wired, Credit Card scriban components complete |
| 2026-06-04 | Header Mega Menu & Breadcrumb Scriban | BNI-Sitecore | Mega menu + breadcrumb scriban done |
| 2026-05-25 | Sitecore XM 10.4 local install | BNI-Sitecore | ✅ Completed — CM + IS + SQL Server 2022 + Solr all operational |
| 2026-05-23 | MYXLU project | MYXLU | ✅ Closed — all sprints SP143–SP148 complete, folder archived |
| 2026-05-21 | SAML `SamlSettings.cs` fix | BNI-Sitecore | `UsernameAttr → "username"`, `RolesAttr → "group"` — merged to main |
| 2026-05-21 | `SamlClaimsTransformer.cs` DN logic removed | BNI-Sitecore | ADSS sends CN directly — merged |
| 2026-05-21 | AuditTrailLog merge to main | BNI-Sitecore | Merged |
| 2026-05-20 | MYXL Drupal COS migration | MYXLU | AWS S3 → Tencent COS — bucket permissions fixed by Tencent Cloud team |

### 🧱 Blockers

| Blocker | Affects | Notes |
|---------|---------|-------|
| rv-breadcurmb-v2.html not implemented | Scriban backlog | Stub only — implement responsive breadcrumb (parity with pc-breadcurmb-v1.html) |
| Duplicate Navigation rendering in Credit Card `__Standard Values` | Navigation Tab | Must remove manually-added rendering to prevent duplicate nav after base template fix |

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
      scriban/           ← .html scriban files (v1, v2, fix)
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
| Scriban component work | `Scriban Development — <Component Name(s)>` |
| Sitecore install / setup | `Sitecore Local Installation — <subtitle>` |
| Bug fixes | `Bug Fix Tracker` |
| Writing docs | `Documentation — <Doc Name>` |
| Other-project support | `Support — <PROJECT> : <Task>` |
| LDAP / SAML / SSO work | `LDAP/SAML Integration — <subtitle>` |
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
Project: BNI 20: Website Company Sitecore - 2026
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

### Scriban Development (v1 → v2 diff)

```
Activity: Scriban Development — <Component Name(s)>
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
Activity: Sitecore Local Installation — <subtitle>
Description:
    New Laptop (Windows) — Sitecore XM 10.4 Local Setup
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

### LDAP / SAML Integration

```
Activity: LDAP/SAML Integration — <subtitle>
Description:
    Integration: <IdP name> → Sitecore Identity Server
        - Finding: <key discovery>
            → <impact on implementation>
        - Files changed:
            - <ClassName.cs>: <what changed and why>
        Status: ✅ Done | 🔄 On Progress | ❌ Blocked — <reason>
```

---

## 🔗 Google Form — Auto Insert Base Value

======================================================================================================================
### Value Reference — Where each `generated_value` comes from

| Placeholder | Source in journal | Notes |
|-------------|-------------------|-------|
| `YYYY` | Journal `Date:` line | e.g. `2026` |
| `mm` | Journal `Date:` line | e.g. `05` — zero-padded |
| `dd` | Journal `Date:` line | e.g. `22` — zero-padded |
| `Feelings` | `Feeling:` line | Full string including emoji — URL-encode the whole value |
| `Activity 1` | Part 1 `Activity:` label | Morning slot 10:00–12:00 |
| `Description 1` | Part 1 `Description:` block | Newlines → `%0A` |
| `Activity 2` | Part 2 `Activity:` label | Afternoon slot 13:00–19:00; consolidate Parts 3+ into Description 2 if day has more than 2 parts |
| `Description 2` | Part 2+ `Description:` blocks | Newlines → `%0A`; separate sections with `%0A%0A` |
| `Planned tasks` | `📅 Plan Ahead (Tomorrow)` section | Each bullet on its own line joined with `%0A` |
| `Risk / Blocker` | `⚠️ Risks / Blockers / Concerns` section | Each bullet on its own line joined with `%0A` |
| `Gratitude` | `🙏 Gratitude` section + closing quote | Bullets first, then append `%0A%0A%22quote%22%0A%E2%80%95%20Author` |

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

---

### Expected Output (example: 2026-05-22)
```
https://docs.google.com/forms/d/e/1FAIpQLSddkMKvGNQY-uPV3UTItTGkWFmfzq7RGouW8FAJFYgKYU2OTw/viewform?entry.354669252=Fandi%20Yulistian&emailAddress=fandi%40aleph-labs.com&entry.1768169883_year=2026&entry.1768169883_month=05&entry.1768169883_day=22&entry.86345115=%E2%9A%A0%EF%B8%8F%20Struggling%20%3A%20Facing%20challenges&entry.1934800252_hour=10&entry.1934800252_minute=00&entry.374081689_hour=12&entry.374081689_minute=00&entry.1415634565=BNI%20:%20Website%20Company%20Sitecore%20-%202026&entry.2109299748=Sitecore%20Local%20Installation%20%E2%80%94%20SQL%20Server%202022%20Developer%20Setup&entry.633751657=New%20Server%20(Windows)%20%E2%80%94%20SQL%20Server%202022%20Pre-requisite%20for%20Sitecore%20XM%2010.4%0AStatus%3A%20%E2%9C%85%20Done%0A-%20Diagnosed%3A%20only%20SQLWriter%20present%2C%20SQL%20engine%20missing%0A-%20Created%20Install-SQLServer2022Dev.ps1%20silent%20installer%20script%0A-%20Fixed%20Bootstrap%3A%20%2FACTION%3DDownload%2C%20%2FMEDIATYPE%3DCAB%2C%20%2FX%20extract%0A-%20Fixed%20ServerCertificateValidationCallback%20corruption%20%E2%86%92%20reset%20%24null%20%2B%20TLS%201.2%0A-%20SQL%20Server%202022%20Dev%20installed%20via%203-stage%20flow%20(Bootstrap%20%E2%86%92%20Download%20%E2%86%92%20Extract%20%E2%86%92%20setup.exe%20%2FQ)%0A-%20Mixed%20Mode%20auth%2C%20SA%20password%2C%20TCP%2FIP%20%2B%20Named%20Pipes%2C%20SQL%20Browser%2C%20firewall%20rules%0A-%20Connection%20verified%3A%20Server%3D.%3BUser%3Dsa&entry.1128102318_hour=13&entry.1128102318_minute=00&entry.1781967660_hour=19&entry.1781967660_minute=00&entry.749809881=BNI%20:%20Website%20Company%20Sitecore%20-%202026&entry.1369586490=Sitecore%20Local%20Installation%20%E2%80%94%20Sitecore%20XM%2010.4.1%20Install%20%26%20Post-Install%20Fix&entry.1507924458=Sitecore%20XM%2010.4.1%20Install%20%E2%80%94%20Status%3A%20%F0%9F%94%84%20On%20Progress%20(Blocked%20%E2%80%94%20CSS%2FJS%20not%20loading%20on%20Launchpad)%0A%E2%9C%85%20CM%3A%20https%3A%2F%2Fcm.bni.local%2Fsitecore%20accessible%0A%E2%9C%85%20IS%3A%20https%3A%2F%2Fid.bni.local%20HTTP%20200%0A%E2%9D%8C%20Launchpad%20CSS%2FJS%3A%20302%20to%20%2Flogin.aspx%20%E2%80%94%20static%20files%20caught%20by%20auth%20pipeline%0A%0AScriban%20Development%20%E2%80%94%20service-facilities-component%20(v1%E2%86%92v2)%20%E2%80%94%20%E2%9C%85%20Done%0A%E2%86%92%20sc_raw%20XML%20parsing%20for%20reliable%20BottomLink%20text%20extraction%0A%0AScriban%20Development%20%E2%80%94%20Service%20Facilities%20Detail%20Page%20%E2%80%94%20%E2%9C%85%20Done%2C%20Published%0A%E2%86%92%20hero-banner%2C%20anchor%2C%20content-accordion%2C%20no-image-accordion%2C%20table-with-tab%2C%20others-service-facilities%2C%20contact-us&entry.1021011140=%E2%80%A2%20Resolve%20CSS%2Fstatic%20000%20%E2%80%94%20check%20app%20pool%20crash%20logs%20and%20event%20viewer%0A%E2%80%A2%20Verify%20Web.config%20location%20bypass%20for%20sitecore%2Fshell%2Fclient%20paths%0A%E2%80%A2%20Test%20full%20Launchpad%20render%20with%20styles%20after%20fix%0A%E2%80%A2%20Run%20Solr%20schema%20populate%20(Control%20Panel%20%E2%86%92%20Indexing%20%E2%86%92%20Populate%20Solr%20Managed%20Schema)%0A%E2%80%A2%20Rebuild%20all%20Solr%20indexes%20after%20schema%20populate%0A%E2%80%A2%20Continue%20scriban%20component%20development%20%E2%80%94%20pick%20next%20from%20backlog&entry.192580519=%E2%80%A2%20CSS%2FJS%20not%20loading%20on%20CM%20Launchpad%20%E2%80%94%20302%20to%20login%20despite%20valid%20auth%20session%0A%20%20%E2%86%92%20May%20be%20app%20pool%20crash%20after%20iisreset%20or%20Web.config%20auth%20pipeline%20issue%0A%E2%80%A2%20ServerCertificateValidationCallback%20corruption%20%E2%80%94%20must%20use%20fresh%20PowerShell%20session%0A%E2%80%A2%20Solr%20schema%20populate%20skipped%20%E2%86%92%20must%20be%20done%20manually%20before%20indexing%20works&entry.1099324242=%E2%80%A2%20Love%20my%20wife%20as%20always%20%E2%9D%A4%EF%B8%8F%0A%E2%80%A2%20Fresh%20air%20and%20morning%20coffee%20%E2%98%95%0A%E2%80%A2%20Always%20learning%20something%20new%0A%E2%80%A2%20Never%20been%20better%0A%E2%80%A2%20Stay%20humble%2C%20stay%20grateful%0A%22The%20expert%20in%20anything%20was%20once%20a%20beginner.%22%0A%E2%80%95%20Helen%20Hayes
```
======================================================================================================================
