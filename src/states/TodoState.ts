import {reducerWithInitialState} from 'typescript-fsa-reducers';
import {todoActions} from '../actions/TodoActions';

export interface ITodoState {
    text: string;
}

const initialState: ITodoState = {
    text: 'todo...',
};

export const todoReducer = reducerWithInitialState(initialState)
    .case(todoActions.addTodo, (state, text) => {
        return Object.assign({}, state, {text});
    });
