<template>
    <v-sheet color="grey-lighten-5" height="128" width="100%"></v-sheet>

    <v-list class="pl-14" shaped>
        <v-list-item v-for="n in 5" :key="n" link>
            <v-list-item-title>Item {{ n }}</v-list-item-title>
        </v-list-item>
    </v-list>
</template>