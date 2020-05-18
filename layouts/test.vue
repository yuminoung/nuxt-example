<template>
    <div class="font-baloo bg-gray-100">
        <div class="flex flex-row min-h-screen">
            <!-- sidebar navigation -->
            <div class="flex flex-col w-1/5 bg-red-100 justify-between">
                <div class="items-center">
                    <div class="font-bold text-2xl text-center my-8">
                        BUDGET
                    </div>
                    <div class="flex flex-col space-y-4 items-center">
                        <a
                            href="#"
                            class="px-4 py-2 bg-gray-800 text-white rounded shadow"
                            >Dashboard</a
                        >
                        <a href="#" class="px-4 py-2 ">Categories</a>
                        <a href="#" class="px-4 py-2 ">Expenses</a>
                        <a href="#" class="px-4 py-2 ">Income</a>
                        <a href="#" class="px-4 py-2 ">Report</a>
                    </div>
                </div>
                <div class="flex flex-col items-center my-8">
                    <a href="" class="px-4 py-2 bg-gray-800 text-white rounded"
                        >Home</a
                    >
                </div>
            </div>
            <!-- main content -->
            <nuxt class="flex-grow flex flex-col space-y-4" />
        </div>
    </div>
</template>

<script>
export default {}
</script>
