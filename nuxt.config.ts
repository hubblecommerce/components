// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: process.env.NODE_ENV === 'development' },
    css: [
        '~/assets/css/main.css'
    ],
    modules: [
        '@nuxt/content',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode'
    ],
    content: {
        highlight: {
            theme: {
                default: 'github-dark'
            }
        }
    },
    vue: {
        compilerOptions: {
            isCustomElement: (tag) => {
                const customComponents = [
                    'DrawerContextCart',
                    'LazyDrawerContextSearch'
                ]

                return customComponents.includes(tag)
            }
        }
    }
})
