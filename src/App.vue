<template>
  <!-- <div>{{state.name}}</div> -->
  <!-- <div>{{state.age}}</div> -->
  <div>age: {{age}}</div>
  <button @click="add">add</button>
  <div class="box">
    <div class="box_section">
      在这里{{myref.count}}
    </div>
  </div>
  <Son ref="mySon" />
</template>

<script>
import {nextTick, toRefs, reactive,onMounted, ref, computed, watchEffect} from 'vue'
import Son from './Son.vue'
export default {
  name: 'App',
  components: {
    Son 
  },
  setup () {
    const mySon = ref(null)
    const myref = ref({
      count: 11
    })
    const state = reactive({
      age: 1
    })
    const add = () => {
      state.age++;
      nextTick(_ => {
      })
    }
    onMounted(() => {
      console.log('----在这果要', mySon.value)
    })
    return {
      ...toRefs(state),
      myref,
      add,
      mySon
    }
  }
  // setup () {
  //   const state = reactive({
  //     name: 'aaa',
  //     age: 1
  //   })
  //   const count = ref(1)
  //   const myAge = computed(() => {
  //     console.log('ok')
  //     return count.value + 1;
  //     // return 1
  //   })
  //   console.log('手动', myAge.)
  //   // console.log(myAge)
  //   // console.log(state)
  //   watchEffect(() => {
  //     // console.log('开始有变了吗')
  //     // console.log(myAge.value)
  //   })
  //   function add() {
  //     state.age++;
  //   }
  //   return {
  //     state,
  //     myAge,
  //     add
  //   }
  // }
}
</script>

<style lang="less" scoped>
  .box {
    display: flex;
    .box_section {
      font-size: 18px;
      color: green;
    }
  }
</style>
