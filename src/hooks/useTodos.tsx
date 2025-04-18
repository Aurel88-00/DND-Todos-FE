import { useContext } from "react";
import { TodosContext } from "../contexts/TodosCtx.context";

export const useTodosContext = () => {
    if(!TodosContext) {
        throw new Error('TodosContext must be used within TodosContextProvider');
    }
    return useContext(TodosContext);
}