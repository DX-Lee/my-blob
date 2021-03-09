const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
function myPromise (excutor) {
  this.state = PENDING
  this.callbacks = []
  this.result = null

  let onFulfilled = (value) => {
    if (this.state !== PENDING) return
    this.state = FULFILLED
    this.result = value

  }
  let onRejected = (reason) => {
    if (this.state !== PENDING) return
    this.state = REJECTED
    this.result = reason
    
  }
  let flag = false
  let resolve = function (value) {
    if (flag) return
    flag = true
    resolvePromise(this, value, onFulfilled, onRejected)
  }

  let reject = function (reason) {
    if (flag) return
    flag = true
    onRejected(reason)
  }

  excutor(resolve, reject)
}
myPromise.prototype.then = function (onFulfilled, onRejected) {
  return new myPromise((resolve, reject) => {
    const callback = {onFulfilled, onRejected, resolve, reject}
    if (this.state === PENDING) {
      this.callbacks.push(callback)
    } else {
      // 异步
      setTimeout(() => handleCallback(callback), 0)
    }
  })
}

const transition = (promise, state, result) => {
  if (promise.state !== PENDING) return
  promise.state = state
  promise.result = result
  setTimeout(() => {
    handleCallbacks(promise.callbacks, state, result)
  }, 0)
}
function resolvePromise (promise, result, resolve, reject) {
  if (result === promise) {
    let reason = new TypeError('error')
    return reject(reason)
  }

  if (result instanceof myPromise) {
    myPromise.then(resolve, reject)
  }

  if (typeof result === 'object' && result.then) {
    try {
      let then = result.then
      return new myPromise(then.bind(result)).then(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }
  resolve(result)
}
const handleCallbacks = (callbacks, state, result) => {
  while(callbacks.length) {
    handleCallback(callbacks.shift(), state, result)
  }
}
// 处理回调函数
function handleCallback (callback, state, result) {
  const { onFulfilled, onRejected, resolve, reject } = callback
  if (state === FULFILLED) {
    typeof onFulfilled === 'function' ? resolve(onFulfilled(result)) : resolve(result)
  }
  if (state === REJECTED) {
    typeof onRejected === 'function' ? reject(onRejected(result)) : reject(result)
  }
}