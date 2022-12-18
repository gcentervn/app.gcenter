<script lang="ts">
export default {
    inheritAttrs: false, // This is what disables attribute inheritance
    name: "GameCard"
};
</script>

<script setup lang="ts">

const props = defineProps({
    game: Object
})


console.log(props.game)

const show = ref(false)

</script>

<template>
    <v-card elevation="6">
        <nuxt-picture format="webp"
            :src="`http://api.gcenter.vn/games_module/games_pics/${props.game?.id}/${props.game?.picture}`"
            :imgAttrs="{ style: 'width:100%' }" />
        <v-card-title class="py-0">
            {{ props.game?.name }}
        </v-card-title>

        <v-card-subtitle>
            <v-chip class="px-1 mr-2 text-body font-weight-bold bg-grey-darken-2" label
                v-for="category in props.game?.categories">
                {{ category }}
            </v-chip>&nbsp;
        </v-card-subtitle>

        <v-card-actions>
            <v-btn :href="`/games/${props.game?.id}-${props.game?.url_string}/detail-information`"
                color="green-lighten-1" variant="text" height="24">
                Chi tiết
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn size="24" :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
        </v-card-actions>

        <v-expand-transition>
            <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                    {{ props.game?.description }}
                </v-card-text>
            </div>
        </v-expand-transition>
    </v-card>
</template>