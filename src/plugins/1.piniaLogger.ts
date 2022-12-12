import { createPinia } from 'pinia'
import { PiniaActionListenerContext, PiniaLogger } from "pinia-logger"

interface PiniaLoggerOptions {
    disabled?: boolean;
    expanded?: boolean;
    showDuration?: boolean;
    showStoreName?: boolean;
    logErrors?: boolean;
    filter?: (action: PiniaActionListenerContext) => boolean;
}

const pinia = createPinia();

const defaultOptions: PiniaLoggerOptions = {
    logErrors: true,
    disabled: false,
    expanded: true,
    showStoreName: true,
    showDuration: false,
    filter: () => true,
};

pinia.use(
    PiniaLogger(defaultOptions)
);

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(pinia)
})