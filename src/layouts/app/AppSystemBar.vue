<script setup lang="ts">
import ButtonThemeSetting from '@/layouts/app/system-bar/ButtonThemeSetting.vue'
</script>
<template>
    <v-btn size="36" variant="plain" class="mr-md-4">
        <nuxt-picture src="/default-small.webp" :imgAttrs="{ style: 'height:24px' }" />
    </v-btn>

    <v-btn v-for="text in ['Trung tâm', 'Trò Chơi', 'Cửa Hàng']" variant="plain" class="text-caption pa-0 mx-1">
        {{ text }}
    </v-btn>
    <v-spacer></v-spacer>
    <ButtonThemeSetting />
</template>