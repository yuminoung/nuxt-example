<template>
    <div>
        <BudgetNavigation categories="active" />
        <Headline title="Categories" />
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
