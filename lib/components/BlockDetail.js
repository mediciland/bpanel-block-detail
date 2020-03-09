import React, { useEffect, useState } from 'react'
import TransactionsBlock from './TransactionsBlock'
import RawBlock from './RawBlock'
import BlockSummary from './BlockSummary'
import BlockDetailHeader from './BlockDetailHeader'
import BlockNotFound from './BlockNotFound'

import '../styles/stylesheet.css'

const BlockDetail = ({
  match,
  location,
  history,
  getBlock,
  getTX,
  isLoading,
  block,
  transactions
}) => {
  const [error, setError] = useState(undefined)

  useEffect(
    () => {
      if (!isLoading && match.params.hash &&
        (!block || block.hash !== match.params.hash)
      ) {
        getBlock && getBlock(match.params.hash, (block) => {
          if (!block) {
            setError(true)
          }
        })
      }
    },
    [isLoading, match.params.hash])

    useEffect(() => {
      if (block) {
        for (const tx of block.tx) {
          getTX(tx)
        }
      }
    }, [block])

  if (error) return <BlockNotFound block={block}/>
  if (!block) return <p>loading...</p>

  let blockHash = ''
  if (block) {
    blockHash = block.hash
  }

  return <div className='container'>
    <BlockDetailHeader block={block}/>
    <BlockSummary block={block}/>
    <RawBlock block={block}/>
    <TransactionsBlock
      transactions={transactions[blockHash]}
      getTX={getTX}
    />
  </div>
}

export default BlockDetail
