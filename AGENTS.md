# AGENTS.md

## Project purpose

This repository contains Wang Junyi's personal portfolio website, presented as an online bakery named "zerobaker".

The website is not only for job applications. It should present her experiences, achievements, interests, aesthetics, personality, and first vibe-coding project.

## Technical constraints

* Use plain HTML, CSS, and vanilla JavaScript.
* Do not introduce React, Vue, Next.js, npm, or a build system.
* The site must deploy directly to GitHub Pages from the repository root.
* Use relative file paths. Do not use absolute paths beginning with `/`.
* Do not add external libraries unless the user explicitly approves them.
* Keep the code understandable for a beginner.
* Add brief comments for sections the user may update later.

## File responsibilities

* `index.html`: page structure only.
* `style.css`: visual design, layout, animation, and responsive styles.
* `script.js`: interaction and rendering logic.
* `content.js`: editable project, recipe, social-media, and text data.
* `assets/`: images, audio, PDF files, and decorative elements.
* `docs/PROJECT_BRIEF.md`: the only official project brief.
* `docs/`: style guide, content plan, task list, and other project documents.

Do not hard-code repeatable project or recipe cards in `index.html`. Generate them from `content.js`.

## Visual direction

* Warm off-white textured paper background.
* Handmade online-bakery theme.
* Hand-drawn stickers and paper collage details.
* Main palette: cream, strawberry red, matcha green, blueberry purple, and caramel brown.
* The site should feel warm, playful, personal, and visually distinctive.
* It must not look like a generic developer portfolio, business presentation, or fan page.
* Decorative elements must not reduce readability.

## Responsive behavior

* Design desktop and mobile layouts together.
* Use `min-height` instead of fixed screen heights when content may overflow.
* Images must not stretch or distort.
* Interactive features must have a mobile fallback.
* Respect `prefers-reduced-motion`.
* All modal windows must be closable with a visible button and the Escape key.

## Content rules

* Do not rewrite factual copy or change data unless explicitly asked.
* Do not remove sections to simplify implementation.
* Preserve Chinese punctuation and text.
* Never expose phone numbers, secrets, tokens, or private internal materials.
* Do not rename or move asset files without updating every reference.

## Working method

Before editing:

1. Read the relevant files in `docs/`.
2. State which files will be changed.
3. Make only the requested change.

After editing:

1. Check for broken paths and JavaScript errors.
2. Test desktop and mobile layouts.
3. Summarize the files changed in plain Chinese.
4. Explain any action the user must perform manually.

Do not commit, push, publish, install dependencies, or delete files unless explicitly requested.
