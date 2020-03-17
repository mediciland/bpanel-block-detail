import React from 'react'
import moment from 'moment'
import { Link } from '@bpanel/bpanel-ui'

const BlockSummary = ({
  block
}) => {
  return <div id='block-summary'>
    <h4>Summary</h4>
    <div className='row' style={{ marginBottom: '20px' }}>
      <div className='col-sm-6'>
        <div className='space-between'>
          <span style={{ fontSize: '12px' }}><strong>MINED: </strong></span>
          <span style={{ fontSize: '14px' }}>{moment.unix(block.time).format('MMMM Do YYYY, h:mm:ss a zz')}</span>
        </div>
        <div className='space-between'>
          <span style={{ fontSize: '12px' }}><strong>SIZE: </strong></span>
          <span style={{ fontSize: '14px' }}>{block.size.toLocaleString()} bytes</span>
        </div>
        {block.nextblockhash && <div className='space-between'>
          <span style={{ fontSize: '12px' }}><strong>NEXT BLOCK: </strong></span>
          <Link to={`/block/${block.nextblockhash}`}><span style={{ fontSize: '14px' }}>{block.height + 1}</span></Link>
        </div>}
        <div className='space-between'>
          <span style={{ fontSize: '12px' }}><strong>PREVIOUS BLOCK: </strong></span>
          <Link to={`/block/${block.previousblockhash}`}><span style={{ fontSize: '14px' }}>{block.height - 1}</span></Link>
        </div>
      </div>
      <div className='col-sm-6'>
        <div className='space-between'>
          <span style={{ fontSize: '12px' }}><strong># OF TRANSACTIONS: </strong></span>
          <span style={{ fontSize: '14px' }}>{block.tx.length}</span>
        </div>
        <div className='space-between'>
          <span style={{ fontSize: '12px' }}><strong>DIFFICULTY: </strong></span>
          <span style={{ fontSize: '14px' }}>{block.difficulty.toFixed(2)}</span>
        </div>
        <div className='space-between'>
          <span style={{ fontSize: '12px' }}><strong>VERSION: </strong></span>
          <span style={{ fontSize: '14px' }}>{block.version}</span>
        </div>
        <div className='space-between'>
          <span style={{ fontSize: '12px' }}><strong>BITS: </strong></span>
          <span style={{ fontSize: '14px' }}>{block.bits}</span>
        </div>
      </div>
    </div>
  </div>
}

export default BlockSummary
