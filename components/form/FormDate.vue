<template>
    <div class="flex flex-col">
        <label
            :for="id"
            class="p-4 shadow flex flex-row space-x-4 items-center rounded-t bg-white cursor-pointer"
            @click="showDatePicker = !showDatePicker"
        >
            <div class="font-bold">{{ label }}</div>
            <div v-if="error" class="text-red-700 text-xs">
                The name field is required.
            </div>
        </label>
        <div
            class="p-4 shadow rounded-b bg-white cursor-pointer"
            :class="{ 'shadow-outline': showDatePicker }"
            @click="showDatePicker = !showDatePicker"
        >
            {{ formattedDate() }}
        </div>

        <!-- show date picker -->

        <div
            v-show="showDatePicker"
            class="flex flex-col inset-0 fixed mx-auto items-center bg-gray-100 space-y-4 bg-opacity-5"
        >
            <div
                class="flex flex-col w-full p-4 md:px-0 md:w-1/2 mx-auto space-y-4 h-screen"
            >
                <div class="text-2xl font-bold px-4">
                    {{ label }}
                </div>
                <div
                    class="w-full grid grid-cols-7 rounded p-4 bg-white shadow text-center cursor-default"
                >
                    <!-- months -->
                    <div class="col-span-1 py-4 cursor-pointer">
                        &lt;
                    </div>
                    <div class="col-span-2 py-4">
                        {{ months[selectedMonth] }}
                    </div>
                    <div class="col-span-1 py-4 cursor-pointer">
                        &gt;
                    </div>
                    <!-- year -->
                    <div class="col-span-1 py-4 cursor-pointer">
                        &lt;
                    </div>
                    <div class="col-span-1 py-4">
                        {{ selectedYear }}
                    </div>
                    <div class="col-span-1 py-4 cursor-pointer">
                        &gt;
                    </div>
                    <!-- days -->
                    <div v-for="day in days" :key="day.id" class="p-4">
                        {{ day }}
                    </div>
                    <!-- dates -->
                    <div
                        v-for="day in monthTotalDay() + monthFirstDay()"
                        :key="day.id"
                    >
                        <div v-if="day <= monthFirstDay()"></div>
                        <div
                            v-else-if="day === selectedDay + monthFirstDay()"
                            class="py-4 bg-gray-800 text-white rounded"
                        >
                            {{ day - monthFirstDay() }}
                        </div>
                        <div
                            v-else
                            class="py-4 cursor-pointer"
                            @click="selectDay(day - monthFirstDay())"
                        >
                            {{ day - monthFirstDay() }}
                        </div>
                    </div>
                </div>
                <button
                    class="p-4 bg-white shadow focus:outline-none focus:shadow-outline rounded"
                    @click="close"
                >
                    Done
                </button>
            </div>
        </div>

        <!-- <DatePicker
            :show-date-picker.sync="showDatePicker"
            store="budget/expenses/create/updateDate"
        /> -->
    </div>
</template>

<script>
export default {
    components: {},
    props: {
        id: { type: String, required: true },
        label: { type: String, required: true },
        store: { type: String, required: true },
        error: { type: String, default: null }
    },
    data() {
        return {
            showDatePicker: false,
            selectedMonth: new Date().getMonth(),
            selectedDay: new Date().getDate(),
            selectedYear: new Date().getFullYear(),
            days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            months: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ]
        }
    },
    computed: {
        // ...mapState({
        //     date: (state) => state.budget.expenses.create.form.date
        // })
    },
    mounted() {
        this.$store.commit(this.store, this.formattedDate())
    },
    methods: {
        close() {
            this.showDatePicker = !this.showDatePicker
            this.$store.commit(this.store, this.formattedDate())
        },
        formattedDate() {
            return (
                this.selectedYear +
                '-' +
                (this.selectedMonth + 1) +
                '-' +
                this.selectedDay
            )
        },
        monthFirstDay() {
            return new Date(this.selectedYear, this.selectedMonth, 1).getDay()
        },
        monthTotalDay() {
            return new Date(
                this.selectedYear,
                this.selectedMonth + 1,
                0
            ).getDate()
        },
        selectDay(day) {
            this.selectedDay = day
        }
    },
    head() {
        return {
            bodyAttrs: {
                class: this.showDatePicker ? 'overflow-hidden' : ''
            }
        }
    }
}
</script>
