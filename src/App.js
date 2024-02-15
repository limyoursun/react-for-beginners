import Button from "./Button"
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>welcome back! to react</h1>
      <Button text={'하이연'} />
    </div>
  );
}

export default App;
