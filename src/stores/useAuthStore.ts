import { acceptHMRUpdate, defineStore } from 'pinia'

interface User {
    [x: string]: any
    trongate_user_id: string | null,
    user_level: string | null,
}

interface Errors {
    [x: string]: any
    msg: string | null,
    code: string | null,
}

export const useAuthStore = defineStore('auth', () => {

    const cookieToken = useCookie('token')
    const userToken = useCookie('user')

    const apiBaseURL = useRuntimeConfig().public.API_BASE_URL

    const authFetch = $fetch.create({
        baseURL: `${apiBaseURL}/auth/`,
        credentials: 'include',
        parseResponse: JSON.parse
    })
    const tokenFetch = $fetch.create({
        baseURL: `${apiBaseURL}/auth/`,
        credentials: 'include',
        parseResponse: JSON.parse
    })

    // State
    const errors = ref({}) as unknown as Errors
    const user = ref(!!userToken.value ? userToken.value : {} as any) as User
    const isAuthenticated = ref(!!cookieToken.value)

    async function setError(error: any) {
        errors.value = { ...error }
    }

    // Getter
    const isUserAuthenticated = computed(() => isAuthenticated.value)

    // Action
    async function setAuth(auth_user: any, token: any) {
        isAuthenticated.value = true
        user.value = auth_user
        errors.value = {}
        userToken.value = userToken.value || auth_user
        cookieToken.value = cookieToken.value || token
    }

    async function purgeAuth() {
        isAuthenticated.value = false
        user.value = {}
        errors.value = {}
        userToken.value = null
        cookieToken.value = null
    }


    async function verifyAuth() {
        if (cookieToken) {
            await tokenFetch('verify_token', {
                method: 'POST',
                headers: {
                    'trongateToken': cookieToken.value as string
                },
            }).then((response: any) => {
                setAuth(response.auth_user, cookieToken.value)
            }).catch((error) => {
                setError(error.data)
                purgeAuth()
            })
        } else {
            await purgeAuth()
        }
    }

    async function register(values: any) {
        //await purgeAuth()
        await authFetch(`register`,
            {
                method: 'POST',
                body: JSON.stringify({
                    username: values.username,
                    password: values.password,
                    email_address: values.email_address
                })
            }).then((response: any) => {
                setAuth(response.auth_user, response.trongateToken)
            }).catch((error) => setError(error.data))
    }

    async function login(values: any) {
        //await purgeAuth()
        await authFetch(`login`,
            {
                method: 'POST',
                body: JSON.stringify({
                    username: values.username,
                    password: values.password,
                    remember: values.remember
                }),
            }).then((response: any) => {
                setAuth(response.auth_user, response.trongateToken)
            }).catch((error) => setError(error.data))
    }

    async function logout() {
        await purgeAuth()
    }

    return {
        errors, user, isAuthenticated, isUserAuthenticated,
        verifyAuth, register, login, logout
    }
})


if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))