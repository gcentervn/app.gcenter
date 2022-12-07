<template>
    <v-list>
        <v-list-item v-for="n in 5" :key="n" link>
            <v-list-item-title>Item {{ n }}</v-list-item-title>
        </v-list-item>
    </v-list>
</template>