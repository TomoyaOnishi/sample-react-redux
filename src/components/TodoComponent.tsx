import * as React from 'react';
import {ITodoActions} from '../containers/TodoContainer';
import {ITodoState} from '../states/TodoState';

type TodoProps = ITodoState & ITodoActions;

export const TodoComponent: React.SFC<TodoProps> = (props: TodoProps) => {
    return (
        <div>
            <h3>{props.text}</h3>
        </div>
    );
};
