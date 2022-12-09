<script setup lang="ts">
import { storeToRefs } from 'pinia';

const AuthStore = useAuthStore()

const { isAuthenticated, user } = storeToRefs(AuthStore)

</script>
<template>
    <h1>Token: {{ isAuthenticated }}</h1><br>
    <h1>User: {{ user }}</h1>
</template>