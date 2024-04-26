import Checklist from "./components/Checklist";
import Title from "./components/Title";
import "./App.css";
/*import InlineComponent from "./components/InlineComponent";
import Outline from "./components/Outline";*/
function App() {
  return (
    <div className="App">
      <Title></Title>
      <Checklist />
      {/*<InlineComponent></InlineComponent>
      <Outline></Outline>*/}
    </div>
  );
}

export default App;
