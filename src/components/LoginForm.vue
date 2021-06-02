<template>
  <form @submit.prevent="handleSubmit">
      <input type="text" required placeholder="email" v-model="email">
      <input type="password" required placeholder="password" v-model="password">
      <button>Log in</button>
  </form>
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        // refs
        const email = ref('')
        const password = ref('')

        const handleSubmit = () => {
            
        }

        return { email, password, handleSubmit }
    }
}
</script>

<style>

</style>