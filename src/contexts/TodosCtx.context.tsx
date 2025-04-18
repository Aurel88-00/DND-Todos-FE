import React, { createContext, useState } from "react";
import { ITodos } from "../models/todos.interface";

// Define the shape of your context
type TodosContextType = {
  todos: ITodos[];
  setTodos: React.Dispatch<React.SetStateAction<ITodos[]>>;
};

// Create the context with initial values
export const TodosContext = createContext<TodosContextType>({
  todos: [],
  setTodos: () => {},
});


// Provider component to wrap your app with
export const TodosContextProvider = ({ children } : {children: React.ReactNode}) => {
  const [todos, setTodos] = useState<ITodos[]>([]);


  // Wrap the children with the context provider, passing state and functions
  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  );
};
