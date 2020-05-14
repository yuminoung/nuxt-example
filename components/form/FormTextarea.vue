<template>
    <div class="flex flex-col">
        <label
            :for="id"
            class="p-4 bg-white shadow rounded-t font-bold"
            @click="showTextarea = !showTextarea"
        >
            {{ label }}
        </label>
        <div
            class="p-4 shadow rounded-b bg-white text-gray-500"
            @click="showTextarea = !showTextarea"
        >
            Optional
        </div>
        <div
            v-show="showTextarea"
            class="flex flex-col inset-0 fixed mx-auto items-center justify-center bg-gray-100 bg-opacity50"
        >
            <div class="text-2xl font-bold">
                Note
            </div>
            <textarea
                :id="id"
                class="w-full mx-4 md:mx-0 md:w-1/2 p-4 bg-white shadow resize-none focus:outline-none focus:shadow-outline rounded"
            ></textarea>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            required: true,
            type: String
        },
        label: {
            required: true,
            type: String
        }
    },
    data() {
        return {
            showTextarea: false
        }
    }
}
</script>
