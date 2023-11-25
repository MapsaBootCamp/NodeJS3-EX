class myEventEmitter {
  constructor() {
    this._events = []
  }

  on(name, callback) {
    if (!this._events[name]) {
      this._events[name] = []
    }
    this._events[name].push(callback)
  }
  removeListener(name, listenerToRemove) {
    if (!this._events[name]) {
      throw new Error(
        `Cant't remove a listener! Event "${name}"dosen't exist...`,
      )
    }
    const filterListeners = (listener) => {
      listener !== listenerToRemove

      this._events[name] = this._events[name].filter(filterListeners)
    }
  }
}
const customEvent = new myEventEmitter()
customEvent.on("sayHello", () => {
  console.log("Hello")
})

customEvent.emit("sayHello")
