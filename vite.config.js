import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import UnoCss from 'unocss/vite'
import { presetUno } from 'unocss'
import presetIcons from '@unocss/preset-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCss({
      //include: [/\.svelte$/],
      inspector: true,
      mode: 'per-module',
      preprocess(matcher) {
        if (matcher.startsWith('class:') && matcher.indexOf('=', 5) > -1) {
          const clazz = matcher.slice(6)
          console.log(`${matcher} => ${clazz.substring(0,clazz.indexOf('='))}`)
          return clazz.substring(0, clazz.indexOf('='))
        }
        if (matcher.startsWith('data-')) {
          console.log(matcher.slice(5))
          return matcher.slice(5)
        }
        return matcher
      },
      shortcuts: [
        {'logo': 'i-logos-svelte-icon w-6em h-6em transform transition-800 hover:rotate-180'},
      ],
      presets: [
        presetUno(),
        presetIcons({
          extraProperties: {
            'display': 'inline-block',
            'vertical-align': 'middle',
          }
        }),
      ]
    }),
    svelte(),
  ]
})
