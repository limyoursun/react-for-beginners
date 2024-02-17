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
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} placeholder="write your to do" type="text"/>
        <button>Add To Do</button>
      </form>
      <hr/>
      <ul>
          {toDos.map((item, index) => 
          <li key={index}>{item}</li>
        )}
        {/* key error가 나기 때문에 고유의 값인 index와 key={index}를 추가함 */}
      </ul>
      {/* map 함수가 하는 일은 아래와 같다
      ['hi', 'hello', 'bye'].map(() => ":)")
      => [':)', ':)', ':)']

      ['hi', 'hello', 'bye'].map((item) => item.toUpperCase)
      => ['HI', 'HELLO', 'BYE'] */}
    </div>
  )
}

export default App;
