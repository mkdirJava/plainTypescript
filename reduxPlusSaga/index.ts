import { createStore,applyMiddleware } from 'redux';
import todoReducer from './reducers/reducer';
import addTodo from './actions/actions';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/sagas'
import incrementAsync from './sagas/delayedSaga'


// create the saga middleware
const sagaMiddleware = createSagaMiddleware()





export const store = createStore(
    todoReducer,
    applyMiddleware(sagaMiddleware)
    );

sagaMiddleware.run(rootSaga)
sagaMiddleware.run(incrementAsync)




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