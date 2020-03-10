import React from 'react'
import copyToClipboard from '../helpers/copyToClipboard'

const RawBlock = ({ block }) => {
  const stringifiedBlock = JSON.stringify(block, null, 2)
  return <div>
    <h4>Block [Raw]</h4>
    <pre className={'code-block'}><code onClick={copyToClipboard(stringifiedBlock)}>{stringifiedBlock}</code>
    </pre>
  </div>
}

export default RawBlock
