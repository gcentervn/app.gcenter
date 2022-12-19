<script setup lang="ts">
const AuthStore = useAuthStore();
const userCookie: any = useCookie('user').value;

const config = useRuntimeConfig();
const apiBaseURL = config.public.API_BASE_URL;

const listPlayers: any = await useFetch(`${apiBaseURL}/players/get_all_players`, {
    method: 'GET',
    headers: {
        'trongateToken': useCookie('token').value as string,
    },
    parseResponse: JSON.parse
});

const players = ref(listPlayers.data);

let isActive = true;
</script>
<template>
    <v-container v-if="!AuthStore.isUserAuthenticated">
        <p>Vui lòng đăng nhập</p>
    </v-container>

    <v-container fluid v-else>
        <div class="d-flex flex-row align-center mb-4">
            <v-icon color="primary text-h4" class="mr-2">mdi mdi-account-alert-outline</v-icon>
            <p class="text-h6">Thành Viên Mới</p>
        </div>
        <v-lazy v-model="isActive" :options="{
            threshold: .5
        }" min-height="200" transition="fade-transition">
            <div>
                <v-card class="mx-auto mb-2 bg-green-lighten-5" elevation="8" max-width="336" v-for="player in players">
                    <v-card-title class="pt-1 px-2">{{ player.username }}</v-card-title>
                    <v-card-text class="text-caption pb-1 px-2">
                        <div class="d-flex flex-row mb-1">
                            <div>
                                <v-chip class="px-1" color="muted" label>
                                    ID:
                                </v-chip>&nbsp;
                                <span><strong>{{ player.trongate_user_id }}</strong></span>
                            </div>
                            <v-spacer></v-spacer>
                            <div>
                                <v-chip class="px-1" color="muted" label>
                                    VIP:
                                </v-chip>&nbsp;
                                <span><strong>{{ player.vip_level }}</strong></span>
                            </div>
                        </div>
                        <div class="mb-1">
                            <v-chip class="px-1" color="muted" label>
                                Tham gia:
                            </v-chip>&nbsp;
                            <span><strong>{{ new Date(player.registed_date * 1000).toLocaleString() }}</strong></span>
                        </div>
                    </v-card-text>
                </v-card>
            </div>
        </v-lazy>
    </v-container>
</template>

<style scoped>
.v-chip {
    max-height: 20px;
}
</style>