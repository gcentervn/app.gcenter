<script setup lang="ts">
const rules = [(v: string | any[]) => v.length <= 500 || 'Tối đa 500 kí tự']
const value = ref(null)
</script>

<template>
    <v-textarea rows="1" counter auto-grow clearable class="mt-8" label="Hãy viết gì đó để mọi người hiểu hơn về bạn"
        variant="outlined" :rules="rules" :v-model="value" :model-value="value"></v-textarea>
    <v-col class="d-flex justify-center pa-0">
        <v-btn variant="outlined">Chức năng đang xây dựng</v-btn>
    </v-col>
</template>