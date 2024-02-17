import Button from "./Button"
import styles from "./App.module.css";
import { useState , useEffect} from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return ;
    }
    setToDo("");
    setToDos(currentArray => [toDo, ...currentArray])
  }
  console.log(toDos);
  return(
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} placeholder="write your to do" type="text"/>
        <button>Add To Do</button>
      </form>
    </div>
  )
}

export default App;
