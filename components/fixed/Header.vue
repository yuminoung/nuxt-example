<template>
    <header class="flex flex-row items-center justify-between mt-4">
        <nuxt-link class="font-bold text-2xl px-4" :to="link">
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
                class="px-4 py-2 mr-4 rounded bg-gray-800 text-white text-xs"
            >
                PRO
            </nuxt-link>
            <nuxt-link v-else to="/">
                <!-- <img
                    class="w-10 h-10 mr-4 rounded-full"
                    src="https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1445&q=80"
                    alt=""
                /> -->
                <svg
                    class="w-6 h-6 mr-4"
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
