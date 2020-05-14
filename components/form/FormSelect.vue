<template>
    <div class="flex flex-col">
        <label
            v-if="label"
            :for="id"
            class="p-4 shadow flex flex-row space-x-4 items-center rounded-t bg-white"
        >
            <div class="font-bold">{{ label }}</div>
            <div v-if="error" class="text-red-700 text-xs">
                {{ error }}
            </div>
        </label>

        <select
            :id="id"
            v-model="selectValue"
            :class="selectClass"
            class="appearance-none rounded-none p-4 shadow bg-white rounded-b focus:outline-none focus:shadow-outline"
            @change="updateSelect"
        >
            <option
                v-for="(elem, index) in values"
                :key="elem.id"
                :value="index"
            >
                {{ elem }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    props: {
        // required
        id: { type: String, required: true },
        store: { type: String, required: true },
        value: { type: Number, required: true },

        // optionals
        label: { type: String, default: null },
        error: { type: String, default: null },
        values: { type: Object, default: null },
        selectClass: { type: Array, default: null }
    },
    data() {
        return {
            selectValue: this.value
        }
    },
    mounted() {
        this.$store.commit(this.store, this.selectValue)
    },
    methods: {
        updateSelect() {
            this.$store.commit(this.store, this.selectValue)
        }
    }
}
</script>
