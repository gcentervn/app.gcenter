<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { Form, Field } from 'vee-validate';

useHead({
    title: 'Đăng nhập'
})

definePageMeta({
    layout: "auth-layout",
});

const swal: any = inject("$swal");

const AuthStore = useAuthStore()

const { errors } = storeToRefs(AuthStore)

const schema = {
    username: 'required',
    password: 'required',
};

const dialog = ref(false)

async function onSubmitLogin(values: any) {
    await AuthStore.logout()
    dialog.value = true
    await AuthStore.login(values)
    dialog.value = false

    if (errors.value.msg == undefined) {
        await swal.fire({
            text: "Đăng nhập thành công !",
            icon: "success",
            showConfirmButton: false,
            timer: 1000
        }).then(async () => {
            await navigateTo('/app')
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
            await navigateTo('/auth/login')
        });
    }
}
</script>

<template>
    <v-container class="h-100">
        <v-row class="h-100">
            <v-col class="d-flex justify-center align-center h-100">
                <v-card variant="outlined" width="340">
                    <v-card-title class="mb-3 text-center">ĐĂNG NHẬP TÀI KHOẢN</v-card-title>
                    <v-card-text>
                        <Form as="v-form" :validation-schema="schema" @submit="onSubmitLogin">
                            <!-- This method uses Higher-order component API to validate vuetify inputs -->
                            <Field name="username" v-slot="{ field, errors }" label="Tài khoản">
                                <v-text-field variant="outlined" v-bind="field" label="Tài khoản hoặc Email*"
                                    :error-messages="errors" class="mb-3" />
                            </Field>
                            <Field name="password" v-slot="{ field, errors }" label="Mật khẩu">
                                <v-text-field variant="outlined" v-bind="field" label="Mật khẩu*" type="password"
                                    :error-messages="errors" class="mb-3" />
                            </Field>

                            <!-- This uses a custom component with the composition API -->
                            <!-- <FormTextFieldValidation name="passwordConfirm" label="Password Confirmation"
                                type="password" /> -->

                            <!-- Same thing for other types of components -->
                            <!-- In case of checkboxes you need to explicitly bind the model events -->
                            <!-- With composition it is easier since you can use the `v-model` API directly -->
                            <Field name="remember" :value="true" type="checkbox"
                                v-slot="{ value, handleChange, errors }">
                                <v-checkbox :model-value="value" @update:modelValue="handleChange"
                                    label="Ghi nhớ đăng nhập?" color="primary" :error-messages="errors" />
                            </Field>
                            <v-row class="align-center">
                                <v-col>
                                    <v-btn color="primary" type="submit" :disabled="dialog" :loading="dialog"> Đăng Nhập
                                    </v-btn>
                                </v-col>
                                <v-spacer></v-spacer>
                                <v-col class="text-caption">
                                    <p id="go-register">Chưa có tài khoản?</p>
                                    <NuxtLink to="register">Đăng Ký</NuxtLink>
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
                    Tiến hành đăng nhập ...
                    <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<style scoped>
#go-register {
    width: 100px;
}
</style>