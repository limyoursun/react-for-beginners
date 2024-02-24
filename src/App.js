import Button from "./Button"
import styles from "./App.module.css";
import { useState , useEffect} from "react";

function App() {
  const [loading, setLoading] = useState(true)
  const [coins, setCoins] = useState() // 비어있는 array로 두어 초기에 undefined 되지 않게 해야함
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers").then((response) => response.json()
    ).then((json) => {
      setCoins(json) // api 가져오기
      setLoading(false) // loading message를 없애기
    })
  }, [])
  return (
  <div>
    <h1>the coins ({(coins.length)})</h1>
    {loading ? <strong>loading...</strong> : null}
    <ul>
      {coins && coins.map((coin) => <li key={coin.id}>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD</li>)}
      {/* coins.map을 coins && coins.map로 바꾼 이유!
      : true && expression은 항상 expression으로 실행되고, false && expression은 항상 false로 실행된다.
        따라서 조건이 참이면 && 바로 뒤의 요소가 출력에 나타난다. */}
    </ul>
  </div>
  )
}

export default App;
