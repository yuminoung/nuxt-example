<template>
    <div class="text-xs">
        <nuxt-link
            v-for="(crumb, index) in breadcrumbs"
            :key="crumb.id"
            :to="{ name: crumb }"
        >
            {{ paths[crumb] }}
            <span v-if="index != Object.keys(breadcrumbs).length - 1"
                >&sdot;</span
            >
        </nuxt-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            paths: {
                budget: 'Budget',
                'budget-expenses': 'Expenses',
                'budget-expenses-create': 'Create',
                'budget-expenses-id': 'Show',
                'budget-expenses-id-edit': 'Edit',
                'budget-categories': 'Categories',
                'budget-income': 'Income',
                'budget-report': 'Report'
            }
        }
    },
    computed: {
        breadcrumbs() {
            const breadcrumbs = []
            for (const name in this.paths) {
                if (this.$route.name.includes(name)) {
                    breadcrumbs.push(name)
                }
            }
            return breadcrumbs
        }
    },
    mounted() {
        // console.log(this.$route)
        // for (const name in this.paths) {
        //     if (this.$route.name.includes(name)) {
        //         this.breadcrumbs.push(name)
        //     }
        // }
    }
}
</script>
