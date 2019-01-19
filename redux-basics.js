const { createStore } = require("redux");

const initialState = {
  age: 25
};

function reducer(state = initialState, action) {
  const newState = { ...state };

  if (action.type === "ADD") {
    return (newState.age += action.payload);
  }

  if (action.type === "SUBTRACT") {
    return (newState.age -= 1);
  }

  return newState;
}

const store = createStore(reducer);

store.subscribe(() =>
  console.log("state changed" + JSON.stringify(store.getState()))
);

// console.log("state changed" + JSON.stringify(store.getState()));

store.dispatch({ type: "ADD", payload: 10 });

// console.log("state changed" + JSON.stringify(store.getState()));

store.dispatch({ type: "SUBTRACT" });

// console.log("state changed" + JSON.stringify(store.getState()));
