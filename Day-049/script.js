// Day 49: Event-driven Microservices Simulation
console.log("Day 49: Event-driven Microservices Simulation");

const eventBroker = {
    events: {},
    on(eventName, listener) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(listener);
    },
    emit(eventName, data) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(listener => {
                listener(data);
            });
        }
    }
};

const dbService = {
    users: [{ id: 1, name: 'Alice', email: 'alice@example.com' }],
    saveUser(user) {
        this.users.push(user);
        console.log('[DB] User saved:', user.name);
    }
};

eventBroker.on('userRegistered', user => {
  dbService.saveUser(user);
});

eventBroker.emit('userRegistered', { id: 2, name: 'Bob', email: 'bob@example.com' });