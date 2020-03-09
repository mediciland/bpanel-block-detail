import React from 'react'
import { Button } from '@bpanel/bpanel-ui'

const BlockNotFound = () => {
  return <div className='alert alert-warning' role='alert'>
    <Button
      class='btn btn-warning'
      className='col-xl-3'
      onClick={() => window.history.back()}
    >
      Go Back
    </Button>
    <br/>
    <br/>
    <p> Block Not Found! </p>
    <p> Please check the block hash and try again. </p>
    <p>Requested URL: /block/{match.params.hash} </p>
  </div>
}

export default BlockNotFound
