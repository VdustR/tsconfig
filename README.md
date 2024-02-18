# @vp-tw/tsconfig

My tsconfig collection for TypeScript projects.

## Installation

```sh
npm i -D @vp-tw/tsconfig
yarn add -D @vp-tw/tsconfig
pnpm i -D @vp-tw/tsconfig
```

## Example

```json
{
  "extends": "@vp-tw/tsconfig/base/vite-emotion/tsconfig",
  "compilerOptions": {},
  "include": [],
  "exclude": []
}
```

- Vite React projects: `@vp-tw/tsconfig/base/vite-react/tsconfig`
- Vite Emotion React projects: `@vp-tw/tsconfig/base/vite-emotion/tsconfig`
- Node.js projects(esm/cjs): `@vp-tw/tsconfig/base/node/tsconfig`
- Typescript projects: `@vp-tw/tsconfig/base/bundler/tsconfig`

For other extends utilities, check: <https://github.com/VdustR/tsconfig/tree/main/packages/tsconfig/ext>

## License

[MIT](./LICENSE)

Copyright (c) 2024 ViPro <vdustr@gmail.com> (<http://vdustr.dev>)
