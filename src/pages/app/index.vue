<script setup lang="ts">
import { storeToRefs } from 'pinia';

const AuthStore = useAuthStore()

const { isAuthenticated, user } = storeToRefs(AuthStore)

</script>
<template>
    <h3>Token: {{ isAuthenticated }}</h3><br>
    <p>User: {{ user }}</p>
    <v-btn @click="AuthStore.verifyAuth">Verify Auth</v-btn>
</template>