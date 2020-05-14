<template>
    <div>
        <BudgetNavigation expenses="active" />
        <Headline title="Create" />
        <Form>
            <FormInput
                id="amount"
                label="Amount"
                store="budget/expenses/create/updateAmount"
            />
            <FormSelect
                id="categories"
                label="Category"
                :value="1"
                :values="{ 1: 'Woolworths', 2: 'Coles' }"
                store="budget/expenses/create/updateCategory"
            />
            <FormDate id="date" label="Date" />
            <FormTextarea id="note" label="Note" />
            <FormSubmit value="Create" />
        </Form>
    </div>
</template>

<script>
import { mapState } from 'vuex'

import Form from '@/components/form/Form'
import FormInput from '@/components/form/FormInput'
import FormSelect from '@/components/form/FormSelect'
import FormDate from '@/components/form/FormDate'
import FormSubmit from '@/components/form/FormSubmit'
import FormTextarea from '@/components/form/FormTextarea'
import Headline from '@/components/ui/Headline'
import BudgetNavigation from '@/components/navigation/BudgetNavigation'

export default {
    layout: 'budget',
    components: {
        BudgetNavigation,
        Form,
        FormInput,
        FormSelect,
        FormDate,
        FormSubmit,
        FormTextarea,
        Headline
    },
    data() {
        return {}
    },
    computed: {
        ...mapState({
            expensesCreate: (state) => state.budget.expenses.create
        })
    }
}
</script>
