<script setup lang="ts">
import PlayerTabProfile from '@/components/players/tab/PlayerTabProfile.vue'
import PlayerTabAccountInfo from '@/components/players/tab/PlayerTabAccountInfo.vue'
import PlayerTabAccountHistory from '@/components/players/tab/PlayerTabAccountHistory.vue'

useHead({
    title: 'Thông tin thành viên'
})

definePageMeta({
    middleware: 'auth'
})

const AuthStore = useAuthStore()

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
        id: useRoute().params.id
    },
    parseResponse: JSON.parse
})

const player = ref(playerData.data)
const playerRole = ref(userCookie.user_level)

const tab = ref(null)
</script>

<template>
    <p class="text-h4 mb-4">#{{ player.username }} - <span class="text-h5">@{{ playerRole }}</span>
    </p>
    <v-row>
        <v-col cols="12" sm="3">
            <nuxt-picture format="webp"
                :src="`${apiBaseURL}/players_module/players_pics/${player.id}/${player.picture}`"
                :imgAttrs="{ style: 'width:100%' }" />
        </v-col>
        <v-col cols="12" sm="9">
            <v-col class="d-flex flex-column">
                <div class="mb-1">
                    <v-chip class="topChip px-1" color="muted" label>
                        Tên:
                    </v-chip>&nbsp;
                    <span class="text-body-1 w-100"><strong>{{ player.display_name ?? 'Game thủ Gcenter'
                    }}</strong></span>
                </div>

                <div class="mb-1">
                    <v-chip class="topChip px-1" color="muted" label>
                        UID:
                    </v-chip>&nbsp;
                    <span class="text-body-1"><strong>{{ player.trongate_user_id ?? '' }}</strong></span>
                </div>
                <div class="mb-1">
                    <v-chip class="topChip px-1" color="muted" label>
                        VIP:
                    </v-chip>&nbsp;
                    <span class="text-body-1"><strong>/</strong></span>
                </div>
                <div class="mb-1">
                    <v-chip class="topChip px-1" color="muted" label>
                        Mail:
                    </v-chip>&nbsp;
                    <span class="text-body-1"><strong>{{ player.email_address }}</strong></span>
                </div>
                <v-btn variant="outlined" class="w-100 mt-4" @click="AuthStore.logout()">Đăng
                    Xuất</v-btn>
            </v-col>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <v-tabs v-model="tab" density="compact" fixed-tabs>
                <v-tab value="avatar-maker">
                    Tự giới thiệu
                </v-tab>
                <v-tab value="account-info">
                    Thông tin tài khoản
                </v-tab>
                <v-tab value="account-log">
                    Nhật ký tài khoản
                </v-tab>
            </v-tabs>
            <v-window v-model="tab">
                <v-window-item value="avatar-maker">
                    <PlayerTabProfile />
                </v-window-item>

                <v-window-item value="account-info">
                    <PlayerTabAccountInfo :player="player" />
                </v-window-item>

                <v-window-item value="account-log">
                    <PlayerTabAccountHistory :player="player" />
                </v-window-item>
            </v-window>
        </v-col>
    </v-row>
    <p class="text-caption">Member of Www.Gcenter.Vn</p>
</template>

<style scoped>
.topChip {
    width: 40px;
}

.v-window-item {
    min-height: 50vh;
    width: 100%;
}
</style>