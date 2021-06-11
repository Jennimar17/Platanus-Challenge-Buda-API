import React from "react";

const Cryptos = ({ resultado }) => {
  const { ticker } = resultado;
  if (!ticker) return null;

  return (
    <div>
      
            {ticker.max_bid}
         
    </div>
  );
};

export default Cryptos;
