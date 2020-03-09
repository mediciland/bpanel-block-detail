import React from 'react'
import TransactionSummary from './TransactionSummary'

const TransactionsBlock = ({ transactions }) => {
  return <div className={'transaction-block-container word-break-all mb-4'}>
    <h4>Transactions</h4>
    <div className='transaction-block' id='tx-block'>
      {transactions && Object.keys(transactions).map(txHash => {
        return <TransactionSummary
          key={txHash}
          tx={transactions[txHash]}
        />
      })}
    </div>
  </div>
}

export default TransactionsBlock
