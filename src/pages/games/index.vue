<script setup lang="ts">
import ListGameNew from '@/components/app/ListGameNew.vue'

const apiBaseURL = useRuntimeConfig().public.API_BASE_URL

const listGames: any = useFetch(`${apiBaseURL}/games/get_all_games`,
    {
        method: 'GET',
        parseResponse: JSON.parse
    }
)

const games = listGames.data as object

</script>
<template>
    <v-row>
        <v-col class="d-flex">
            <p class="text-h6 mr-4" v-for="i in ['All', 'H5', 'PC', 'Mobile']">#{{ i }}</p>
        </v-col>
    </v-row>
    <ListGameNew :games="games" />
</template>