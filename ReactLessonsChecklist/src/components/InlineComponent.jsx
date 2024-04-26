import styles from "./inline.module.css";
//import "../css/styling.css";
//const headline = { color: "violet", fontSize: "150 px" };
export default function InlineComponent() {
  return (
    <div>
      <h1 className={styles.header}>Style me</h1>
      {/*<h1 className="inline-header">Style me</h1>*/}
      {/*<h1 style={headline}>Style me</h1>*/}
    </div>
  );
}
