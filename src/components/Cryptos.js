import React from 'react';

const Cryptos = ({resultado}) => {
    
    const { ticker } = resultado; 
    if(!ticker) return null;

    console.log(ticker.max_bid)

    return ( 
        <div>
              <table className='crypto-table__style'>
          <thead>
            <tr>
              
              <th>Valor Transacción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              
              <td>{ticker.max_bid}</td>
            </tr>

            <tr>
              
              <td>{ticker.max_bid}</td>
            </tr>
          </tbody>
        </table>
        
        </div>
     );
}
 
export default Cryptos;


