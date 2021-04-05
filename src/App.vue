<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <!-- <Hello></Hello> -->
  <List></List>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Hello from './pages/Hello.vue'
import List from './pages/List.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Hello,
    List
  }
}
</script>
