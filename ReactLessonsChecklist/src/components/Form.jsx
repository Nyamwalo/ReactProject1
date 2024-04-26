//extracted <form...form> (line 3-10) from the Checklist component
import { useState } from "react";
import styles from "./Form.module.css";
export default function Form({ lists, setLists }) {
  //const [list, setList] = useStat; //taken from Checklist.jsx
  const [list, setList] = useState({ name: "", done: false });
  //const [lists, setLists] = useState([]); taken from Checklist.jsx then bak to Checklist.jsx
  function handleSubmit(e) {
    //removed (lines 3-8) from Checklist.jsx file
    e.preventDefault();
    setLists([...lists, list]);
    setList({ name: "", done: false });
    //console.log(lists);
  }
  return (
    <form className={styles.checklistform} onSubmit={handleSubmit}>
      <div className={styles.styledInputAdjust}>
        <input
          className={styles.styledInput}
          onChange={(e) => setList({ name: e.target.value, done: false })}
          value={list.name}
          type="text"
        />
        <button className={styles.styledButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
