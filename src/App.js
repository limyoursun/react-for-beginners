import Button from "./Button"
import styles from "./App.module.css";
import { useState , useEffect} from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("")
  const onClick = () => setCounter(prev => prev + 1)
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log('i run only once!')
  }, []) // 모든 상황에서 함수 실행함
  useEffect(() => {
      console.log("i run when 'keyword' changes.");
  }, [keyword]) // 해당 변수가 변화될 때만 함수를 실행함
  useEffect(() => {
    console.log("i run when 'counter' changes.");
}, [counter])
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text" placeholder="Search here.."/>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
