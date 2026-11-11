# 🧾 Journals Directory

> **Overview:** This directory is the **permanent, immutable archive** of Fandi's daily developer journals. It serves as the official record of progress, blockers, and achievements.

## The 5W1H of `journals\`

| Concept | Explanation |
| :--- | :--- |
| **What is this folder?** | A chronological database of highly structured Markdown files detailing daily activities, sentiments, and plans. |
| **Why does it exist?** | To provide an official, searchable history of work. It is directly consumed by the `review-deck-build.js` script to generate Fandi's PPTX performance review decks. |
| **Who uses it?** | **AI / Automation Scripts** write to it. **Management / Reviewers** read the outputs generated from it. **Developers** use it for historical reference. |
| **When is it used?** | **End of Day (EOD).** Files are generated once per day when work is completed. |
| **Where does data go?** | Strict chronological hierarchy: `YYYY/MM/YYYY-MM-DD.md` (e.g., `2026/05/2026-05-23.md`). |
| **How does it work?** | The developer runs the `/journal today` command. The AI reads the contents of the `activity/` folder, formats the diffs and notes into the official template, and saves the file here. |

## ⚠️ Core Rules for this Folder

1. **READ-ONLY:** Never manually edit a journal file after it has been generated. If an error occurred, adjust the source in `activity/` and regenerate, or leave it as a historical artifact.
2. **Never Delete:** This directory is append-only. Do not delete past journals.
3. **Commit Convention:** Commits touching this folder must use the `track:` prefix, separated from the activity commit (e.g., `track: Generate daily journal for 2026-05-23`).