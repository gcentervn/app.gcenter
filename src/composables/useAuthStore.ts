import { acceptHMRUpdate, defineStore } from 'pinia'

const config = useRuntimeConfig()
const authFetch = $fetch.create({ baseURL: '/api' })

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
    const user = ref(JSON.parse(localStorage.getItem('user') as any)) as User
    const isAuthenticated = ref(JSON.parse(localStorage.getItem('token') as any))

    async function setAuth(auth_user: any, token: any) {
        isAuthenticated.value = true
        user.value = auth_user
        errors.value = {}
        await localStorage.setItem('user', JSON.stringify(auth_user))
        await localStorage.setItem('token', JSON.stringify(token))
    }

    async function purgeAuth() {
        isAuthenticated.value = false
        user.value = {}
        errors.value = {}
        await localStorage.removeItem('user')
        await localStorage.removeItem('token')
    }

    async function register(values: any) {
        await authFetch(`${config.API_BASE_URL}/auth/register`,
            {
                method: 'POST',
                body: JSON.stringify({
                    username: values.username,
                    password: values.password,
                    email_address: values.email_address ? values.email_address : values.username + '@gcenter.vn'
                }),
                parseResponse: JSON.parse
            }).then((response: any) => {
                const auth_user = response.auth_user
                const token = response.trongateToken
                setAuth(auth_user, token)
            }).catch((error) => errors.value = error.data.error)
    }

    async function logout() {
        await purgeAuth()
    }

    return {
        errors, user, isAuthenticated,
        register, logout
    }
})


if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))