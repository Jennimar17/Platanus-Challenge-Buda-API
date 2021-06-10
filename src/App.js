import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./App.css";
import Image from "./img/crypto.png";
import Cryptos from './components/Cryptos';

function App() {
  const [coins, setCoins] = useState([]);
  

  useEffect(() => {
    axios.get("https://www.buda.com/api/v2/markets/BTC-CLP/ticker").then((res) => {
      setCoins(res.data);
      
    }).catch(error => console.log(error))
  }, []);
  console.log(coins)
  return (
    <div className="principal-container">
      <img src={Image} alt="crypto imagen" className="img-style" />
      <h1>API BUDA</h1>

      <Cryptos 
        resultado={coins}
      />
    </div>
  );
}

export default App;
