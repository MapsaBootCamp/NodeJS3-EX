class customEventEmitter{

    constructor(){
        this.storage = {};
    }

    addListener(eventName, cb){
        if (typeof eventName !== 'string') throw new Error('an Event name must be of type: string!');
        if (typeof cb !== 'function') throw new Error('a callback\'s type must be function!');

        this.storage[eventName] = [];
        this.storage[eventName].push(cb);
    }

    on(eventName, cb){
        this.addListener(eventName, cb);
    }

    removeListener(eventName, cb){
        if (!this.storage[eventName]) throw new Error('such Event doesn\'t exist!');
        if (typeof eventName !== 'string') throw new Error('an Event name must be of type: string!');
        if (typeof cb !== 'function') throw new Error('a callback\'s type must be function!');
        
        for (let i = 0 ; i < this.storage[eventName].length ; i++){
            if (this.storage[eventName][i] === cb){
                this.storage[eventName].splice(i, 1);
                break;
            }
        }
    }

    off(eventName, cb){
        this.removeListener(eventName, cb);
    }

    emit(eventName, ...args){
        this.storage[eventName].forEach((functions) => {
            functions(...args);
        })
    }

    once(eventName, cb){
        this.addListener(eventName, cb);
        const removerFunc = () => {
            cb();
            this.off(eventName, removerFunc);
        }
        this.storage[eventName].push(removerFunc);
    }

    listenerCount(eventName){
        return this.storage[eventName].length;
    }

    rawListeners(eventName){
        return this.storage[eventName];
    }
}

const event1 = new customEventEmitter();
event1.on('sayHello', function(name){
    console.log('salam', name);
})
event1.emit('sayHello', 'Hasan');
event1.emit('sayHello', 'Heshmat');
event1.emit('sayHello', 'Gholam Pashe');
event1.once('sayBye', (name) => {console.log('bye', name)});
event1.emit('sayBye', 'gholam');

// chera Once() inghad daqoone ???????????