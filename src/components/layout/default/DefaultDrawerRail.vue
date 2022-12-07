<script setup lang="ts">
import ButtonAvatar from '@/components/layout/default/drawer/ButtonAvatar.vue'
</script>
<template>
    <ButtonAvatar />
    <v-divider class="mx-3 mt-4 mb-6"></v-divider>

    <v-avatar v-for="n in 6" :key="n" class="d-block text-center mx-auto mb-9" color="grey-lighten-1"
        size="28"></v-avatar>
</template>