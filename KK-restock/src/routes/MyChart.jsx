import React from 'react'
import LogoBlack from '../components/LogoBlack';

 function MyChart() {
  return (
    <div>
        < LogoBlack />
        <div className="font-bold">
            <h1>My Cart</h1>
        </div>
        <div className='flex'>
            <p>Please checkout Items before they run out of stock.</p>
            <p>2,000,000 UGX</p>
        </div>
    </div>
  )
}


export default MyChart;