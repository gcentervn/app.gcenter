<script setup lang="ts">
import ListGameNew from '@/components/app/ListGameNew.vue'
/* import HotGameList from '@/components/app/HotGameList.vue' 
import H5GameList from '@/components/app/H5GameList.vue' */
import CarouselBanner from '@/components/app/CarouselBanner.vue'

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
        <CarouselBanner cols="12" class="mb-8 pa-0" />
    </v-row>

    <v-row no-gutters class="flex-wrap">

        <v-col cols="12" xl="9" class="mb-4 pr-md-4">
            <!-- <div class="d-flex flex-row align-center">
                <v-icon color="success text-h5" class="mr-2">mdi mdi-monitor-cellphone </v-icon>
                <p class="text-h6">H5</p>
            </div>
            <H5GameList /> -->

            <div class="d-flex flex-row align-center mb-4">
                <v-icon color="error text-h4" class="mr-2">mdi mdi-new-box</v-icon>
                <p class="text-h6">Trò Chơi Mới</p>
            </div>
            <ListGameNew :games="games" />

            <!-- <div class="d-flex flex-row align-center mt-4">
                <v-icon color="warning text-h4" class="mr-2">mdi mdi-fire</v-icon>
                <p class="text-h6">Trò Chơi HOT</p>
            </div>
            <HotGameList /> -->
        </v-col>

    </v-row>
</template>