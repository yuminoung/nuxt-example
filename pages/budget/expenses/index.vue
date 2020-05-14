<template>
    <div>
        <BudgetNavigation expenses="active" />
        <Headline title="Expenses" />
        <!-- Sub-headline -->
        <div class="flex flex-row space-x-4">
            <FormInput
                id="year"
                value="2020"
                :input-class="['w-20', 'rounded']"
                store="budget/expenses/updateYear"
            />
            <FormSelect
                id="month"
                :select-class="['w-32', 'rounded']"
                :value="5"
                :values="{
                    1: 'January',
                    2: 'February',
                    3: 'March',
                    4: 'April',
                    5: 'May',
                    6: 'June',
                    7: 'July',
                    8: 'August',
                    9: 'September',
                    10: 'October',
                    11: 'November',
                    12: 'December'
                }"
                store="budget/expenses/updateMonth"
            />
            <nuxt-link
                to="/budget/expenses/create"
                class="p-4 shadow bg-white rounded block"
            >
                Create
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import Headline from '@/components/ui/Headline'
import FormInput from '@/components/form/FormInput'
import BudgetNavigation from '@/components/navigation/BudgetNavigation'
import FormSelect from '@/components/form/FormSelect'
export default {
    layout: 'budget',
    components: {
        BudgetNavigation,
        Headline,
        FormInput,
        FormSelect
    },
    computed: {}
}
</script>
