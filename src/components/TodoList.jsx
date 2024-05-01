import TodoItem from "./TodoItem";
import style from "./todolist.module.css";
import { v4 as uuidv4 } from "uuid";
export default function TodoList({ todos, setTodos }) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={style.list}>
      {sortedTodos.map((item) => (
        <TodoItem
          key={uuidv4()}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
