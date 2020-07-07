let flag = true
const eventLoop = {
  queue: {
    1: [],
    2: [],
    3: []
  },
  start () {
    if (flag) {
      this.multiQueue()
      flag = false
    }
  },
  multiQueue () {
    Object.keys(this.queue).forEach(key => {
      const queue = this.queue[key]
      let time = 1000
      switch(Number(key)) {
        case 1:
          time = 3000;
          break;
        case 2:
          time = 6000;
          break;
        case 3:
          time = 9000;
          break;
      }
      this.loop(queue, time)
    })
  },
  loop (queue, time) {
    setInterval(_ => {
      if(queue.length) {
        const callback = queue.shift()
        callback()
      }
    }, time)
    // setTimeout(this.loop.bind(this, queue, time), time)
  },
  add (cb, type) {
    this.queue[type].push(cb)
  }
}

eventLoop.multiQueue()




setTimeout(_ => {
  eventLoop.add(() => {
    console.log('类型1---新加一个1111')
  }, 1)
  eventLoop.add(() => {
    console.log('类型1---新加一个111----2222')
  }, 1)
}, 500)
// setTimeout(_ => {
//   eventLoop.add(() => {
//     console.log('类型2--新加一个1111')
//   }, 2)
//   eventLoop.add(() => {
//     console.log('类型2---新加一个111----2222')
//   }, 2)
// }, 300)


// setTimeout(_ => {
//   eventLoop.add(() => {
//     console.log(3)
//   }, 3)
// }, 2000)