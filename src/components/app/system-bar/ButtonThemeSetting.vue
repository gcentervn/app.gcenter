<script setup lang="ts">
import { mergeProps } from 'vue'

import { useTheme } from 'vuetify'
const theme = useTheme()

const toogleDarkMode = () => {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    localStorage.setItem('useDarkMode', theme.global.current.value.dark.toString())
}
</script>

<template>
    <v-tooltip location="left">
        <template v-slot:activator="{ props: tooltip }">
            <v-menu transition="slide-y-transition" :close-on-content-click="false">
                <template v-slot:activator="{ props }">

                    <v-btn variant="text" size="24" class="text-green-lighten-2" v-bind="mergeProps(props, tooltip)">
                        <v-icon>mdi mdi-spider-thread</v-icon>
                    </v-btn>

                </template>
                <v-card width="255" variant="outlined">
                    <v-card-title class="d-flex justify-center"><span>Tùy Chỉnh UI</span></v-card-title>
                    <v-divider></v-divider>
                    <v-card-text class="py-0">
                        <v-list>
                            <v-list-item>
                                <v-btn :active="theme.global.current.value.dark" prepend-icon="mdi-brightness-4"
                                    variant="outlined" class="w-100" @click="toogleDarkMode()">Dark Mode</v-btn>
                            </v-list-item>
                        </v-list>
                    </v-card-text>
                </v-card>
            </v-menu>
        </template>
        <span>Tùy chỉnh chủ đề</span>
    </v-tooltip>
</template>