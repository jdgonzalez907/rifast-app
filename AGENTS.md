Expo / React Native mobile app using Expo Router. Package manager is **pnpm** (see `pnpm-lock.yaml`).

Versions: Expo SDK 58, React Native 0.88, React 19.3, TypeScript 6.0 (strict).

## Expo has changed — do not trust your training data

Expo ships breaking changes every SDK release. APIs you remember are likely renamed, moved, or removed. Before writing any code that touches an Expo, EAS, or React Native API:

1. Read the major version of the `expo` package in `package.json` (currently 58).
2. Fetch the matching versioned docs: `https://docs.expo.dev/versions/v<major>.0.0/`
3. For anything else, fetch https://docs.expo.dev/llms.txt — an index of all Expo docs with corrections to common LLM misconceptions. Follow its links to the specific page you need; never answer from memory.

## Commands

- `pnpm start` / `pnpm android` / `pnpm ios` / `pnpm web` — dev server (scripts in `package.json`).
- `pnpm lint` — runs `expo lint` (ESLint flat config via `eslint.config.js`).
- `npx tsc --noEmit` — typecheck.
- `npx expo-doctor` — diagnose dependency/config issues; `npx expo install --fix` to fix versions.
- `npx expo install <pkg>` — ALWAYS use this instead of `pnpm add` for Expo/React Native deps; it resolves SDK-compatible versions.

Run lint and typecheck before declaring any task done.

## Formatting

Prettier is enforced as an ESLint **error** (`eslint-plugin-prettier` + `eslint-config-prettier`), so `pnpm lint` fails on unformatted code. There is no `format` script — run `pnpm exec prettier --write <files>` before linting. Config (`.prettierrc`): single quotes, trailing commas, semicolons.

## TypeScript

- `strict` is on; `@/*` path alias maps to `./src/*` (defined in `tsconfig.json`).
- Typed routes are enabled (`app.json` → `experiments.typedRoutes`). Route types are generated into `.expo/types/` when the dev server runs; run `expo start` once (or `expo customize` for routes) if typecheck complains about missing router types.

## Navigation & Routing

- Routes live in `src/app/` — every file is a screen; `_layout.tsx` files define navigators. Keep non-route code (components, hooks, utils, constants) outside `src/app/`.
- The root layout uses `NativeTabs` from `expo-router/native-tabs` (native bottom tabs, not JS tabs).
- Import `Link`, `router`, and `useLocalSearchParams` from `expo-router`.

## Generated / gitignored files — do not edit

- `expo-env.d.ts` — generated, gitignored.
- `ios/` and `android/` — Continuous Native Generation; gitignored. Never create or edit by hand; configure native behavior in `app.json` and config plugins.
- Expo Go only bundles its native modules. After adding a library with native code, use a development build (`npx expo run:ios|android` locally, or `eas build --profile development`).

## OpenSpec

This repo uses OpenSpec (spec-driven) under `openspec/`. Workflow commands/skills are installed in `.opencode/` (`opsx-*`) and mirrored in `.claude/`. Prefer the `openspec-*` skills for proposing/applying/archiving changes rather than editing `openspec/` files directly.
