import style from "./footer.module.css";

export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className={style.footer}>
      <span className={style.item}>Completed Todos :{completedTodos}</span>
      <span className={style.item}>Completed Todos :{totalTodos}</span>
    </div>
  );
}
