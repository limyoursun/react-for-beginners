import Button from "./Button"
import styles from "./App.module.css";
import { useState , useEffect} from "react";

function App() {
  const [value, setValue] = useState(false);
  const onClick = () => {
    setValue(prev => !prev)
  }
  function Hello(){
    return <h1>hi!</h1>
  }
  return(
    <div>
      {value ? <Hello/> : null}
      <button onClick={onClick}>{value ? 'show' : 'hide'}</button>
    </div>
  )
}

export default App;
