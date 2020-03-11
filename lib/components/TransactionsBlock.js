import React from 'react'
import TransactionSummary from './TransactionSummary'
import usePagination from '../hooks/usePagination'
import PaginationBox from './PaginationBox'

const TransactionsBlock = ({ transactions = {}, numOfTx}) => {
  const txHashes = Object.keys(transactions)

  const {
    page,
    itemsPerPage,
    handleChangePage,
    activeItems
  } = usePagination({ page: 0, items: txHashes, itemsPerPage: 5 })

  let paginate
  if (transactions && txHashes.length > itemsPerPage) {
    paginate = true
  }

  return <div className={'transaction-block-container word-break-all mb-4'}>
    <h4>Transactions</h4>
    <div className='transaction-block' id='tx-block'>
      {transactions && activeItems.map(txHash => {
        return <TransactionSummary
          key={txHash}
          tx={transactions[txHash]}
        />
      })}
    </div>
    {paginate && <PaginationBox
      itemsLength={numOfTx}
      page={page}
      itemsPerPage={itemsPerPage}
      handleChangePage={handleChangePage}
    />}
  </div>
}

export default TransactionsBlock
