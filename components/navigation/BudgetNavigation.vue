<template>
    <div
        class=" hidden md:visible flex flex-col md:flex-row md:items-center md:space-x-4"
    >
        <nuxt-link
            to="/budget"
            class="p-4 rounded bg-white shadow"
            :class="{ 'bg-gray-800 text-white': budget }"
        >
            Budget
        </nuxt-link>
        <nuxt-link
            to="/budget/categories"
            class="p-4 rounded bg-white shadow"
            :class="{ 'bg-gray-800 text-white': categories }"
        >
            Categories
        </nuxt-link>
        <nuxt-link
            to="/budget/expenses"
            class="p-4 rounded bg-white shadow"
            :class="{ 'bg-gray-800 text-white': expenses }"
        >
            Expenses
        </nuxt-link>
        <nuxt-link
            to="/budget/income"
            class="p-4 rounded bg-white shadow"
            :class="{ 'bg-gray-800 text-white': income }"
        >
            Income
        </nuxt-link>
        <nuxt-link
            to="/budget/report"
            class="p-4 rounded bg-white shadow"
            :class="{ 'bg-gray-800 text-white': report }"
        >
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
