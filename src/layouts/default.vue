<script setup lang="ts">
import AppSystemBar from '@/layouts/app/AppSystemBar.vue'
import AppDrawerRail from '@/layouts/app/AppDrawerRail.vue'
import AppDrawerLeft from '@/layouts/app/AppDrawerLeft.vue'
import AppBar from '@/layouts/app/AppBar.vue'
import AppDrawerRight from '@/layouts/app/AppDrawerRight.vue'

import { storeToRefs } from 'pinia'

const GlobalStore = useGlobalStore()
const { drawer } = storeToRefs(GlobalStore)

</script>

<template>
    <v-system-bar app>
        <AppSystemBar />
    </v-system-bar>

    <v-navigation-drawer id="drawerRail" app rail rail-width="48" permanent>
        <AppDrawerRail />
    </v-navigation-drawer>

    <v-navigation-drawer app v-model="drawer">
        <AppDrawerLeft />
    </v-navigation-drawer>

    <v-app-bar app flat height="48" class="px-3" color="grey-lighten-4">
        <AppBar />
    </v-app-bar>

    <v-main app>
        <v-container fluid>
            <slot />
        </v-container>
    </v-main>

    <v-navigation-drawer app location="right">
        <AppDrawerRight />
    </v-navigation-drawer>

    <!-- <v-footer app color="transparent" height="72" inset>
        <LayoutFooter />
    </v-footer> -->

</template>

<style>
#drawerRail {
    background: rgba(10, 10, 10, .85);
    box-shadow: 0 8px 8px rgb(2 4 24);
}
</style>