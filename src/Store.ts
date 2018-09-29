import {createStore, combineReducers} from 'redux';
import {todoReducer, ITodoState} from './states/TodoState';

export interface IAppState {
    todo: ITodoState,
}

const store = createStore(
    combineReducers<IAppState>({
        todo: todoReducer
    })
);

export default store;