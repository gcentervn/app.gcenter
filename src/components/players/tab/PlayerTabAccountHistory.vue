<script setup lang="ts">

const props = defineProps({
    player: Object
})
</script>

<template>
    <div>
        <v-col>
            <p>Thời gian đăng nhập lần trước: <strong> {{ new Date(props.player?.last_login * 1000).toLocaleString() }}
                </strong></p>
        </v-col>
    </div>
</template>