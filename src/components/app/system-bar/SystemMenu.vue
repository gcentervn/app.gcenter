<template>
    <v-menu location="bottom">
        <template v-slot:activator="{ props }">
            <v-btn variant="plain" class="text-caption text-green-lighten-1 pa-0 mx-1" v-bind="props">
                Quick
            </v-btn>
        </template>
        <v-list density="compact" class="pa-0">
            <v-list-item>
                <NuxtLink class="text-black" tag="v-list-item" to="/auth/homepage">
                    Trang chủ
                </NuxtLink>
            </v-list-item>
        </v-list>
    </v-menu>
    <v-btn variant="plain" class="text-caption pa-0 mx-1">
        <NuxtLink class="text-green-lighten-1" tag="v-btn" to="/games">Games</NuxtLink>
    </v-btn>
</template>
<style scoped>
a {
    text-decoration: none;
}
</style>