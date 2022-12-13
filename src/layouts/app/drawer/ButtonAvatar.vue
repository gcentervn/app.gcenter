<script setup lang="ts">
const AuthStore = useAuthStore()

async function btnLogout() {
    await AuthStore.logout()
}
</script>
<template>
    <div>
        <v-menu transition="slide-x-transition" :close-on-content-click="false" open-delay="10" close-delay="100">
            <template v-slot:activator="{ props }">
                <v-avatar class="d-block text-center mx-auto mt-4" color="grey-darken-1" size="36" v-bind="props" />
            </template>
            <v-card id="account-popup" width="300" variant="outlined">
                <v-card-title class="d-flex justify-center flex-column">
                    <v-row no-gutters>
                        <v-col cols="4" class="d-flex flex-column align-center justify-center">
                            <v-avatar class="d-block text-center my-1" color="grey-darken-1" size="66" />
                            <span class="text-caption">Admin</span>
                        </v-col>
                        <v-col cols="8" class="d-flex flex-column">
                            <div class="mb-1">
                                <v-chip class="px-1" color="muted" label>
                                    Name:
                                </v-chip>&nbsp;
                                <span class="text-body-1"><strong>Golden</strong></span>
                            </div>

                            <div class="mb-1">
                                <v-chip class="px-1" color="muted" label>
                                    ID:
                                </v-chip>&nbsp;
                                <span class="text-body-1"><strong>quangquoc</strong></span>
                            </div>
                            <div class="mb-1">
                                <v-chip class="px-1" color="muted" label>
                                    VIP:
                                </v-chip>&nbsp;
                                <span class="text-body-1"><strong>10</strong></span>
                            </div>

                        </v-col>
                    </v-row>
                    <v-divider class="my-2"></v-divider>
                    <v-row>
                        <v-col>
                            <div class="mb-1">
                                <v-chip class="px-1" color="yellow-darken-4" label>
                                    Gcoin:
                                </v-chip>&nbsp;
                                <span class="text-body-1"><strong>10</strong></span>
                            </div>
                        </v-col>
                        <v-col>
                            <div class="mb-1">
                                <v-chip class="px-1" color="blue" label>
                                    Bluz:
                                </v-chip>&nbsp;
                                <span class="text-body-1"><strong>10</strong></span>
                            </div>
                        </v-col>
                    </v-row>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text class="py-0">
                    <v-list>
                        <v-list-item v-for="i in ['Ví', 'Lịch sử giao dịch', 'Giftcode']">
                            <v-btn variant="outlined" class="w-100">{{ i }}</v-btn>
                        </v-list-item>
                        <v-divider class="my-2"></v-divider>
                        <v-list-item>
                            <v-btn variant="outlined" class="w-100">Tài khoản</v-btn>
                        </v-list-item>
                        <v-divider class="my-2"></v-divider>
                        <v-list-item>
                            <v-btn variant="outlined" class="w-100" @click="btnLogout()">Đăng
                                Xuất</v-btn>
                        </v-list-item>
                    </v-list>
                </v-card-text>
            </v-card>
        </v-menu>
    </div>
</template>

<style scoped>
#account-popup {
    top: -45px;
    left: -7px;
}

.v-chip {
    width: 50px;
}
</style>