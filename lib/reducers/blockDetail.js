import { ADD_BLOCK, ADD_BLOCK_TX } from '../constants';

const initialState = {
  block: undefined,
  transactions: {},
  error: undefined
};

function blockDetailReducer(state = initialState, action) {
  const { type, payload } = action;
  let newState = { ...state };

  switch (type) {
    case ADD_BLOCK: {
      newState.block = payload;
      return newState;
    }

    case ADD_BLOCK_TX: {
      newState.transactions[payload.hash] = payload;
      return newState;
    }

    default:
      return state;
  }
}


export default blockDetailReducer;