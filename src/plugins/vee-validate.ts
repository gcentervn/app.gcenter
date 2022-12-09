
import { defineRule, configure } from "vee-validate";
import { required, email, min, max, confirmed, between } from "@vee-validate/rules";

import { localize } from '@vee-validate/i18n';

export default defineNuxtPlugin(() => {
    // Install required rule.
    defineRule("required", required);

    // Install email rule.
    defineRule("email", email);

    // Install min rule.
    defineRule("min", min);
    defineRule("max", max);

    defineRule('confirmed', confirmed)

    defineRule('between', between)

    configure({
        // Generates an English message locale generator
        generateMessage: localize('vi', {
            fields: {
                terms: {
                    required: 'Bạn phải đồng ý đăng ký!'
                },
            },
            messages: {
                required: '{field} không được bỏ trống!',
                min: '{field} tối thiểu 0:{min} kí tự!',
                max: '{field} tối đa 0:{min} kí tự!',
                email: 'Email phải đúng định dạng email@vidu.com !',
                confirmed: 'Thông tin xác nhận không khớp!'
            },
        }),
    });
})

