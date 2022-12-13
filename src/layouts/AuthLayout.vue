<script setup lang="ts">
import AppSystemBar from '@/layouts/app/AppSystemBar.vue'

</script>
<template>
    <v-system-bar>
        <AppSystemBar />
    </v-system-bar>
    <v-main>
        <slot />
    </v-main>
</template>