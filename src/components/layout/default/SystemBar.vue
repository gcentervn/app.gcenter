<script setup lang="ts">
import ButtonThemeSetting from '@/components/layout/default/system-bar/ButtonThemeSetting.vue'
</script>
<template>
    <v-btn size="36" variant="plain" class="mr-md-4">
        <nuxt-img src="default-small.webp" height="24" />
    </v-btn>

    <v-btn v-for="text in ['Trung tâm', 'Trò Chơi', 'Cửa Hàng']" variant="plain" class="text-caption pa-0 mx-1">
        {{ text }}
    </v-btn>
    <v-spacer></v-spacer>
    <ButtonThemeSetting />
</template>