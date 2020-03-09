import React from 'react';
import { Currency } from '@bpanel/bpanel-utils';
import HexEditor from 'react-hex-editor';
import { Buffer } from 'buffer/';

const UNKNOWN = 'No Inputs (Newly Generated Coins)';

const AddressValue = ({ address, script, coin = {} }) => {
  let amount;
  if (coin.value) {
    amount = new Currency('flo', coin.value).toCoins();
  }

  let scriptType;
  if (!amount && script && script.substr(0, 4) === '6a24') {
    // scriptType = "OP_RETURN " + script.substr(5,script.length)
    scriptType = (
      <div>
        OP_RETURN
        <HexEditor
          height={111}
          columns={12}
          data={script.match(/.{1,2}/g)}
          showAscii
          readOnly
          autoFocus={false}
        />
      </div>
    );
  }

  const _address = address || coin.address
  let addressLink = _address || scriptType || UNKNOWN
  if (_address) {
    addressLink = <a href={`/address/${_address}`} className={'x-link'}>
      {addressLink}
    </a>
  }

  return (
    <div className="row no-gutters">
      <span
        className={amount ? 'col-sm-8' : 'col-sm-12' + ' address-info'}
        style={{ fontSize: '12px' }}
      >
        {addressLink}
      </span>
      <span
        className={amount ? 'col-sm-4 text-right' : 'col-sm-4-hidden'}
        style={{ fontSize: '14px' }}
      >
        {amount} {amount ? 'FLO' : ''}
      </span>
    </div>
  );
};

export default AddressValue;
