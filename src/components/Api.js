import React, { useEffect, useState } from "react";
import axios from "axios";
import Currency from './Currency';

function Api() {

    const [markets, setMarkets] = useState([]);
  
    useEffect(() => {
  
      
      axios
        .get(`https://www.buda.com/api/v2/markets`)
        .then((res) => {
          setMarkets(res.data);
        })
        .catch((error) => console.log(error));
  
        
    }, []);
  
  
    return (
      <div className="principal-container">
          <Currency resultado={markets} />
        
      </div>
    );
  }
  
  export default Api;