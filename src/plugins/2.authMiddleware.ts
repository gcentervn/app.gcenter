export default defineNuxtPlugin(() => {

  addRouteMiddleware('verify-auth', (to) => {
    if (to.name == 'app') {
      return
    }

    const AuthStore = useAuthStore()
    if (AuthStore.isUserAuthenticated) {
      if (to.name == 'auth-login' || to.name == 'auth-register') {
        return navigateTo('/app')
      } else {
        return
      }
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