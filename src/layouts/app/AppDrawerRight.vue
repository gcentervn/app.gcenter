<script setup lang="ts">
const isActive = true
</script>
<template>
    <v-container fluid>
        <div class="d-flex flex-row align-center mb-4">
            <v-icon color="primary text-h4" class="mr-2">mdi mdi-account-alert-outline</v-icon>
            <p class="text-h6">Thành Viên Mới</p>
        </div>
        <v-lazy v-model="isActive" :options="{
            threshold: .5
        }" min-height="200" transition="fade-transition">
            <div>
                <v-card class="mx-auto mb-2 bg-green-lighten-5" elevation="8" max-width="336" v-for="i in 20">
                    <v-card-title class="pt-1 px-2">Username</v-card-title>
                    <v-card-text class="text-caption pb-1 px-2">
                        <div class="d-flex flex-row mb-1">
                            <div>
                                <v-chip class="px-1" color="muted" label>
                                    ID:
                                </v-chip>&nbsp;
                                <span><strong>767162747</strong></span>
                            </div>
                            <v-spacer></v-spacer>
                            <div>
                                <v-chip class="px-1" color="muted" label>
                                    VIP:
                                </v-chip>&nbsp;
                                <span><strong>10</strong></span>
                            </div>
                        </div>
                        <div class="mb-1">
                            <v-chip class="px-1" color="muted" label>
                                Online:
                            </v-chip>&nbsp;
                            <span><strong>3 giờ trước</strong></span>
                        </div>
                        <div class="mb-1">
                            <v-chip class="px-1" color="muted" label>
                                Rời mạng:
                            </v-chip>&nbsp;
                            <span><strong>1 giờ trước</strong></span>
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