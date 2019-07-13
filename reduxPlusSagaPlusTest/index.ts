import { createStore } from 'redux';
import todoReducer from './reducers/reducer';
import addTodo from './actions/actions';

export const store = createStore(todoReducer);


showState();

console.log("Going to change the state")
store.dispatch(addTodo('READ',"low"))

showState();

console.log("Going to change the state again")
store.dispatch(addTodo('WRITE',"HIGH"))

showState();

function showState(){
    console.log("this is the current state");
    console.log(store.getState());
}