import { useState } from "react";
//removed (import ChecklistItem from "./ChecklistItem";) to Lists.jsx
import Form from "./Form";
import Lists from "./Lists";
import Footer from "./Footer";
export default function Checklist() {
  const [lists, setLists] = useState([]); /*brought from Form.jsx
  removed cont[list]
  removed const[lists]
  /moved function handlesubmit to form.jsx*/
  const completedTopics = lists.filter((Checklist) => Checklist.done).length;
  const totalTopics = lists.length;
  return (
    <div>
      <Form lists={lists} setLists={setLists} />
      {/*removed the lists.map to lists.jsx*/}
      <Lists lists={lists} setLists={setLists} />
      <Footer completedTopics={completedTopics} totalTopics={totalTopics} />
    </div>
  );
}
