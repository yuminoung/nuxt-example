<template>
    <div class="font-baloo bg-gray-100">
        <div class="w-1/2 mx-auto space-y-4 flex flex-col min-h-screen">
            <Header title="OUNG" link="/" :pro="true" />
            <OungNavigation />
            <nuxt class="flex-grow flex flex-col space-y-4" />
            <Footer />
        </div>
    </div>
</template>

<script>
import Header from '@/components/fixed/Header'
import Footer from '@/components/fixed/Footer'
import OungNavigation from '@/components/navigation/OungNavigation'
export default {
    components: {
        Header,
        Footer,
        OungNavigation
    }
}
</script>
