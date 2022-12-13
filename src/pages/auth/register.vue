<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { Form, Field } from 'vee-validate';

useHead({
    title: 'Đăng ký'
})

definePageMeta({
    layout: "auth-layout",
});

const swal: any = inject("$swal");

const AuthStore = useAuthStore()

const { errors } = storeToRefs(AuthStore)

const schema = {
    username: 'required|min:3|max:66',
    password: 'required|min:8|max:333',
    confirmation: 'required|confirmed:@password',
    email_address: 'email|min:3|max:66',
    terms: 'required'

};

const dialog = ref(false)

async function onSubmitRegister(values: any) {
    await AuthStore.logout()
    dialog.value = true
    await AuthStore.register(values)
    dialog.value = false

    if (!errors.value.msg) {
        await swal.fire({
            text: "Đăng ký thành công !",
            icon: "success",
            confirmButtonText: "Tiếp tục",
            timer: 5000,
        }).then(async () => {
            await navigateTo('/player')
        });
    } else {
        const errorCode = JSON.stringify(errors.value.code)
        const errorMsg = JSON.stringify(errors.value.msg)
        await swal.fire({
            title: 'LỖI !!!',
            html: 'Mã: ' + errorCode + '<br>Mô tả: ' + errorMsg,
            icon: "error",
            confirmButtonText: "Quay lại",
        }).then(async () => {
            await navigateTo('/auth/register')
        });
    }

}
</script>

<template>
    <v-container class="h-100">
        <v-row class="h-100">
            <v-col class="d-flex justify-center align-center h-100">
                <v-card variant="outlined" width="340">
                    <v-card-title class="mb-3 text-center">ĐĂNG KÝ TÀI KHOẢN</v-card-title>
                    <v-card-text>
                        <Form as="v-form" :validation-schema="schema" @submit="onSubmitRegister">
                            <!-- This method uses Higher-order component API to validate vuetify inputs -->
                            <Field name="username" v-slot="{ field, errors }" label="Tài khoản">
                                <v-text-field variant="outlined" v-bind="field" label="Tài khoản hoặc Email*"
                                    :error-messages="errors" class="mb-3" />
                            </Field>
                            <Field name="password" v-slot="{ field, errors }" label="Mật khẩu">
                                <v-text-field variant="outlined" v-bind="field" label="Mật khẩu*" type="password"
                                    :error-messages="errors" class="mb-3" />
                            </Field>
                            <Field name="confirmation" v-slot="{ field, errors }" label="Mật khẩu xác nhận">
                                <v-text-field variant="outlined" v-bind="field" label="Nhập lại mật khẩu*"
                                    type="password" :error-messages="errors" class="mb-3" />
                            </Field>
                            <Field name="email_address" v-slot="{ field, errors }" labe="Địa chỉ mail">
                                <v-text-field variant="outlined" v-bind="field" label="Email" type="email"
                                    :error-messages="errors" class="mb-3" />
                            </Field>
                            <!-- This uses a custom component with the composition API -->
                            <!-- <FormTextFieldValidation name="passwordConfirm" label="Password Confirmation"
                                type="password" /> -->

                            <!-- Same thing for other types of components -->
                            <!-- In case of checkboxes you need to explicitly bind the model events -->
                            <!-- With composition it is easier since you can use the `v-model` API directly -->
                            <Field name="terms" :value="true" type="checkbox" v-slot="{ value, handleChange, errors }">
                                <v-checkbox :model-value="value" @update:modelValue="handleChange"
                                    label="Đồng ý tham gia Gcenter?" color="primary" :error-messages="errors" />
                            </Field>
                            <v-row class="align-center">
                                <v-col>
                                    <v-btn color="primary" type="submit" :disabled="dialog" :loading="dialog"> Đăng Ký
                                    </v-btn>
                                </v-col>
                                <v-spacer></v-spacer>
                                <v-col class="text-caption">
                                    <p id="have-account">Đã có tài khoản?</p>
                                    <NuxtLink to="login">Đăng nhập</NuxtLink>
                                </v-col>
                            </v-row>
                        </Form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-dialog v-model="dialog" :scrim="false" persistent>
            <v-card color="primary">
                <v-card-text>
                    Tiến hành đăng ký ...
                    <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<style scoped>
#have-account {
    width: 100px;
}
</style>