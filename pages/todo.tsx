import { useMachine } from "@xstate/react";
import { todoMachine } from "@/utils/counterMachine";
import { useState } from "react";

const ToDos = () => {
  const [value, setValue] = useState('');
  const [state, send] = useMachine(todoMachine);


  const handleSubmit = () => {
    if (!!value) {
      send('ADD_TODO', { todo: value });
    }
  };

  return (
    <>
      <h1> To do Application with XState and React</h1>

      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button type="submit" onClick={handleSubmit}>Submit</button>
      <ul>
        {
          state.context.todos.map((todo, index) => (
            <li key={`${index}${todo}`}>
              {todo}
            </li>
          ))
        }
      </ul>
    </>

  );
};

export default ToDos;