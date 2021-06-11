import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Image from "./img/crypto.png";
import Cryptos from "./components/Cryptos";
import Api from './components/Api';

function App() {
  const [coins, setCoins] = useState([]);
  const [markets, setMarkets] = useState([]);

  useEffect(() => {

    
    axios
      .get(`https://www.buda.com/api/v2/markets/BTC-CLP/ticker?last_timestamp`)
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));

      
  }, []);
  console.log(coins);


  return (
    <div>
      <h1 className="title">API BUDA</h1>
      <img src={Image} alt="crypto imagen" className="img-style" />

      <div>
        

        <Api resultado={markets} />
        <Cryptos resultado={coins} />
        
      </div>
    </div>
  );
}

export default App;
