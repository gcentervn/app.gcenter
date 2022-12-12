export default defineNuxtPlugin(() => {

  addRouteMiddleware('verify-auth', () => {
    const AuthStore = useAuthStore()
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