import { ADD_BLOCK, ADD_BLOCK_TX } from './constants';
import { getClient, chain as chainUtils } from '@bpanel/bpanel-utils';

export function getTX(txid, callback) {
  return async (dispatch, getState) => {
    const tx = await getClient().node.getTX(txid);
    dispatch({
      type: ADD_BLOCK_TX,
      payload: tx
    });
    if (callback) {
      callback(tx);
    }
  };
}

export function getBlock(hash, callback) {
  return async (dispatch, getState) => {
    try {
      const block = await chainUtils.getBlockInfo(hash);
      dispatch({
        type: ADD_BLOCK,
        payload: block
      });
      if (callback) {
        callback(block);
      }
    } catch (e) {
      console.error(`Could not retrieve block from hash '${hash}'. `, e);
      if (callback) {
        callback(undefined);
      }
    }
  };
}
