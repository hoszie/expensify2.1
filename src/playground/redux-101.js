import { createStore } from 'redux';

// const add = ({ a, b }, c) => {
//   return a + b + c;
// }

// console.log(add({ a: 1, b: 12 }));



////////////////////////////////////////////////////

/////////ACTION GENERATOR////////////////////

// const incrementCount = (payload = {}) => ({
//   type: 'INCREMENT',
//   incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// });

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});
////////////////////////////////////////////////////

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const setCount = ({ count }) => ({
  type: 'SET',
  count
})

const resetCount = () => ({
  type: 'RESET'
})

//Reducers
// Reducers are pure functions. Output is only determined by it's input. ie the state and the action.
//Never change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }; 
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
      case 'SET':
        return {
          count: action.count
        }
    case 'RESET':
      return {
        count: 0
      }
    default:
      return state;    
  }
}

/////////////////////REDUCER///////////////////
const store = createStore(countReducer);  

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 50 }))

store.dispatch(incrementCount())

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(resetCount());

store.dispatch(setCount({ count: 101 }));

// store.dispatch({
//   type: 'SET',
//   count: 101
// });