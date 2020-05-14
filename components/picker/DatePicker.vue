<template>
    <div
        v-show="showDatePicker"
        class="flex inset-0 absolute mx-auto items-center justify-center bg-gray-100"
    >
        <div
            class="grid grid-cols-7 rounded p-4 bg-white shadow text-center cursor-default"
        >
            <div class=" col-span-7 p-4 font-bold">
                {{ formattedDate() }}
            </div>
            <!-- months -->
            <div class="col-span-1 p-4 cursor-pointer">
                &lt;
            </div>
            <div class="col-span-2 p-4">
                {{ months[selectedMonth] }}
            </div>
            <div class="col-span-1 p-4 cursor-pointer">
                &gt;
            </div>
            <!-- year -->
            <div class="col-span-1 p-4 cursor-pointer">
                &lt;
            </div>
            <div class="col-span-1 p-4">
                {{ selectedYear }}
            </div>
            <div class="col-span-1 p-4 cursor-pointer">
                &gt;
            </div>
            <!-- days -->
            <div v-for="day in days" :key="day.id" class="p-4">
                {{ day }}
            </div>
            <!-- dates -->
            <div v-for="day in monthTotalDay() + monthFirstDay()" :key="day.id">
                <div v-if="day <= monthFirstDay()"></div>
                <div
                    v-else-if="day === selectedDay + monthFirstDay()"
                    class="p-4 bg-gray-800 text-white rounded"
                >
                    {{ day - monthFirstDay() }}
                </div>
                <div
                    v-else
                    class="p-4 cursor-pointer"
                    @click="selectDay(day - monthFirstDay())"
                >
                    {{ day - monthFirstDay() }}
                </div>
            </div>
            <div class=" col-span-7 p-4 bg-white shadow" @click="close">
                Done
            </div>
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
