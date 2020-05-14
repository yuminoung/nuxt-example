<template>
    <div class="flex flex-col">
        <label
            v-if="label"
            :for="id"
            class="p-4 shadow flex flex-row space-x-4 items-center rounded-t bg-white"
        >
            <div class="font-bold">{{ label }}</div>
            <div v-if="error" class="text-red-700 text-xs">
                The name field is required.
            </div>
        </label>
        <input
            :id="id"
            v-model="inputValue"
            :name="id"
            :class="inputClass"
            type="text"
            class="p-4 shadow focus:outline-none focus:shadow-outline rounded-b"
            autocomplete="off"
            @input="updateInput"
        />
    </div>
</template>

<script>
export default {
    props: {
        // requires
        id: { type: String, required: true },
        store: { type: String, required: true },
        // optionals
        value: { type: String, default: null },
        label: { type: String, default: null },
        error: { type: String, default: null },
        inputClass: { type: Array, default: null }
    },
    data() {
        return {
            inputValue: this.value
        }
    },
    mounted() {
        if (this.value != null) {
            this.$store.commit(this.store, this.inputValue)
        }
    },
    methods: {
        updateInput() {
            this.$store.commit(this.store, this.inputValue)
        }
    }
}
</script>
