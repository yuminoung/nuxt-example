<template>
    <div>
        <BudgetNavigation report="active" />
        <Headline title="Report" />
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
