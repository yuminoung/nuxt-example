<template>
    <div>
        <BudgetNavigation expenses="active" />
        <Headline title="Show" />
        <nuxt-link :to="{ name: 'budget-expenses-id-edit' }">EEdit</nuxt-link>
    </div>
</template>

<script>
import Headline from '@/components/ui/Headline'
import BudgetNavigation from '@/components/navigation/BudgetNavigation'
export default {
    layout: 'budget',
    components: {
        BudgetNavigation,
        Headline
    }
}
</script>
