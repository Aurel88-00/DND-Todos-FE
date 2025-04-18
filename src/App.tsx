import { useCallback, useEffect, useReducer, useState } from "react";
import "./App.css";
import { ITodos } from "./models/todos.interface";
import { getAllTodos } from "./api/todos";
import { useTodosContext } from "./hooks/useTodos";
import { countReducer } from "./Reducers/countReducers";



function App() {
  const { todos, setTodos} = useTodosContext();
  const [state, dispatch] = useReducer(countReducer, {count: 0});

  const getTodos = useCallback(async () => {
    try {
      const { data } = await getAllTodos();
      //@ts-expect-error Property 'data' does not exist on type '<ITodos[]>'.
      setTodos(data?.data satisfies ITodos[]);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  console.log(state.count , "count is");
  return (
    <>
      <h1>{todos[2]?.title ?? "Todo title"}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT"})}>Do something!</button>
      <div>{state.count} State</div>
    </>
  );
}

export default App;
