// Day 048 - Specs & Project Release
// Day 48: Vanilla JS Reactive Redux-like Store
function createStore(initialState) {
  let state = initialState;
  let listeners = [];

  return {
    getState: () => state,
    dispatch: (action) => {
      if (action.type === "ADD") state.count += action.payload;
      listeners.forEach(fn => fn(state));
    },
    subscribe: (fn) => {
      let active = true;
      listeners.push(fn);
      return () => {
        if (!active) return;
        active = false;
        listeners = listeners.filter(x => x !== fn);
      };
    }
  };
}

const store = createStore({ count: 10 });
const unsubscribe = store.subscribe(s => console.log("State updated count:", s.count));

store.dispatch({ type: "ADD", payload: 5 });
unsubscribe();