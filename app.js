const app = Vue.createApp({
    data() {
        return {
            title: "The fungus",
            age: 10
        }
    },
    methods: {
        changeTitle() {
            this.title = 'Mushroom'
        }
    }
})

app.mount('#app')