const { act } = require("react-dom/test-utils");

let state = 0;

// Reducer
const updateState = (state, action) => {
  if (action === "PLUS") {
    return {
      ...state,
      count: state.count + action.amount,
    };
  } else if (action === "MINUS") {
    return {
      ...state,
      count: state.state - action.amount,
    };
  } else {
    return state;
  }
};

class Store {
  constructor(updateState, state) {
    this._updateState = updateState;
    this._state = state;
    this._callBacks = [];
  }

  getState = () => this._state;

  dispatch = (action) => {
    this._state = this._updateState(this._state, action);
    this._callBacks.forEach((cb) => cb());
  };

  subscribe = (callback) => {
    this._callBacks.push(callback);
  };
}

const initialState = {
  count: 0,
  name: "Tatushka",
};

const store = new Store(updateState, initialState);
const { dispatch } = store;
store.subscribe(() => console.log("Subscribe ", store.getState()));

const bindActionCreator = (creator, dispatch) => (...args) => {
  dispatch(creator(...args));
};

//Action
const plusAction = (amount) => ({ type: "PLUS", amount: 5 });
const minusAction = (amount) => ({ type: "MINUS", amount: 3 });

const plus = bindActionCreator(plusAction, dispatch);
const minus = bindActionCreator(minusAction, dispatch);

plus(7)
minus(4)

// dispatch(plusAction(6));

// dispatch(minusAction(3));

dispatch({});
