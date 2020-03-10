import React from 'react'
import copyToClipboard from '../helpers/copyToClipboard'

const BlockDetailHeader = ({ block }) => {
  return <div className='row' style={{ marginBottom: '20px' }}>
    <h3 className='col-sm-8'>Block #{block.height}</h3>
    <p className='col-sm-4 text-right' style={{ fontSize: '16px' }}>
      <strong>{block.confirmations} Confirmations</strong>
    </p>
    <p
      onClick={copyToClipboard(block.hash)}
      className='col-sm-12 word-break-all'>
      <b>Hash </b>
      <span className={'cursor-copy font-size-primary'}>
        {block.hash}
      </span>
    </p>
  </div>
}

export default BlockDetailHeader
