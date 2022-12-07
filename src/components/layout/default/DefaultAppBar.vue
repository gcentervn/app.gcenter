<script setup lang="ts">
import { storeToRefs } from 'pinia';

const GlobalStore = useGlobalStore()

const { drawer } = storeToRefs(GlobalStore)


</script>

<template>
    <v-responsive max-width="32">
        <v-btn size="32" class="bg-grey" @click="drawer = !drawer">
            <v-icon v-if="!drawer">mdi mdi-arrow-right</v-icon>
            <v-icon v-else>mdi mdi-arrow-left</v-icon>
        </v-btn>
    </v-responsive>
    <v-spacer></v-spacer>

    <v-responsive max-width="156">

        <v-text-field density="compact" hide-details rounded></v-text-field>
    </v-responsive>
</template>