import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {todoActions} from '../actions/TodoActions';
import {Action} from 'typescript-fsa';
import {IAppState} from '../Store';
import {ITodoState} from '../states/TodoState';
import {TodoComponent} from '../components/TodoComponent';

export interface ITodoActions {
    addTodo: (v: string) => Action<string>;
}

function mapDispatchToProps(dispatch: Dispatch<Action<any>>): ITodoActions {
    return {
        addTodo: (v: string) => dispatch(todoActions.addTodo(v)),
    };
}

function mapStateToProps(appState: IAppState): ITodoState {
    return Object.assign({}, appState.todo);
}

export default connect<ITodoState, ITodoActions>(mapStateToProps, mapDispatchToProps)(TodoComponent);
