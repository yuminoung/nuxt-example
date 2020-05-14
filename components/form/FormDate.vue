<template>
    <div class="flex flex-col">
        <label
            :for="id"
            class="p-4 shadow flex flex-row space-x-4 items-center rounded-t bg-white"
            @click="showDatePicker = !showDatePicker"
        >
            <div class="font-bold">{{ label }}</div>
            <div v-if="error" class="text-red-700 text-xs">
                The name field is required.
            </div>
        </label>
        <div
            class="p-4 shadow rounded-b bg-white"
            :class="{ 'shadow-outline': showDatePicker }"
            @click="showDatePicker = !showDatePicker"
        >
            {{ date }}
        </div>
        <DatePicker
            :show-date-picker.sync="showDatePicker"
            store="budget/expenses/create/updateDate"
        />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import DatePicker from '@/components/picker/DatePicker'

export default {
    components: {
        DatePicker
    },
    props: {
        label: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true
        },
        error: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            showDatePicker: false
        }
    },
    computed: {
        ...mapState({
            date: (state) => state.budget.expenses.create.form.date
        })
    },

    methods: {}
}
</script>
