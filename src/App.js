import './App.css';
import {useState} from "react";
import VarListComponent from "./components/var-list";
import InputListComponent from "./components/input-list";
import OutputComponent from "./components/output";

function App() {

    const varInitialObject = {
        "california": "los_angeles",
        "netherlands": "amsterdam",
        "germany": "berlin",
        "france": "paris",
        "japan": "tokyo",
    };

    const inputInitialObject = {
        "location1": "los_angeles",
        "location2": "$germany",
        "location4": "rotterdam",
        "location8": "$france",
        "location9": "$netherlands",
    };

  const [varList, setVarList] = useState([]);
  const [inputList, setInputList] = useState([]);

  return (
    <>
      <VarListComponent initialVars={varInitialObject} onUpdate={setVarList} />
      <br/>
      <InputListComponent initialInputs={inputInitialObject} onUpdate={setInputList} />
      <br/>
      <OutputComponent varList={varList} inputList={inputList}/>
    </>
  );
}

export default App;
