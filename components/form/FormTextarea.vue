<template>
    <div class="flex flex-col">
        <label
            :for="id"
            class="p-4 bg-white shadow rounded-t font-bold cursor-pointer"
            @click="showTextarea = !showTextarea"
        >
            {{ label }}
        </label>
        <div
            class="p-4 shadow rounded-b bg-white cursor-pointer"
            @click="showTextarea = !showTextarea"
        >
            <div class="whitespace-no-wrap overflow-hidden">
                {{ value ? value : 'Optional' }}
            </div>
        </div>

        <!-- Show Textarea -->
        <div
            v-show="showTextarea"
            class="flex flex-col inset-0 fixed mx-auto items-center bg-gray-100 space-y-4 bg-opacity-5"
        >
            <div
                class="flex flex-col w-full p-4 md:px-0 md:w-1/2 mx-auto space-y-4 h-screen"
            >
                <div class="text-2xl font-bold px-4">
                    Note
                </div>
                <textarea
                    :id="id"
                    v-model="inputValue"
                    class="w-full flex-grow p-4 bg-white shadow resize-none focus:outline-none focus:shadow-outline rounded"
                    @input="updateInput"
                ></textarea>
                <button
                    class=" p-4 bg-white rounded shadow focus:outline-none focus:shadow-outline"
                    @click="showTextarea = !showTextarea"
                >
                    Done
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        id: { required: true, type: String },
        label: { required: true, type: String },
        store: { required: true, type: String },
        value: { type: String, default: null }
    },
    data() {
        return {
            inputValue: null,
            showTextarea: false
        }
    },
    methods: {
        updateInput() {
            this.$store.commit(this.store, this.inputValue)
        }
    },
    head() {
        return {
            bodyAttrs: {
                class: this.showTextarea ? 'overflow-hidden' : ''
            }
        }
    }
}
</script>
