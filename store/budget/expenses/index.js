export default {
    state: () => ({
        form: {
            year: null,
            month: null
        }
    }),
    getters: {},
    mutations: {
        updateMonth(state, value) {
            state.form.month = value
        },
        updateYear(state, value) {
            state.form.year = value
        }
    },
    actions: {}
}
