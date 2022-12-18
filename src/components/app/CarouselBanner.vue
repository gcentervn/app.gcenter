<script setup lang="ts">
const props = defineProps({
    height: Number,
    pictures: Object,
    apiHelper: String,
})

</script>
<template>
    <v-carousel cycle :height="props.height" hide-delimiter-background show-arrows="hover">
        <v-carousel-item v-for="(picture) in props.pictures">
            <v-sheet color="grey" height="100%">
                <div class="d-flex fill-height justify-center align-center">
                    <nuxt-picture format="webp" :src="`${props.apiHelper}/${picture}`"
                        :imgAttrs="{ style: `width:100%;max-height:${props.height}px` }" />
                </div>
            </v-sheet>
        </v-carousel-item>
    </v-carousel>
</template>