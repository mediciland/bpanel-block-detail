import React from 'react'

const RawBlock = ({ block }) => {
  return <div>
    <h4>Block [Raw]</h4>
    <pre
      style={{
        backgroundColor: '#222B35',
        color: 'white',
        maxHeight: '120px',
        overflow: 'auto'
      }}
    ><code>{JSON.stringify(block, null, 2)}</code>
    </pre>
  </div>
}

export default RawBlock
