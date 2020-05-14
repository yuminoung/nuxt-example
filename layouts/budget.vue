<template>
    <div class="font-baloo bg-gray-100">
        <div
            class="w-full p-4 md:w-1/2 md:mx-auto md:p-0 space-y-4 flex flex-col min-h-screen"
        >
            <Header title="BUDGET" link="/budget" />
            <nuxt class="flex-grow flex flex-col space-y-4" />
            <Footer />
        </div>
    </div>
</template>

<script>
import Header from '@/components/fixed/Header'
import Footer from '@/components/fixed/Footer'
export default {
    components: {
        Header,
        Footer
    }
}
</script>
