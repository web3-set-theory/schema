import { SmartContractSet } from '../src';
import SetSmartContractERC20 from './schemas/set.smartcontract.ERC20.json';

describe('types', () => {
  it('matches example schema', () => {
    const set: SmartContractSet = SetSmartContractERC20;
    expect(set.name).toEqual('ERC20 Smart Contract Set Example');
  });
});
