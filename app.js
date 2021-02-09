const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'The fungus',
            author: 'Poolsak.kru',
            age: 100
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks // using reverse the exclamation !
        }
    }
})

app.mount('#app')