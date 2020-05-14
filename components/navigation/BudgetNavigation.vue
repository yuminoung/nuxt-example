<template>
    <div
        class="flex flex-col md:flex-row md:items-center shadow p-4 md:space-x-4 rounded bg-white"
    >
        <nuxt-link to="/budget" :class="{ 'font-bold': budget }">
            Budget
        </nuxt-link>
        <nuxt-link to="/budget/categories" :class="{ 'font-bold': categories }">
            Categories
        </nuxt-link>
        <nuxt-link to="/budget/expenses" :class="{ 'font-bold': expenses }">
            Expenses
        </nuxt-link>
        <nuxt-link to="/budget/income" :class="{ 'font-bold': income }">
            Income
        </nuxt-link>
        <nuxt-link to="/budget/report" :class="{ 'font-bold': report }">
            Report
        </nuxt-link>
    </div>
</template>

<script>
export default {
    props: {
        budget: {
            type: String,
            default: null
        },
        categories: {
            type: String,
            default: null
        },
        expenses: {
            type: String,
            default: null
        },
        income: {
            type: String,
            default: null
        },
        report: {
            type: String,
            default: null
        }
    }
}
</script>
