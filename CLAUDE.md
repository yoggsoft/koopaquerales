# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Single-page marketing/artist site for musician Koopa Querales (koopaquerales.com), built with Next.js App Router, React 19, and TypeScript. The entire site is one route (`/`) composed of a handful of section components — no backend, no CMS, no other pages.

## Commands

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — run ESLint over the whole project (`eslint .` — see "Linting" below, this is **not** `next lint`)

There is no test suite/framework configured in this repo.

## Architecture

### Single-page composition
[src/app/page.tsx](src/app/page.tsx) is the entire site: `Header`, `Hero`, `About`, `Media`, `Footer` rendered in sequence inside `<main className='mt-24'>` (the `mt-24` offsets the `fixed` `Header`). There is no router beyond this one page — don't assume additional routes exist.

All components are re-exported through [src/components/index.ts](src/components/index.ts); import via `@/components` (e.g. `import { Header, Media } from '@/components'`) rather than deep-importing a component file, matching the existing convention.

### Icon system (`src/components/common/Icons`)
Icons are looked up by name rather than imported directly at the call site:
- `IconIndex.tsx` maps an `IconNameType` string key to a `react-icons` element (mixing `react-icons/fa` and `react-icons/si`).
- `Icon.tsx` renders `IconIndex[name]` inside a `<span>`.
- `IconWithLink.tsx` wraps an `Icon` in an `<a>` for a social/store link, driven by an `ItemType` (`{ title, url, icon }`).

`IconNameType` is (unfortunately) declared **twice** — once in [src/const/links.tsx](src/const/links.tsx) and again, identically, in [IconIndex.tsx](src/components/common/Icons/IconIndex.tsx). Keep both in sync if you add an icon (or better, dedupe them onto one source when you're already touching this code).

### Link/store data (`src/const/links.tsx`)
`SOCIAL` (social profile links, used by `Header`) and `STORES` (streaming platform links) are defined here — but `Media.tsx` also declares its **own** local `STORES` array with slightly different `title` values for the same platforms, rather than importing the shared one. Check both when adding/removing a streaming platform.

### ⚠️ `react-icons` is pinned, not on a caret range
`react-icons` is pinned to the **exact** version `5.5.0` in [package.json](package.json) (not `^5.5.0`). This is deliberate: `react-icons@5.6.0` upstream dropped the entire `SiAmazon*` icon family (`si` = Simple Icons) — likely a trademark-driven removal — which breaks the `SiAmazonmusic` import in `IconIndex.tsx` (used for the "Stream on Amazon Music" link in `links.tsx`/`Media.tsx`) with a TypeScript compile error. Do not bump `react-icons` past `5.5.0` without first deciding how to handle the missing Amazon Music icon (swap to a generic Amazon logo from another icon set, drop the link, or vendor a custom SVG) — that's a content/branding decision, not a mechanical dependency bump.

### Linting
`eslint.config.mjs` uses flat config composed directly from `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript` (no `FlatCompat`/`@eslint/eslintrc` needed). The `next lint` CLI command was removed in this Next.js version (16.x) — the `lint` script runs `eslint .` directly. If you ever see `next lint`-style errors again after a Next.js/`eslint-config-next` bump, re-run `npx @next/codemod@latest next-lint-to-eslint-cli .` rather than hand-editing the flat config, since `eslint-config-next`'s bundled plugin versions (e.g. `eslint-plugin-react-hooks`) can otherwise conflict with `@eslint/eslintrc`'s compat shim in confusing ways (a `Converting circular structure to JSON` crash from the config validator is the symptom).

### Dependency versions
`next`, `react`, `react-dom`, `eslint-config-next`, `@types/react`, and `@types/react-dom` are all pinned to **exact** versions (no `^`/`~`) in [package.json](package.json), kept in lockstep with each other. When bumping these, update all of them together (and the matching entries in `overrides`) rather than letting `npm update` move just one.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
