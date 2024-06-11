import Item from "./Items";
import styles from "./todolist.module.css";
export default function TodoList({ todos, setTodos }) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sortedTodos.map((item) => (
        <Item key={item.name} item={item} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}
