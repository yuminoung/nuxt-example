<template>
    <div>
        <button
            type="submit"
            class="bg-white shadow p-4 rounded focus:outline-none focus:shadow-outline"
        >
            {{ value }}
        </button>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: 'Submit'
        }
    }
}
</script>
