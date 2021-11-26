import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import UnoCss from 'unocss/vite'
import { presetUno } from 'unocss'
import presetIcons from '@unocss/preset-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    UnoCss({
      //include: [/\.svelte$/],
      inspector: true,
      preprocess(matcher) {
        if (matcher.startsWith('class:') && matcher.contains('=')) {
          const clazz = matcher.slice(6)
          return clazz.substring(clazz.indexOf('='))
        }
        return matcher
      },
      shortcuts: [
        {'foo': 'i-logos-svelte-icon w-16rem h-16rem'},
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
    })
  ]
})
