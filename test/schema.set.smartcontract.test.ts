import Ajv from 'ajv';
import { SchemaSetSmartContract } from '../src/schemas';
import addFormats from 'ajv-formats';

import SetERC20 from './schemas/set.smartcontract.ERC20.json';
import SetERC20Minimal from './schemas/set.smartcontract.ERC20Minimal.json';

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);
const validator = ajv.compile(SchemaSetSmartContract);


describe('schema', () => {
  it('is valid', () => {
    expect(ajv.validateSchema(SchemaSetSmartContract)).toEqual(true);
  });

  function checkSchema(schema: any, valid: boolean): void {
    const isValid = validator(schema);
    console.log(validator.errors)
    // expect(validator.errors).toMatchSnapshot();
    expect(isValid).toEqual(valid);
  }

  it('works for ERC20Minimal example set', () => {
    checkSchema(SetERC20Minimal, true);
    
  });

  it('works for ERC20 example set', () => {
    checkSchema(SetERC20, true);
  });
});
