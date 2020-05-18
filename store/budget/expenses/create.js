export default {
    state: () => ({
        form: {
            amount: null,
            category: null,
            note: null,
            date: null
        }
    }),
    getters: {},
    mutations: {
        updateAmount(state, value) {
            state.form.amount = value
        },
        updateCategory(state, value) {
            state.form.category = value
        },
        updateDate(state, value) {
            state.form.date = value
        },
        updateNote(state, value) {
            state.form.note = value
        }
    },
    actions: {}
}
