import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Image from "./img/crypto.png";
import Cryptos from "./components/Cryptos";
import Api from "./components/Api";

function App() {
  const [markets] = useState([]);
  const [btcClp, setBtcClp] = useState([]);
  const [btcCop, setBtcCop] = useState([]);
  const [ethClp, setEthClp] = useState([]);

 
  const [ethBtc, setEthBtc] = useState([]);
  const [btcPen, setBtcPen] = useState([]);
  const [ethPen, setEthPen] = useState([]);
  const [ethCop, setEthCop] = useState([]);
  const [bchBtc, setbchBtc] = useState([]);
  const [bchClp, setBchClp] = useState([]);
  const [bchCop, setBchCop] = useState([]);

  
  

  useEffect(() => {
    axios
      .get(`https://www.buda.com/api/v2/markets/BTC-CLP/ticker?last_timestamp`)
      .then((res) => {
        setBtcClp(res.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://www.buda.com/api/v2/markets/BTC-COP/ticker?last_timestamp`)
      .then((res) => {
        setBtcCop(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get(`https://www.buda.com/api/v2/markets/ETH-CLP/ticker?last_timestamp`)
      .then((res) => {
        setEthClp(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get(`https://www.buda.com/api/v2/markets/ETH-BTC/ticker?last_timestamp`)
      .then((res) => {
        setEthBtc(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get(`https://www.buda.com/api/v2/markets/BTC-PEN/ticker?last_timestamp`)
      .then((res) => {
        setBtcPen(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get(`https://www.buda.com/api/v2/markets/ETH-PEN/ticker?last_timestamp`)
      .then((res) => {
        setEthPen(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get(`https://www.buda.com/api/v2/markets/ETH-COP/ticker?last_timestamp`)
      .then((res) => {
        setEthCop(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get(`https://www.buda.com/api/v2/markets/BCH-BTC/ticker?last_timestamp`)
      .then((res) => {
        setbchBtc(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get(`https://www.buda.com/api/v2/markets/BCH-CLP/ticker?last_timestamp`)
      .then((res) => {
        setBchClp(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get(`https://www.buda.com/api/v2/markets/BCH-COP/ticker?last_timestamp`)
      .then((res) => {
        setBchCop(res.data);
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
              <Cryptos resultado={btcClp} />
            </td>
          </tr>
          <tr>
            <td>
            <Cryptos resultado={btcCop} />
            </td>
          </tr>
          <tr>
            <td>
            <Cryptos resultado={ethClp} />
            </td>
          </tr>
          <tr>
            <td>
            <Cryptos resultado={ethBtc} />
            </td>
          </tr>
          <tr>
            <td>
            <Cryptos resultado={btcPen} />
            </td>
          </tr>
          <tr>
            <td>
            <Cryptos resultado={ethPen} />
            </td>
          </tr>
          <tr>
            <td>
            <Cryptos resultado={ethCop} />
            </td>
          </tr>
          <tr>
            <td>
            <Cryptos resultado={bchBtc} />
            </td>
          </tr>
          <tr>
            <td>
            <Cryptos resultado={bchClp} />
            </td>
          </tr>
          <tr>
            <td>
            <Cryptos resultado={bchCop} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
