class Event {
    save = {};
    on(eventName, func) {
      this.save[eventName] = this.save[eventName] || [];
      this.save[eventName].push(func);
    }
    once(eventName, func) {
      this.save[eventName] = this.save[eventName] || [];
      let onceA = () => {
        func();
        this.off(eventName, onceA);
      };
      this.save[eventName].push(onceA);
    }
    emit(eventName, ...args) {
      let checkFunc = this.save[eventName];
      if (!checkFunc) return false;
      checkFunc.forEach((func) => {
        func(...args);
      });
    }
    rawListeners(eventName) {
      return this.save[eventName];
    }
    listenerCount(eventName) {
      let count = this.save[eventName];
      return count.length;
    }
    removeListener(eventName, func) {
      let check = this.save[eventName];
      if (!check) return false;
      for (let i = 0; i < check.length; i++) {
        if (check[i] === func) {
          check.splice(i, 1);
          break;
        }
      }
    }
    off(eventName, func) {
      this.removeListener(eventName, func);
    }
  }
  