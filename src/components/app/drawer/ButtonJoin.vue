<template>
    <v-menu location="end">
        <template v-slot:activator="{ props }">
            <v-btn class="pa-0 ma-0" variant="text" size="48" elevation="16" v-bind="props">
                <v-avatar image="/button/btn-join.png" class="d-block text-center mx-auto mt-4" size="48" />
            </v-btn>
        </template>
        <v-list density="compact">
            <v-list-item>
                <NuxtLink tag="v-list-item" to="/auth/register">
                    Đăng Ký
                </NuxtLink>
            </v-list-item>
            <v-list-item>
                <NuxtLink class="text-black" to="/auth/login">
                    Đăng Nhập
                </NuxtLink>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<style scoped>
a {
    text-decoration: none;
}
</style>