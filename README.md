# Peregrine Planner — Support Site

Static site served from GitHub Pages. Plain HTML/CSS/JS, no build step, no framework.

| File | Purpose |
| --- | --- |
| `index.html` | Quickstart / User Guide / FAQ / Contact, single page with tab switching |
| `help-script.js` | Renders the three content tabs from `window.HELP_CONTENT`, FAQ filter, `mailto:` contact form, deep links, back-to-top |
| `help-content.js` | **Generated.** `window.HELP_CONTENT` = the Quick Start / guide / FAQ data |
| `privacy-policy.html` | Standalone, linked from the header |
| `peregrine-mic-array-firmware.zip` | Linked from the User Guide's Directional Mic Array section |

## Editing help content

`help-content.js` is generated and **must not be hand-edited**. It is one of two outputs of a
single source of truth that also feeds the iOS app:

```
peregrine-planner/scripts/build-help-content.mjs   <-- edit the data here
        |
        |  node scripts/build-help-content.mjs
        v
   +----------------------------------------------+  +--------------------------+
   | peregrine-planner/ios/.../HelpContent.json   |  | pp_support/help-content.js |
   | (bundled in the app, drives HelpView)        |  | (this site)               |
   +----------------------------------------------+  +--------------------------+
```

So: edit `build-help-content.mjs` in the app repo, run it (it writes both files), then commit the
app-repo change and copy/commit the regenerated `help-content.js` here. The app and this site then
show identical Quick Start, guide, and FAQ text.

FAQ ids are assigned sequentially at generate time — do not hand-number them.

## Local preview

```
python3 -m http.server 8000   # then open http://localhost:8000
```

`node --check help-script.js help-content.js` catches syntax errors.
