import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import style from "./todoitem.module.css";
import { useState } from "react";
import Swal from 'sweetalert2'

export default function TodoItem({ item, todos, setTodos }) {
  const [editedName, setEditedName] = useState(item.name);
  const [isEditing, setIsEditing] = useState(false);

  function handleDelete(item) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You are about to delete this item.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel',
      cancelButtonColor: '#d33',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        setTodos(todos.filter((todo) => todo !== item));
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Todo item deleted successfully.',
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          icon: 'info',
          title: 'Cancelled',
          text: 'Item deletion cancelled.',
        });
      }
    });

  }
  function handleClick() {
    setTodos(
      todos.map((todo) =>
        todo.name == item.name ? { ...todo, done: !todo.done } : todo
      )
    );
  }
  function handleEdit() {
    setTodos(
      todos.map((todo) =>
        todo === item ? { ...todo, name: editedName } : todo
      )
    );
    setIsEditing(false);
  }
  const className = item.done ? style.completed : "";
  return (
    <div className={style.item}>
      <div className={style.itemname}>
        {isEditing ? (
          <input
            type="text"
            value={editedName}
            className={style.editInput}
            onChange={(e) => setEditedName(e.target.value)}
            
            autoFocus
          />
        ) : (
          <span className={className} onClick={handleClick}>
            {item.name}
          </span>
        )}
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={style.deletebutton}
          >
            x
          </button>
          {isEditing ? (
            <button onClick={handleEdit} className={style.editbutton} >Save</button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className={style.editbutton}
            >
              <FontAwesomeIcon icon={faEdit} />
            </button>
          )}
        </span>
      </div>

      <hr className={style.line} />
    </div>
  );
}
