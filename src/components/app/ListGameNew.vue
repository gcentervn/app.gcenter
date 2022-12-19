<script lang="ts">
export default {
    inheritAttrs: false, // This is what disables attribute inheritance
    name: "ListGameNew"
};
</script>

<script setup lang="ts">
import GameCard from '@/components/games/GameCard.vue'

const props = defineProps({
    games: Object
})

const show = ref(false)
</script>
<template>
    <v-row>
        <v-col cols="12" md="4" v-for="game in props.games">
            <GameCard :game="game" />
        </v-col>
    </v-row>
</template>

<style scoped>
.v-chip {
    height: 28px;
}
</style>