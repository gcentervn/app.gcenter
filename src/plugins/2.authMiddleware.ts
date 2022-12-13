export default defineNuxtPlugin(() => {

  addRouteMiddleware('verify-auth', (to) => {
    const AuthStore = useAuthStore()
    if (to.name == 'app') {
      return
    }
    AuthStore.verifyAuth()
  }, { global: true })

  addRouteMiddleware('auth', async () => {
    const AuthStore = await useAuthStore()

    if (AuthStore.isUserAuthenticated) {
      return
    } else {
      return navigateTo('/auth/login')
    }
  })
})