import React from "react";
import { ITodos } from "../../models/todos.interface";

interface TodoCardProps {
  todo: ITodos;
}
const TodoCard: React.FC<TodoCardProps> = ({ todo }) => {
  const { title, description, completed, order } = todo;
  const [isCompleted, setIsCompleted] = React.useState(completed);

  return (
    <div
      className={`todo-card ${completed ? "completed" : ""}`}
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        marginBottom: "16px",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h3>{title}</h3>

      <p>{description}</p>

      {order !== undefined && <small>Order: {order}</small>}

      <div style={{ marginTop: "16px" }}>
        <label>
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={() => setIsCompleted(!isCompleted)}
          />{" "}
          Completed
        </label>
      </div>
    </div>
  );
};

export default TodoCard;
