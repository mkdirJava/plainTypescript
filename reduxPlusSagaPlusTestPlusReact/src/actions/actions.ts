import { Action } from 'redux';

export interface ITodoAction extends Action<any> {
    todo:string;
    priority : string

}
export const ADD_TODO:string = 'ADD_TODO';

export default function addTodo(todo:string, priority: string):ITodoAction {
    return {
        type: ADD_TODO,
        todo: todo,
        priority : priority
        
    };
}