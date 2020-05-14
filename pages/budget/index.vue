<template>
    <div>
        <BudgetNavigation budget="active" />
        <Headline title="Dashboard" />
    </div>
</template>

<script>
import Headline from '@/components/ui/Headline'
import BudgetNavigation from '@/components/navigation/BudgetNavigation'
export default {
    layout: 'budget',
    components: {
        Headline,
        BudgetNavigation
    }
}
</script>
