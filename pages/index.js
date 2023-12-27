import { useState, useCallback } from "react";
import styles from "./index.module.css";

const TodoPage = () => {
  const [addToDoValue, setAddToDoValue] = useState("");

  const onSunContainerClick = useCallback(() => {
    // Please sync "Header" to the project
  }, []);

  return (
    <div className={styles.todopage}>
      <div className={styles.todolistcontainer}>
        <div className={styles.header}>
          <div className={styles.todo}>
            <h1 className={styles.toDoList}>To Do List</h1>
            <h2 className={styles.justDoIt}>just do it</h2>
          </div>
          <div className={styles.sun} onClick={onSunContainerClick}>
            <img className={styles.sun1Icon} alt="" src="/sun-1@2x.png" />
          </div>
        </div>
        <div className={styles.divider}>
          <div className={styles.dividerChild} />
        </div>
        <div className={styles.incomplete}>
          <img
            className={styles.iconCircleX}
            alt=""
            src="/-icon-circle-x@2x.png"
          />
          <div className={styles.incompleteTask}>InComplete Task</div>
          <div className={styles.iconTrash}>
            <img className={styles.vectorIcon} alt="" src="/vector@2x.png" />
          </div>
        </div>
        <div className={styles.incomplete}>
          <img
            className={styles.iconCircleCheck}
            alt=""
            src="/-icon-circle-check@2x.png"
          />
          <div className={styles.completeTask}>Complete Task</div>
          <div className={styles.iconTrash1}>
            <img className={styles.vectorIcon1} alt="" src="/vector@2x.png" />
          </div>
        </div>
        <div className={styles.divider}>
          <div className={styles.dividerChild} />
        </div>
        <input
          className={styles.addToDo}
          placeholder="Add to do..."
          type="text"
          value={addToDoValue}
          onChange={(event) => setAddToDoValue(event.target.value)}
        />
      </div>
    </div>
  );
};

export default TodoPage;
