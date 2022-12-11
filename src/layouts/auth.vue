<script setup lang="ts">
import DefaultSystemBar from '@/components/layout/default/DefaultSystemBar.vue'

</script>
<template>
    <v-system-bar>
        <DefaultSystemBar />
    </v-system-bar>
    <v-main>
        <slot />
    </v-main>
</template>