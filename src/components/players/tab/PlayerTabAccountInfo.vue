<script setup lang="ts">
import { Form, Field } from 'vee-validate';

const props = defineProps({
    player: Object
})

const player = ref(props.player) as object

const schema = {
    display_name: 'min:3|max:12',
    email_address: 'email|min:3|max:66',
    password: 'required'
};

const dialog = ref(false)

async function onSubmitUpdate(values: any) {
    await console.log('Edit account: ' + JSON.stringify(values))
}
</script>


<template>
    <v-col>
        <Form as="v-form" :validation-schema="schema" @submit="onSubmitUpdate">
            <!-- This method uses Higher-order component API to validate vuetify inputs -->
            <v-text-field disabled variant="outlined" label="UID" :model-value="player.trongate_user_id" class="mb-3" />
            <v-text-field disabled variant="outlined" label="Trạng thái" model-value="Đã Kích Hoạt" class="mb-3" />
            <v-text-field disabled variant="outlined" label="Tài khoản" :model-value="player.username" class="mb-3" />
            <Field name="display_name" v-slot="{ field, errors }" labe="Tên hiển thị">
                <v-text-field variant="outlined" v-bind="field" label="Tên hiển thị" type="text"
                    :error-messages="errors" class="mb-3" />
            </Field>
            <Field name="email_address" v-slot="{ field, errors }" labe="Địa chỉ mail">
                <v-text-field variant="outlined" v-bind="field" label="Email" type="email" :error-messages="errors"
                    class="mb-3" />
            </Field>
            <v-text-field disabled variant="outlined" label="Thời gian tham gia"
                :model-value="new Date(player.registed_date * 1000).toLocaleString()" class="mb-3" />
            <Field name="password" v-slot="{ field, errors }" label="Mật khẩu">
                <v-text-field variant="outlined" v-bind="field" label="Nhập mật khẩu hiện tại để xác minh"
                    type="password" :error-messages="errors" class="mb-3" />
            </Field>
            <!-- This uses a custom component with the composition API -->
            <!-- <FormTextFieldValidation name="passwordConfirm" label="Password Confirmation"
                                type="password" /> -->

            <!-- Same thing for other types of components -->
            <!-- In case of checkboxes you need to explicitly bind the model events -->
            <!-- With composition it is easier since you can use the `v-model` API directly -->
            <v-row class="align-center">
                <v-col>
                    <v-btn color="primary" type="submit" :disabled="dialog" :loading="dialog"> Cập nhật
                    </v-btn>
                </v-col>
                <v-spacer></v-spacer>
                <v-col class="text-caption">
                    <p id="have-account">Bạn muốn đổi mật khẩu?</p>
                    <NuxtLink to="/auth/change-password">> Trung tâm bảo mật</NuxtLink>
                </v-col>
            </v-row>
        </Form>
        <v-dialog v-model="dialog" :scrim="false" persistent>
            <v-card color="primary">
                <v-card-text>
                    Tiến hành đăng ký ...
                    <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-col>
</template>