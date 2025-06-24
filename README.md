# Bug Repro

I observed issues when building a tanstack start with react-diff-viewer-continued. I'm unsure if this is a tanstack start, vite, or a react-diff-viewer-continued issue.

In short, when using `bun` it appears that the build might be missing something when building @emotion/cache OR there is something missing in the build configuration.

I've copied the bundled @emotion packages from `.output/server/node_modules/@emotion/` to `./@emotion/` for convenience

## Reproduction Steps

```bash
bun i
bun run build
bun run start
```

## Error

`@emotion/css` has the following files in `.output/server/node_modules/@emotion/css/`:

```
 .
├──  create-instance
│   ├──  dist
│   │   ├──  emotion-css-create-instance.cjs.default.js
│   │   ├──  emotion-css-create-instance.cjs.js
│   │   └──  emotion-css-create-instance.cjs.mjs
│   └──  package.json
└──  package.json
```

In `.output/server/node_modules/@emotion/css/create-instance/dist/emotion-css-create-instance.cjs.js`, importing `@emotion/cache` with

```js
var createCache = require('@emotion/cache');
```

results in:

```bash
error: Cannot find module '@emotion/cache' from '/Users/ryancallahan/repos/rdvc-repro/.output/server/node_modules/@emotion/css/create-instance/dist/emotion-css-create-instance.cjs.js'
```

`@emotion/cache` has the following files in `.output/server/node_modules/@emotion/cache/`:

```
 .
├──  dist
│   └──  emotion-cache.edge-light.cjs.js
└──  package.json
```

and the following exports in `.output/server/node_modules/@emotion/cache/package.json`

```json
"exports": {
  ".": {
    "types": {
      "import": "./dist/emotion-cache.cjs.mjs",
      "default": "./dist/emotion-cache.cjs.js"
    },
    "development": {
      "edge-light": {
        "module": "./dist/emotion-cache.development.edge-light.esm.js",
        "import": "./dist/emotion-cache.development.edge-light.cjs.mjs",
        "default": "./dist/emotion-cache.development.edge-light.cjs.js"
      },
      "worker": {
        "module": "./dist/emotion-cache.development.edge-light.esm.js",
        "import": "./dist/emotion-cache.development.edge-light.cjs.mjs",
        "default": "./dist/emotion-cache.development.edge-light.cjs.js"
      },
      "workerd": {
        "module": "./dist/emotion-cache.development.edge-light.esm.js",
        "import": "./dist/emotion-cache.development.edge-light.cjs.mjs",
        "default": "./dist/emotion-cache.development.edge-light.cjs.js"
      },
      "browser": {
        "module": "./dist/emotion-cache.browser.development.esm.js",
        "import": "./dist/emotion-cache.browser.development.cjs.mjs",
        "default": "./dist/emotion-cache.browser.development.cjs.js"
      },
      "module": "./dist/emotion-cache.development.esm.js",
      "import": "./dist/emotion-cache.development.cjs.mjs",
      "default": "./dist/emotion-cache.development.cjs.js"
    },
    "edge-light": {
      "module": "./dist/emotion-cache.edge-light.esm.js",
      "import": "./dist/emotion-cache.edge-light.cjs.mjs",
      "default": "./dist/emotion-cache.edge-light.cjs.js"
    },
    "worker": {
      "module": "./dist/emotion-cache.edge-light.esm.js",
      "import": "./dist/emotion-cache.edge-light.cjs.mjs",
      "default": "./dist/emotion-cache.edge-light.cjs.js"
    },
    "workerd": {
      "module": "./dist/emotion-cache.edge-light.esm.js",
      "import": "./dist/emotion-cache.edge-light.cjs.mjs",
      "default": "./dist/emotion-cache.edge-light.cjs.js"
    },
    "browser": {
      "module": "./dist/emotion-cache.browser.esm.js",
      "import": "./dist/emotion-cache.browser.cjs.mjs",
      "default": "./dist/emotion-cache.browser.cjs.js"
    },
    "module": "./dist/emotion-cache.esm.js",
    "import": "./dist/emotion-cache.cjs.mjs",
    "default": "./dist/emotion-cache.cjs.js"
  },
  "./package.json": "./package.json"
},
```
