<template>
    <div>
        <Headline title="Apps" />
        <div class="flex flex-col">
            <nuxt-link to="/budget" class="p-4 bg-white shadow flex flex-col">
                <div class="font-bold">
                    BUDGET
                </div>
                <div class="text-sm">
                    Minimalist Expense, Income and Budget Tracking App.
                </div>
            </nuxt-link>
            <nuxt-link
                to="budget/expenses"
                class="p-4 bg-white shadow inline-block"
            >
                Todo
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import Headline from '@/components/ui/Headline'
export default {
    components: {
        Headline
    }
}
</script>
