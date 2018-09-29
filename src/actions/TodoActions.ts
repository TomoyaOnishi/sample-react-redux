import actionCreatorFactory from 'typescript-fsa';

const creator = actionCreatorFactory();

export const todoActions = {
    addTodo: creator<string>('ACTIONS_ADD_TODO'),
};
