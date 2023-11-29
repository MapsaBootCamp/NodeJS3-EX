function Emitter() {
    this.events = {};
}


Emitter.prototype.addListener = function (type, listener) {
    // check if the listener is a function and throw error if it is not
    if (typeof listener !== "function") {
        throw new Error("Listener must be a function!");
    }
    // create the event listener property (array) if it does not exist.
    this.events[type] = this.events[type] || [];
    // adds listners to the events array.
    this.events[type].push(listener);
};

Emitter.prototype.on = function (type, listener) {
    return this.addListener(type, listener);
};

Emitter.prototype.emit = function (type) {
    if (this.events[type]) {
        // checks if event is a property on Emitter
        this.events[type].forEach(function (listener) {
            // loop through that events array and invoke all the listeners inside it.
            listener();
        });
    }
};

Emitter.prototype.listenerCount = function (type) {
    let listnersCount = 0;
    let listeners = this.events[type] || [];
    listnersCount = listners.length;
    console.log("listeners listnersCount", listnersCount);
    return listnersCount;
};