<script setup lang="ts">
definePageMeta({
    middleware: 'auth'
})

const config = useRuntimeConfig()
const apiBaseURL = config.public.API_BASE_URL

const listPlayers: any = await useFetch(`${apiBaseURL}/players/get_all_players`, {
    method: 'GET',
    headers: {
        'trongateToken': useCookie('token').value as string,
    },
    parseResponse: JSON.parse
})

const players = ref(listPlayers.data)
const playerRole = ref(useCookie('user').value?.user_level)

</script>

<template>
    <v-row class="d-flex flex-column">
        <v-col class="d-flex flex-row align-center">
            <v-icon color="text-h4 mr-2" class="mr-1">mdi mdi-account-multiple</v-icon>
            <p class="text-h6"> Trung Tâm Thành Viên</p>
        </v-col>
        <v-col>
            <v-table fixed-header height="100vh">
                <thead>
                    <tr>
                        <th class="text-left">
                            ID
                        </th>
                        <th class="text-left">
                            Username
                        </th>
                        <th class="text-left">
                            Rank
                        </th>
                        <th class="text-left">
                            Thời gian tham gia
                        </th>
                        <th class="text-left">
                            Hành động
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="player in players">
                        <td>{{ player.trongate_user_id }}</td>
                        <td>{{ player.username }}</td>
                        <td>{{ playerRole }}</td>
                        <td>{{ new Date(player.registed_date * 1000).toLocaleString() }}</td>
                        <td>Xem</td>
                    </tr>
                </tbody>
            </v-table>
        </v-col>
    </v-row>
</template>