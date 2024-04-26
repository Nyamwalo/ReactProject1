import ChecklistItem from "./ChecklistItem"; //brought from Checklist.jsx
import styles from "./checklistTopics.module.css";
export default function Lists({ lists, setLists }) {
  const sortedList = lists
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.subtopicItem}>
      {sortedList.map(
        (
          item //Replaced{lists.map((item) => ( [sorted entries]
        ) => (
          <ChecklistItem
            key={item.name}
            item={item}
            lists={lists}
            setLists={setLists}
          />
        )
      )}
    </div>
  );
}
