import React from 'react'

const BlockDetailHeader = ({ block }) => {
  return <div className='row' style={{ marginBottom: '20px' }}>
    <h3 className='col-sm-8'>Block #{block.height}</h3>
    <p className='col-sm-4 text-right' style={{ fontSize: '16px' }}>
      <strong>{block.confirmations} Confirmations</strong>
    </p>
    <p className='col-sm-12 word-break-all'><b>Block Hash</b> {block.hash}</p>
  </div>
}

export default BlockDetailHeader
