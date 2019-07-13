import { ITodo } from '../interfaces/interfaces';
import { ITodoAction, ADD_TODO } from '../actions/actions';

let id:number = 0;
const generateId = ():number => id++;

interface ITodoState {
    todos:Array<ITodo>
};

const defaultState : ITodoState = {
    todos: []

};

export default function todoReducer(state:ITodoState = defaultState, action:ITodoAction):ITodoState {
    switch(action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                    { id: generateId(), text: action.todo, completed: false, Priority : action.priority },
                    ...state.todos
                ], 
            });
        default:
            return state;
    }
}