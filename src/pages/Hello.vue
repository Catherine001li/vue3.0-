<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
export default {
  name: 'Hello',
  data() {
    return {
      count: 0,
      msg: 'this is hello'
    }
  }
}

</script>
