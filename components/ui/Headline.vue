<template>
    <div
        class="flex flex-row items-center justify-between p-4 shadow rounded bg-white"
    >
        <div class="font-bold">
            {{ title }}
        </div>
        <Breadcrumbs />
    </div>
</template>

<script>
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export default {
    components: {
        Breadcrumbs
    },
    props: {
        title: {
            required: true,
            type: String
        }
    }
}
</script>
