// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    srcDir: 'src/',
    css: [
        'vuetify/lib/styles/main.sass',
        '@mdi/font/css/materialdesignicons.css',
        '@fortawesome/fontawesome-free/css/all.css',
    ],
    build: {
        transpile: [
            'vuetify',
        ]
    }
})
