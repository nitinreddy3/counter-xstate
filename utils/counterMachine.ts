import { createMachine, assign } from 'xstate';

export const counterMachine = createMachine({
  context: {
    // Here, we will define the initial state of the machine
    count: 0,
    todo: []
  },
  on: {
    // Here we will define the events that will trigger the transitions.
    INCREMENT: {
      actions: assign({
        count: (context) => context.count + 1,
      }),
    },
    DECREMENT: {
      actions: assign({
        count: (context) => context.count - 1,
      })
    },
    ADD_TO_DO: {
      actions: assign({
        todos: (context, event) => [
          ...context.todos,
          event.todo,
        ]
      })
    }
  },
});