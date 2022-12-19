<script setup lang="ts">
import ButtonThemeSetting from '@/components/app/system-bar/ButtonThemeSetting.vue'
import SystemMenu from '@/components/app/system-bar/SystemMenu.vue'
</script>
<template>
    <NuxtLink to="/app/homepage">
        <v-btn size="36" variant="plain" class="mr-md-4">
            <nuxt-picture src="/default-small.webp" :imgAttrs="{ style: 'height:24px' }" />
        </v-btn>
    </NuxtLink>

    <SystemMenu />

    <v-spacer></v-spacer>
    <ButtonThemeSetting />
</template>