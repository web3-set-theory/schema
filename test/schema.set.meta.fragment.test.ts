import Ajv from 'ajv';
import { SchemaSetMetaFragment } from '../src/schemas';
import addFormats from 'ajv-formats';

import SetFragment from './schemas/set.meta.fragment.json';

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);
const validator = ajv.compile(SchemaSetMetaFragment);

function checkSchema(schema: any, valid: boolean): void {
    const isValid = validator(schema);
    if(!isValid) {
        console.log(validator.errors);
    }
    expect(isValid).toEqual(valid);
}

describe('schema:set:meta', () => {
  it('is valid', () => {
    expect(ajv.validateSchema(SchemaSetMetaFragment)).toEqual(true);
  });

  it('validates: fragment set schema template', () => {
    checkSchema(SetFragment, true);
  });
});
