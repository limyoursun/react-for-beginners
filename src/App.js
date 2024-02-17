import Button from "./Button"
import styles from "./App.module.css";
import { useState , useEffect} from "react";

function App() {
  const [value, setValue] = useState(false)
  const onClick = () => setValue(prev => !prev)
  // function Hello(){
  //   useEffect(() => {
  //     console.log("created! :)");
  //     return() => {console.log("destroyed :(")} // cleanUp function
  //   })
  //   return <h1>안녕하시와요</h1>;
  // }
  
  function Hello(){
    function byeFn(){
      console.log("destroyed :(") // cleanUp function
    }
    function hiFn(){
      console.log("created! :)");
      return byeFn;
    }
    useEffect(hiFn, [])
    return <h1>안녕하시와요</h1>;
  }
return(
  <div>
    {value ? <Hello/> : null }
    <button onClick={onClick}>{value ? "show" : "hide"}</button>
  </div>
)
}

export default App;
