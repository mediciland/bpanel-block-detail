import React from 'react'
import AddressValue from './AddressValue'

const InputsAndOutputs = ({
  inputs,
  outputs
}) => {
  return <div className='inputs-and-outputs row'>
    <div className={'col-6 io-container'}>
      <h6 className={'io-title'}>Inputs</h6>
      <Inputs inputs={inputs}/>
    </div>
    <div className={'col-6 io-container'}>
      <h6 className={'io-title'}>Outputs</h6>
    </div>
  </div>
}

const Inputs = ({ inputs }) => {
  return inputs && inputs.map(i => {
    return <div className={'address-value'}>
      <AddressValue
        key={i.address}
        address={i.address}
        coin={i.coin}
      />
    </div>
  })
}

const Outputs = ({ outputs }) => {
  return <div className={'outputs-container'}>

  </div>
}

export default InputsAndOutputs
