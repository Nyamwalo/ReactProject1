import Checklist from "./Checklist";
import styles from "./checklistItem.module.css";
export default function ChecklistItem({ item, lists, setLists }) {
  function handleDelete(item) {
    console.log("Delete button clicked for item", item);
    setLists(lists.filter((Checklist) => Checklist !== item));
  }
  function handleClick(name) {
    const newTopics = lists.map((Checklist) =>
      Checklist.name === name
        ? { ...Checklist, done: !Checklist.done }
        : Checklist
    );
    //console.log("Item input clicked", name);
    setLists(newTopics);
    console.log(lists);
  }
  const className = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            Delete
          </button>
        </span>
      </div>
      <hr className={styles.line}></hr>
    </div>
  );
}
