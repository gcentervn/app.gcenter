<script setup lang="ts">
const siteLocale = 'vi'
const siteName = 'Www.Gcenter.Vn'
const siteTitle = 'Gcenter'
const siteDescription = 'Cộng Đồng Game Private Số 1 Việt Nam'
const siteKeywords = 'gcenter, gcentervn, goldencenter, golden center, game, game online, game offline, game private, game mobile, game h5, game pc'
const siteAuthor = 'Golden 666'

useHead({
  htmlAttrs: {
    lang: `${siteLocale}`
  },
  title: `${siteDescription}`,
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${siteTitle} | ${titleChunk}` : `${siteTitle} | ${siteDescription}`;
  },
  meta: [
    { name: 'description', content: `${siteName} - ${siteDescription}` },
    { name: 'keywords', content: `${siteKeywords}` },
    { name: 'robots', content: 'noindex, nofollow' },
    { 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' },
    { name: 'author', content: `${siteAuthor}` },
  ]
})
</script>
<template>
  <v-app>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </v-app>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

body {
  height: 100vh;
  margin: 0px;
  padding: 0px;
  font-family: 'Space Grotesk', sans-serif;
}
</style>