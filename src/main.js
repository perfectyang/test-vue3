import { createVNode as _createVNode, createApp, render } from 'vue'
import App from './App.vue'
import './index.css'
import {computed, reactive, effect, toRefs, track, ref, trigger, stop, readonly} from '@vue/reactivity'

const vnode = _createVNode('div', {
  id: 'app'
}, [
  _createVNode('p', null, '在这要'),
 "在这要", 
  _createVNode('p', null, '')
]
)
console.log(vnode)
const state = reactive({
  foo: 1,
  bar: 2,
})
// ref.value
// computed.value
// watchEffect(() => {
// })
// watch()

const stateAsRefs = toRefs(state)

console.log(stateAsRefs.foo)
state.foo = 2;
console.log(stateAsRefs)
stateAsRefs.foo.value++
console.log(state.foo)
// const state = reactive({
//   age: 1,
//   count: 1,
//   list: ['a']
// })
// // watch(() => state.list, (value, oldValue) => {
// //   console.log(value, oldValue)
// // }, {
// //   immediate: true,
// //   deep: true
// // })
// const count = ref(0)
// const count2 = ref(1)
// watch([count,count2], ([count, count2], [prevCount, prevCount2]) => {
//   console.log(count, prevCount)
//   console.log(count2, prevCount2)
// }, {
//   immediate: true
// })

// // state.list.push(222)
// count.value = 2;
// count2.value = 4;

// // console.log(state)

// const myAge = computed({
//   get () {
//     return state.age
//   },
//   set(value) {
//     state.age += value
//   }
// })

// console.log(myAge.value)
// myAge.value = 20
// console.log(myAge.value)
// const myref = ref('myref')

// const newEffts = effect((value) => {
//   console.log(value)
//   console.log(myref.value)
//   // console.log(state.age)
//   // console.log(state.count)
// }, {
//   lazy: true
// })
// newEffts('在这果要要')
// console.log(state)
// myref.value = 2


// const myrefs = ref('a')
// console.log(myrefs.value)
// myrefs.value = 2;
// const copy = readonly(state)
// const count = computed(() => {
  // console.log('a')
  // return state.age + 1;
// })
// const ef = effect(() => {
//   console.log('change', copy.age)
// })
// state.age++;
// copy.age++;
// console.log('ef', ef)
// stop(ef)
// state.age = 2;
// // effect(() => {
// //   console.log('在这果', state.count)
// // })
// const obj = {
// }
// let a = 0
// Object.defineProperty(obj, 'age', {
//   get () {
//     track(obj, 'get', 'age')
//     return a;
//   },
//   set (val) {
//     trigger(obj, 'set', 'age', val, a)
//     a = val
//   }
// })
// // console.log('before', count.value)

// // console.log('after', count.value)
// obj.age = 2
// function myref(rawValue) {
//   let value = rawValue
//   let r = {
//     get value() {
//       console.log('获取')
//       return value
//     },
//     set value(newValue) {
//       if (newValue !== rawValue) {
//         console.log('设值')
//         rawValue = newValue
//         value = newValue
//       }
//     }
//   }
//   return r
// }
// const rs = myref('在这果')

// console.log(rs.value)
// rs.value = 1;
// rs.value = 2;
// console.log(rs.value)
createApp(App).mount('#app')
