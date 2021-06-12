import React from 'react';

const Currency = ({resultado}) => {
    
    const { markets } = resultado; 
    if(!markets) return null;

    console.log(markets[0].id)

    return ( 
        <div>
              <table className='currency-table__style'>
          <thead>
            <tr>
              <th>Mercado</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{markets[0].id}</td>      
            </tr>
            <tr>
              <td>{markets[1].id}</td>      
            </tr>
            <tr>
              <td>{markets[2].id}</td>      
            </tr>
            <tr>
              <td>{markets[3].id}</td>      
            </tr>
            <tr>
              <td>{markets[4].id}</td>      
            </tr>
            <tr>
              <td>{markets[5].id}</td>      
            </tr>
            <tr>
              <td>{markets[6].id}</td>      
            </tr>
            <tr>
              <td>{markets[7].id}</td>      
            </tr>
            <tr>
              <td>{markets[8].id}</td>      
            </tr>
            <tr>
              <td>{markets[9].id}</td>      
            </tr>
            
            
          </tbody>
        </table>
        
        </div>
     );
}
 
export default Currency;


