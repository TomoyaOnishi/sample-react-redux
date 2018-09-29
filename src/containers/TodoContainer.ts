import {connect} from 'react-redux';
import {todoActions} from '../actions/TodoActions';
import {Action} from 'typescript-fsa';
import {IAppState} from '../Store';
import {TodoComponent} from '../components/TodoComponent';

export interface ITodoActions {
    addTodo: (v: string) => Action<string>;
}

function mapDispatchToProps(dispatch: any) {
    return {
        addTodo: (v: string) => dispatch(todoActions.addTodo(v)),
    };
}

function mapStateToProps(appState: IAppState) {
    return Object.assign({}, appState.todo);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoComponent);
