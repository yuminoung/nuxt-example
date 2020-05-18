<template>
    <div
        v-show="showDatePicker"
        class="flex flex-col inset-0 fixed mx-auto items-center bg-gray-100 space-y-4 bg-opacity-5"
    >
        <div
            class="flex flex-col w-full p-4 md:px-0 md:w-1/2 mx-auto space-y-4 h-screen"
        >
            <div class="text-2xl font-bold px-4">
                Date
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
</template>

<script>
export default {
    props: {
        showDatePicker: {
            type: Boolean,
            required: true
        },
        store: {
            type: String,
            required: true
        }
    },
    data() {
        return {
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
    mounted() {
        this.$store.commit(this.store, this.formattedDate())
    },
    methods: {
        close() {
            this.$store.commit(this.store, this.formattedDate())
            this.$emit('update:show-date-picker', !this.showDatePicker)
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
    }
}
</script>
