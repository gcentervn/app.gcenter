<script setup lang="ts">
import NewGameList from '@/components/app/NewGameList.vue'
/* import HotGameList from '@/components/app/HotGameList.vue' 
import H5GameList from '@/components/app/H5GameList.vue' */

const apiBaseURL = useRuntimeConfig().public.API_BASE_URL

const listGames: any = useFetch(`${apiBaseURL}/games/get_all_games`,
    {
        method: 'GET',
        parseResponse: JSON.parse
    }
)

const games = listGames.data as object

const files = [
    {
        subtitle: 'Jan 20, 2014',
        title: 'Vacation itinerary Vacation itinerary Vacation itinerary',
    },
    {
        subtitle: 'Jan 10, 2014',
        title: 'Kitchen remodel',
    },
]
</script>

<template>
    <v-row no-gutters class="flex-wrap">
        <v-col cols="12" md="3" class="order-md-2 mb-4">
            <div class="d-flex flex-row align-center">
                <v-icon color="info text-h4" class="mr-1">mdi mdi-newspaper</v-icon>
                <p class="text-h6">Tin tức</p>
            </div>

            <v-list class="pa-0" lines="two">
                <v-list-item density="compact" class="pa-0" v-for="file in files" :key="file.title" :title="file.title"
                    :subtitle="file.subtitle">
                </v-list-item>
            </v-list>

        </v-col>
        <v-col cols="12" md="9" class="mb-4 pr-md-4">
            <!-- <div class="d-flex flex-row align-center">
                <v-icon color="success text-h5" class="mr-2">mdi mdi-monitor-cellphone </v-icon>
                <p class="text-h6">H5</p>
            </div>
            <H5GameList /> -->

            <div class="d-flex flex-row align-center mb-4">
                <v-icon color="error text-h4" class="mr-2">mdi mdi-new-box</v-icon>
                <p class="text-h6">Trò Chơi Mới</p>
            </div>
            <NewGameList :games="games" />

            <!-- <div class="d-flex flex-row align-center mt-4">
                <v-icon color="warning text-h4" class="mr-2">mdi mdi-fire</v-icon>
                <p class="text-h6">Trò Chơi HOT</p>
            </div>
            <HotGameList /> -->
        </v-col>

    </v-row>
</template>