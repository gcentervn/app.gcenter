import { acceptHMRUpdate, defineStore } from 'pinia'

const cookieToken = useCookie('token')
const userToken = useCookie('user')

const config = useRuntimeConfig()

const authFetch = $fetch.create({
    baseURL: `${config.API_BASE_URL}/auth/`,
    credentials: 'include',
    parseResponse: JSON.parse
})

const tokenFetch = $fetch.create({
    baseURL: `${config.API_BASE_URL}/auth/`,
    credentials: 'include',
    headers: {
        'trongateToken': cookieToken.value ? cookieToken.value : ''
    },
})

interface User {
    value: any
    id: number,
    provider: string,
    provider_username: string,
    username: string,
    display_name: string,
    email_adress: string,
    role: string,
}

interface Errors {
    value: any
    msg: string | null,
    code: string | null,
}

export const useAuthStore = defineStore('auth', () => {
    const errors = ref({}) as unknown as Errors
    const user = ref(userToken.value ? userToken.value : {} as any) as User
    const isAuthenticated = ref(!!cookieToken.value)

    async function verifyAuth() {
        if (isAuthenticated) {
            await tokenFetch('verify_token', {
                method: 'POST',
                parseResponse: JSON.parse
            }).then((response: any) => {
                console.log(response)
                const auth_user = response.auth_user
                const token = cookieToken.value
                setAuth(auth_user, token)
            }).catch((error) => {
                purgeAuth()
                errors.value = error.data
            })
        } else {
            await purgeAuth()
            await navigateTo({ path: 'login' })
        }
    }

    async function setAuth(auth_user: any, token: any) {
        isAuthenticated.value = true
        user.value = auth_user
        errors.value = {}
        userToken.value = userToken.value || JSON.stringify(auth_user)
        cookieToken.value = cookieToken.value || JSON.stringify(token)
    }

    async function purgeAuth() {
        isAuthenticated.value = false
        user.value = {}
        errors.value = {}
        userToken.value = null
        cookieToken.value = null
    }

    async function register(values: any) {
        await purgeAuth()
        await authFetch(`register`,
            {
                method: 'POST',
                body: JSON.stringify({
                    username: values.username,
                    password: values.password,
                    email_address: values.email_address
                })
            }).then((response: any) => {
                const auth_user = response.auth_user
                const token = response.trongateToken
                setAuth(auth_user, token)
            }).catch((error) => errors.value = error.data)
    }

    async function login(values: any) {
        await purgeAuth()
        await authFetch(`login`,
            {
                method: 'POST',
                body: JSON.stringify({
                    username: values.username,
                    password: values.password,
                    remember: values.remember
                })
            }).then((response: any) => {
                const auth_user = response.auth_user
                const token = response.trongateToken
                setAuth(auth_user, token)
            }).catch((error) => errors.value = error.data)
    }

    async function logout() {
        await purgeAuth()
    }

    return {
        errors, user, isAuthenticated,
        verifyAuth, register, login, logout
    }
})


if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))