import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Image from "./img/crypto.png";
import Cryptos from "./components/Cryptos";
import BtcClp from "./components/BtcClp";
import Api from "./components/Api";

function App() {
  const [coins, setCoins] = useState([]);
  const [markets] = useState([]);
  const [name, setName] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.buda.com/api/v2/markets/BTC-CLP/ticker?last_timestamp`)
      .then((res) => {
        setName(res.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://www.buda.com/api/v2/markets/BTC-COP/ticker?last_timestamp`)
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

 


  return (
    <div>
      <h1 className="title">API BUDA</h1>
      <img src={Image} alt="crypto imagen" className="img-style" />

      <div>
        <Api resultado={markets} />
      </div>

      <table className="transactions-table__style">
        <thead>
          <tr>
            <th>Transacciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Cryptos resultado={name} />
            </td>
          </tr>
          <tr>
            <td>
            <Cryptos resultado={coins} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
