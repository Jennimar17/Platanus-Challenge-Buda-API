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
              <td>{markets[0].id}</td>      
            </tr>
            <tr>
              <td>{markets[0].id}</td>      
            </tr>
            <tr>
              <td>{markets[0].id}</td>      
            </tr>
            <tr>
              <td>{markets[0].id}</td>      
            </tr>
            <tr>
              <td>{markets[0].id}</td>      
            </tr>
            <tr>
              <td>{markets[0].id}</td>      
            </tr>
            <tr>
              <td>{markets[0].id}</td>      
            </tr>
            <tr>
              <td>{markets[0].id}</td>      
            </tr>
            <tr>
              <td>{markets[0].id}</td>      
            </tr>
             

            <tr>
              <td>{markets[0].id}</td>
              
            </tr>
          </tbody>
        </table>
        
        </div>
     );
}
 
export default Currency;


