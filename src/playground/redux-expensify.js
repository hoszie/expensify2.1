import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ACTION GENERATOR

//Store Creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}));

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description: 'rent', amount: 100, createdAt: -1000 }));
const expenseTwo = store.dispatch(addExpense({description: 'coffee', amount: 300, createdAt: 1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expenses.id }))
// store.dispatch(editExpense(expenseTwo.expenses.id, { amount: 500 }))


// store.dispatch(setTextFilter('rent'))

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(1250))















// const user = {
//   name: 'Jen',
//   age: 24
// };

// console.log({
//   ...user,
//   location: 'Vancouver',
//   age: 29
// })


const demoState = {
  expenses: [{
    id: 'ewfon',
    description: 'Jan Rent',
    note: 'This was for rent at that shithole',
    amount: 100000,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
   }
};