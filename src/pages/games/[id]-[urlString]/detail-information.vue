<script setup lang="ts">
import CarouselBanner from '@/components/app/CarouselBanner.vue'

const apiBaseURL = useRuntimeConfig().public.API_BASE_URL

const gameID = useRoute().params.id

const gameData: any = useFetch(`${apiBaseURL}/games/get_game_by_id`,
    {
        method: 'POST',
        body: { id: gameID },
        parseResponse: JSON.parse
    }
)

const game = gameData.data as any

</script>
<template>
    <p class="text-h4 mb-4">{{ game?.name }}</p>
    <v-row class="mx-0">
        <v-col class="bg-green pa-1 mb-4" cols="12" md="3">
            <nuxt-picture format="webp"
                :src="`http://api.gcenter.vn/games_module/games_pics/${game?.id}/${game?.picture}`"
                :imgAttrs="{ style: 'width:100%' }" />
        </v-col>
        <v-col class="d-flex flex-column pt-0" cols="12" md="6">
            <v-col class="d-flex pt-0">
                <v-chip class="px-1 mr-2 text-body font-weight-bold bg-grey-darken-2" label
                    v-for="category in game?.categories">
                    {{ category }}
                </v-chip>&nbsp;
            </v-col>
            <v-col class="d-flex pt-0">
                <v-chip class="px-1 mr-2 text-body font-weight-bold bg-white-darken-2" label
                    v-for="os_system in game?.os_systems">
                    {{ os_system }}
                </v-chip>&nbsp;
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="d-flex pt-0">
                <p class="text-h6 font-italic">{{ game?.description }}</p>
            </v-col>
        </v-col>
        <v-col class="pt-0" cols="12" md="3">
            <v-list density="compact" class="">
                <v-list-item>
                    <v-btn :href="game?.url_homepage" :target="'blank'" prepend-icon="mdi-home" variant="outlined"
                        class="w-100">Trang Chủ</v-btn>
                </v-list-item>
                <v-list-item>
                    <v-btn :href="game?.url_social" :target="'blank'" prepend-icon="mdi-share-variant"
                        variant="outlined" class="w-100">Cộng Đồng</v-btn>
                </v-list-item>
                <v-list-item :disabled="game?.url_playnow == '' ? true : false">
                    <v-btn :href="game?.url_playnow" :target="'blank'" prepend-icon="mdi-play-box" variant="outlined"
                        class="w-100">Chơi Ngay</v-btn>
                </v-list-item>
                <v-list-item :disabled="game?.url_download == '' ? true : false">
                    <v-btn :href="game?.url_download" :target="'blank'" prepend-icon="mdi-download-box"
                        variant="outlined" class="w-100">Tải Game</v-btn>
                </v-list-item>
            </v-list>
        </v-col>

    </v-row>
    <v-row>
        <v-col cols="12">
            <CarouselBanner :height="400" :apiHelper="`${apiBaseURL}/games_module/games_pictures/${game?.id}`"
                :pictures="game?.picture_files" />
        </v-col>
    </v-row>
    <v-row class="mb-4">
        <v-col>
            <p class="text-h5 mb-4">Thông tin chi tiết</p>
            <p class="text-body">{{ game?.detail_information }}</p>
        </v-col>

    </v-row>
</template>