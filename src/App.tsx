import { useCallback, useEffect } from "react";
import "./App.css";
import { ITodos } from "./models/todos.interface";
import { getAllTodos } from "./api/todos";
import { useTodosContext } from "./hooks/useTodos";

function App() {
  const { todos, setTodos } = useTodosContext();

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

  return (
    <>
      <h1>{todos[2]?.title ?? "Todo title"}</h1>
    </>
  );
}

export default App;
