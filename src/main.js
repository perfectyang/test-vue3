// import { createVNode as _createVNode, createApp, render } from 'vue'
import App from './App.vue'
// import {computed, reactive, effect, toRefs, track, ref, trigger, stop, readonly} from '@vue/reactivity'
import { createApp, toDisplayString as _toDisplayString, createVNode as _createVNode, createTextVNode as _createTextVNode, renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode, withScopeId as _withScopeId, pushScopeId as _pushScopeId, popScopeId as _popScopeId } from "vue"
// <div>
//   <p class="name name2" >我是中文
//      {{id}}
//     <p>aaa</p>
//   </p>
//   <p>我是中文</p>
//   <p>我是中文</p>
//   <p @click="() => {}">我是中文</p>
//   <p>我是中文</p>
//   <p v-for="a in 10" :key="a" v-if="a">我是中2222文</p>
//   <p>{{name}}</p>
//   <p :class="[bool ? 'a' : 'b']">我是中文</p>
//   <p>我是中文</p>
// </div>

const _withId = /*#__PURE__*/_withScopeId("scope-id")

_pushScopeId("scope-id")
const _hoisted_1 = { class: "name name2" }
const _hoisted_2 = /*#__PURE__*/_createVNode("p", null, "aaa", -1 /* HOISTED */)
const _hoisted_3 = /*#__PURE__*/_createVNode("p", null, "我是中文", -1 /* HOISTED */)
const _hoisted_4 = /*#__PURE__*/_createVNode("p", null, "我是中文", -1 /* HOISTED */)
const _hoisted_5 = /*#__PURE__*/_createVNode("p", null, "我是中文", -1 /* HOISTED */)
const _hoisted_6 = /*#__PURE__*/_createVNode("p", null, "我是中文", -1 /* HOISTED */)
_popScopeId()

export const render = /*#__PURE__*/_withId(function render(ctx, cache) {
  let _cache = {

  }
  let _ctx = ctx || {
    id: 'perfectyang'
  }
  return (_openBlock(), _createBlock("div", null, [
    _createVNode("p", _hoisted_1, [
      _createTextVNode("我是中文 " + _toDisplayString(_ctx.id) + " ", 1 /* TEXT */),
      _hoisted_2
    ]),
    _hoisted_3,
    _hoisted_4,
    _createVNode("p", {
      onClick: _cache[1] || (_cache[1] = () => {})
    }, "我是中文"),
    _hoisted_5,
    (_ctx.a)
      ? (_openBlock(), _createBlock(_Fragment, { key: 0 }, _renderList(10, (a) => {
          return _createVNode("p", { key: a }, "我是中2222文")
        }), 64 /* STABLE_FRAGMENT */))
      : _createCommentVNode("v-if", true),
    _createVNode("p", null, _toDisplayString(_ctx.name), 1 /* TEXT */),
    _createVNode("p", {
      class: [_ctx.bool ? 'a' : 'b']
    }, "我是中文", 2 /* CLASS */),
    _hoisted_6
  ]))
})
console.log('vnode', render())
createApp(App).mount('#app')
