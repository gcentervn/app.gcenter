import Swal, { SweetAlertOptions } from "sweetalert2";

const options = {
    reverseButtons: true,
    confirmButtonText: "confirmText",
    cancelButtonText: "cancelText",
    //confirmButtonColor: "#84bd00",
}
const $swal = {
    install: (Vue: { provide: (arg0: string, arg1: typeof Swal) => void; }, options: SweetAlertOptions<any, any>) => {
        Vue.provide("$swal", Swal.mixin(options));
    },
}
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use($swal, options);
});