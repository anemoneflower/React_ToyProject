import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selected, setSelected] = useState("");
  const [coinIdx, setCoinIdx] = useState(0);
  const [myMoney, setMoney] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => { setCoins(json); setLoading(false) })
  }, [])
  const onWriteMoney = (event) => setMoney(event.target.value)
  const onSelect = (event) => { setSelected(event.target.value); setCoinIdx(event.target.selectedIndex) }
  return (
    <div className="App">
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> :
        <div>
          <input value={myMoney > 0 ? myMoney : ""} placeholder="How much do you have?" onChange={onWriteMoney}></input>
          <select value={selected} onChange={onSelect}>
            {coins.map((coin) => <option key={coin.id}>{coin.name}({coin.symbol}) : ${coin.quotes.USD.price}</option>)}
          </select>
          <hr />
          <h3>You can buy {myMoney / coins[coinIdx].quotes.USD.price} {coins[coinIdx].name}</h3>
        </div>
      }
    </div>
  );
}

export default App;
