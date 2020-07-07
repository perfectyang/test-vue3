<template>
    <div ref="son">son component----{{name}}</div>
    <!-- <div ref="son2">son component----{{name}}</div> -->
</template>

<script>
import {ref, reactive} from 'vue'
export default {
  setup () {
    const name = ref(0)
    const state = reactive({
      count: 1
    })
    const son = ref(null)
    const son2 = ref(null)
    return {
      name,
      state,
      son,
      son2
    }
  }
}
</script>