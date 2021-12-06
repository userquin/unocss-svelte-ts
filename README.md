# Svelte + UnoCSS + TS + Vite 

**DEPRECATED**: included on [unocss per-module branch](https://github.com/antfu/unocss/tree/feat/per-module-import)

The playgroung is here: https://github.com/antfu/unocss/tree/feat/per-module-import/test/fixtures/vite-svelte

To test the playground: `pnpm install && pnpm run build` from root, then go to `test/fixtures/vite-svelte` and run `pnpm install && pnpm run dev`.

~~We need to collect all `svelte` stuff, using [preprocess](https://github.com/antfu/unocss#utilities-preprocess--prefixing) 
we can address the problem, but we need to check first why the classes added are not scoped, they will be global.~~
