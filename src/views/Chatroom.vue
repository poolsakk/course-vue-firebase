<template>
  <div class="container">
    <Navbar/>
    <NewChatForm />
  </div>
  <p>Chatroom</p>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import getUser from '../composables/getUser'
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import NewChatForm from '../components/NewChatForm.vue'

export default {
  components: { Navbar, NewChatForm },
  setup() {
    const { user } = getUser()
    const router = useRouter()

    watch(user, () => {
      if(!user.value) {
        router.push({ name: 'Welcome' })
      }
    })
  }
}
</script>

<style>

</style>