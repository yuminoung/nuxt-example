<template>
    <header
        class="flex flex-row items-center justify-between mt-4x bg-white shadow p-4 rounded-b"
    >
        <nuxt-link class="font-bold text-2xl" :to="link">
            {{ title }}
        </nuxt-link>
        <div v-if="auth" class="flex flex-row space-x-4 items-center">
            <nuxt-link to="/" class="p-4 shadow">Login</nuxt-link>
            <nuxt-link to="/" class="p-4 shadow">Register</nuxt-link>
        </div>
        <div v-else class="flex flex-row space-x-4 items-center">
            <nuxt-link
                v-if="pro"
                to="/pro"
                class="px-4 py-2 rounded bg-gray-800 text-white text-xs"
            >
                PRO
            </nuxt-link>
            <div v-else class="flex flex-row space-x-4">
                <div @click="show">
                    <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </div>
                <nuxt-link to="/">
                    <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                </nuxt-link>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        },
        pro: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            auth: false
        }
    }
}
</script>
