// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    srcDir: 'src/',
    components: false,
    runtimeConfig: {
        public: {
            API_BASE_URL: process.env.API_BASE_URL || 'http://api.gcenter.vn'
        }
    },
    routeRules: {
        '/': { prerender: true },
        '/**': { cors: true }
    },
    css: [
        'vuetify/lib/styles/main.sass',
        '@mdi/font/css/materialdesignicons.css',
        '@fortawesome/fontawesome-free/css/all.css',
        'sweetalert2/src/sweetalert2.scss',
    ],
    /* build: {
        transpile: [
            'vuetify',
            'vee-validate',
        ]
    }, */
    modules: [
        '@nuxt/image-edge',
        //'@pinia/nuxt'
    ],
    image: {
        // The screen sizes predefined by `@nuxt/image`:
        screens: {
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536,
            '2xl': 1536
        },
    }
})
