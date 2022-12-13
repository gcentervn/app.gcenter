<script setup lang="ts">
import { storeToRefs } from 'pinia';

import ButtonAvatar from '@/layouts/app/drawer/ButtonAvatar.vue';
import ButtonJoin from '@/layouts/app/drawer/ButtonJoin.vue';

const AuthStore = useAuthStore()
const { isUserAuthenticated } = storeToRefs(AuthStore)
</script>

<template>
    <ButtonAvatar v-if="isUserAuthenticated" />
    <ButtonJoin v-else />
    <v-divider class="mx-3 mt-4 mb-6"></v-divider>

    <v-avatar v-for="n in 6" :key="n" class="d-block text-center mx-auto mb-9" color="grey-lighten-1"
        size="28"></v-avatar>
</template>