import React, { useEffect, useState } from 'react';
import { UXTX } from '@bpanel/bpanel-utils';
import HexEditor from 'react-hex-editor';
import moment from 'moment';
import { Button } from "@bpanel/bpanel-ui";

const BlockDetail = ({
  isLoading,
  history,
  match,
  getTX,
  getBlock,
  block,
  transactions
}) => {
  const [error, setError] = useState(undefined);


  useEffect(
    () => {
      if (!isLoading && match.params.hash &&
        (!block || block.hash !== match.params.hash)
      ) {
        getBlock(match.params.hash, (block) => {
          if (!block) {
            setError(true);
          }
        });
      }
    },
    [isLoading, match.params.hash]
  );

  if (error)
    return (
      <div class="alert alert-warning" role="alert">
        <Button
            class="btn btn-warning"
            className="col-xl-3"
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
  );

  if (!block) return <p>loading...</p>

  return <div className="container">
    <div className="row" style={{marginBottom: '20px'}}>
      <h3 className='col-sm-8'>Block #{block.height.toLocaleString()}</h3>
      <p className='col-sm-4 text-right' style={{fontSize: '16px'}}><strong>{block.confirmations} Confirmations</strong></p>
      <h5 className='col-sm-12 text-center'>{block.hash}</h5>
    </div>
    <div className="row" style={{marginBottom: '50px'}}>
      <div className='col-sm-6'>
        <div>
          <span style={{fontSize: '12px'}}><strong>MINED: </strong></span> 
          <span style={{fontSize: '14px'}}>{moment.unix(block.time).format('MMMM Do YYYY, h:mm:ss a zz')}</span>
        </div>
        <div>
          <span style={{fontSize: '12px'}}><strong>SIZE: </strong></span> 
          <span style={{fontSize: '14px'}}>{block.size.toLocaleString()} bytes</span>
        </div>
        {block.nextblockhash && <div>
          <span style={{fontSize: '12px'}}><strong>NEXT BLOCK: </strong></span> 
          <a href={`/block/${block.nextblockhash}`}><span style={{fontSize: '14px'}}>{block.height + 1}</span></a>
        </div>}
        <div>
          <span style={{fontSize: '12px'}}><strong>PREVIOUS BLOCK: </strong></span> 
          <a href={`/block/${block.previousblockhash}`}><span style={{fontSize: '14px'}}>{block.height - 1}</span></a>
        </div>
      </div>
      <div className='col-sm-6'>
        <div>
          <span style={{fontSize: '12px'}}><strong># OF TRANSACTIONS: </strong></span> 
          <span style={{fontSize: '14px'}}>{block.tx.length}</span>
        </div>
        <div>
          <span style={{fontSize: '12px'}}><strong>DIFFICULTY: </strong></span> 
          <span style={{fontSize: '14px'}}>{block.difficulty.toFixed(2)}</span>
        </div>
        <div>
          <span style={{fontSize: '12px'}}><strong>VERSION: </strong></span> 
          <span style={{fontSize: '14px'}}>{block.version}</span>
        </div>
        <div>
          <span style={{fontSize: '12px'}}><strong>BITS: </strong></span> 
          <span style={{fontSize: '14px'}}>{block.bits}</span>
        </div>
      </div>
    </div>
    {JSON.stringify(block, null, 4)}
  </div>
}

export default BlockDetail;
