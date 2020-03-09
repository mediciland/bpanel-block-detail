import React from 'react'
import AddressValue from './AddressValue'

const TXPreview = ({input}) => {
  return <div className='card' style={{color: '#000', marginTop: '5px', width: '100%'}}>
    <AddressValue
      address={input.address}
      coin={input.coin}
    />
  </div>
}

export default TXPreview
