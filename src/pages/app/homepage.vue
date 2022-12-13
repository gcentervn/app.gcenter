<script setup lang="ts">
import NewGameList from '@/components/app/NewGameList.vue'
import HotGameList from '@/components/app/HotGameList.vue'
import H5GameList from '@/components/app/H5GameList.vue'

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
    <v-row no-gutters class="flex-wrap">
        <v-col cols="12" md="3" lg="4" xl="3" class="order-md-2 mb-4">
            <div class="d-flex flex-row align-center">
                <v-icon color="success text-h5" class="mr-2">mdi mdi-monitor-cellphone </v-icon>
                <p class="text-h6">H5</p>
            </div>
            <H5GameList />
        </v-col>
        <v-col cols="12" md="9" lg="8" xl="9" class="mb-4">
            <div class="d-flex flex-row align-center">
                <v-icon color="error text-h4" class="mr-2">mdi mdi-new-box</v-icon>
                <p class="text-h6">Trò Chơi Mới</p>
            </div>
            <NewGameList class="mb-4" :games="games" />
            <div class="d-flex flex-row align-center">
                <v-icon color="warning text-h4" class="mr-2">mdi mdi-fire</v-icon>
                <p class="text-h6">Trò Chơi H5</p>
            </div>
            <HotGameList />
        </v-col>

    </v-row>
</template>