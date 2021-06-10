import React from 'react';

const Cryptos = ({resultado}) => {
    
    const { ticker } = resultado; 
    if(!ticker) return null;

    console.log(ticker.max_bid)

    return ( 
        <div>
            <p>Cryptomoneda:{ticker.max_bid}</p>
        
        </div>
     );
}
 
export default Cryptos;


