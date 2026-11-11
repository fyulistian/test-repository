# 📁 Activity Directory

> **Overview:** This directory is the **active staging area** for daily engineering work. It holds raw, granular context (notes, screenshots, code diffs) that feeds into the automated journal generator at the end of the day.

## The 5W1H of `activity\`

| Concept | Explanation |
| :--- | :--- |
| **What is this folder?** | The raw input directory. It contains daily scratchpads (`notes.md`), HTML component states (`v1`, `v2`), visual proofs (screenshots), and storybook snippets. |
| **Why does it exist?** | To capture developer thoughts and code changes *as they happen*, preventing context loss and providing enough data for AI tools to generate highly detailed, accurate daily journals. |
| **Who uses it?** | The **Active Developer** writes to it during the day. The **AI Assistant** reads from it at the end of the day to understand what was accomplished. |
| **When is it used?** | **Continuously during the workday.** A new folder is created in the morning, updated throughout the day, and processed at End of Day (EOD). |
| **Where does data go?** | Strict structure: `YYYY-MM-DD/<topic-name>/`. Every day gets its own root folder, and every distinct task gets a kebab-case subfolder (e.g., `2026-05-23/dashboard-layout/`). |
| **How does it work?** | 1. Morning: Trigger `/daily-tracker` to create the folder and `notes.md`.<br>2. During Work: Drop `v1.html`/`v2.html`, error screenshots, and update `notes.md`.<br>3. EOD: Leave it alone; the journal script will read it. |

## ⚠️ Core Rules for this Folder

1. **No Spaces in Names:** All folders and files must be `kebab-case`.
2. **Keep it Granular:** If you try two different approaches, save both (`component-v1.html` and `component-v2.html`). The diff is crucial for the journal.
3. **Commit Convention:** Commits touching this folder must use the `track:` prefix (e.g., `track: Add activity notes for auth module`).