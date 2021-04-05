<template>
  <h1>{{ state.msg }}</h1>
  <button @click="countChange">count is: {{ state.count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
// 有兄弟节点
// reactive对象不能是数字或者字符串会进行告警
import { reactive } from 'vue'
export default {
  setup () {
    const state = reactive({
      msg: 'this is a setup',
      count: 0,
    })

    const countChange = () => {
      state.count++
    }
    return {
      state,
      countChange,
    }
  }
}

</script>
