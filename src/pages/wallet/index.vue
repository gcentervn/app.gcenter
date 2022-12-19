<script setup lang="ts">
useHead({
    title: 'Ví'
})

definePageMeta({
    middleware: ['auth']
})

const userCookie: any = useCookie('user').value

const config = useRuntimeConfig()
const apiBaseURL = config.public.API_BASE_URL

const playerData: any = await useFetch(`${apiBaseURL}/players/get_player_by_id`, {
    method: 'POST',
    credentials: 'include',
    headers: {
        'trongateToken': useCookie('token').value as string,
    },
    body: {
        id: userCookie.trongate_user_id
    },
    parseResponse: JSON.parse
})

const player = ref(playerData.data)
const playerRole = ref(userCookie.user_level)
</script>

<template>
    <p class="text-h4 mb-4">#{{ player.username }} - <span class="text-h5">@{{ playerRole }}</span></p>
    <v-row>
        <v-col cols="12" sm="6">
            <v-card class="mx-auto">
                <v-card-item title="Gcoin">
                    <template v-slot:subtitle>
                        <v-icon icon="mdi-alert" size="18" color="error" class="mr-1 pb-1"></v-icon>
                        Đây là tài sản ảo, không quy đổi<br> ra Việt Nam Đồng bằng bất cứ <br> hình thức nào.
                    </template>
                </v-card-item>

                <v-card-text class="py-0">
                    <v-row class="align-center" no-gutters>
                        <v-col class="text-h2" cols="6">
                            {{ player.gcoin }}
                        </v-col>

                        <v-col cols="6" class="text-right">
                            <v-icon color="error" icon="mdi-weather-hurricane" size="88"></v-icon>
                        </v-col>
                    </v-row>
                </v-card-text>

                <!-- <div class="d-flex py-3 justify-space-between">
            <v-list-item density="compact" prepend-icon="mdi-weather-windy">
                <v-list-item-subtitle>123 km/h</v-list-item-subtitle>
            </v-list-item>

            <v-list-item density="compact" prepend-icon="mdi-weather-pouring">
                <v-list-item-subtitle>48%</v-list-item-subtitle>
            </v-list-item>
        </div> -->
            </v-card>
        </v-col>
        <v-col cols="12" sm="6">
            <v-card class="mx-auto">
                <v-card-item title="BluzC">
                    <template v-slot:subtitle>
                        <v-icon icon="mdi-alert" size="18" color="error" class="mr-1 pb-1"></v-icon>
                        Đây là tài sản ảo, không quy đổi<br> ra Việt Nam Đồng bằng bất cứ <br> hình thức nào.
                    </template>
                </v-card-item>

                <v-card-text class="py-0">
                    <v-row align="center" no-gutters>
                        <v-col class="text-h2" cols="6">
                            {{ player.gcoin }}
                        </v-col>

                        <v-col cols="6" class="text-right">
                            <v-icon color="error" icon="mdi-weather-hurricane" size="88"></v-icon>
                        </v-col>
                    </v-row>
                </v-card-text>

                <!-- <div class="d-flex py-3 justify-space-between">
            <v-list-item density="compact" prepend-icon="mdi-weather-windy">
                <v-list-item-subtitle>123 km/h</v-list-item-subtitle>
            </v-list-item>

            <v-list-item density="compact" prepend-icon="mdi-weather-pouring">
                <v-list-item-subtitle>48%</v-list-item-subtitle>
            </v-list-item>
        </div> -->
            </v-card>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <p class="text-h5">
                Lịch sử giao dịch
            </p>
            <p class="mt-4">( Đang xây dựng )</p>
        </v-col>
    </v-row>
</template>