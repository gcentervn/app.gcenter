<script setup lang="ts">
import DefaultSystemBar from '@/components/layout/default/DefaultSystemBar.vue'
import DefaultDrawerRail from '@/components/layout/default/DefaultDrawerRail.vue'
import DefaultDrawerLeft from '@/components/layout/default/DefaultDrawerLeft.vue'
import DefaultAppBar from '@/components/layout/default/DefaultAppBar.vue'
import DefaultDrawerRight from '@/components/layout/default/DefaultDrawerRight.vue'

import { storeToRefs } from 'pinia'

const GlobalStore = useGlobalStore()
const { drawer } = storeToRefs(GlobalStore)

</script>
<template>
    <v-system-bar app>
        <DefaultSystemBar />
    </v-system-bar>

    <v-navigation-drawer app color="grey-lighten-3" rail rail-width="48" permanent>
        <DefaultDrawerRail />
    </v-navigation-drawer>

    <v-navigation-drawer app v-model="drawer">
        <DefaultDrawerLeft />
    </v-navigation-drawer>

    <v-app-bar app flat height="48" class="px-3" color="grey-lighten-4">
        <DefaultAppBar />
    </v-app-bar>

    <v-main app>
        <v-container>
            <slot />
        </v-container>
    </v-main>

    <v-navigation-drawer app location="right">
        <DefaultDrawerRight />
    </v-navigation-drawer>

    <!-- <v-footer app color="transparent" height="72" inset>
        <LayoutFooter />
    </v-footer> -->

</template>