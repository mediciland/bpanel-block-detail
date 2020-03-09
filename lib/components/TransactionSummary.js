import React from 'react'
import moment from 'moment'
import TXPreview from './TXPreview'

const BUFFER = 'Buffer'

function getOutputs (outputs) {
  let total = 0
  for (const o of outputs) {
    total += o.value
  }
  // convert satoshis
  return total / 1e8
}

const TransactionSummary = ({ tx }) => {
  const { floData } = tx
  let floDataString = ''
  if (floData.type === BUFFER) {
    floDataString = Buffer.from(floData.data).toString()
  }
  return <div className={'transaction-summary container hover-white border-bottom'}>
    <div
      className={'transaction-header row no-gutters py-2'}
      id={'transaction-header'}
    >
      <a
        href={`tx/${tx.hash}`}
        id={'transaction-hash-link'}
        className={'col-12 col-xl-8'}
      >
        {tx.hash}
      </a>
      <span
        className={'col-12 col-xl-4 text-right'}
      >
        mined {moment(tx.mtime).format('MMM Do YYYY, h:mm:ss a')}
      </span>
    </div>
    <div className={'row no-gutters my-2'}>
      {tx && tx.inputs.map(i => {
        return <TXPreview input={i} key={i.prevout.hash}/>
      })}
    </div>
    <div className={'row justify-content-end no-gutters mt-3'}>
      <div>
      <span className={'flo-data-badge mr-3'}>
        {tx.confirmations} Confirmations
      </span>
        <span className={'flo-data-badge'}>
        {getOutputs(tx.outputs)} FLO
      </span>
      </div>
    </div>
    <div className={'flo-data-container row no-gutters py-2'} id={'flow-data-container'}>
      <p className={'m-0'}><b>floData:</b> {floDataString}</p>
    </div>
  </div>
}

export default TransactionSummary
