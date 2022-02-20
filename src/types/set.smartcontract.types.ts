import { ABI, Tags, Version, Condition } from './core.types';

/* ======================================== */
// Entities
/* ======================================== */
export interface SmartContractEntity {
  id: string;
  name: string;
  type: string;
  abi: ABI;
  address: string;
  chainId: number;
  description?: string;
}

/* ======================================== */
// Conditions
/* ======================================== */
enum Accesor {
  Input = 'input',
  Event = 'event',
  State = 'state',
}

enum ValueTypes {
  String = 'string',
  BigNumber = 'bignumber',
  Tuple = 'tuple',
  Bytes = 'bytes',
  Bytes32 = 'bytes32',
}

export interface SmartContractConditionArgument {
  index: string;
  type: ValueTypes;
  condition: Condition;
  value: string;
}

export interface SmartContractCondition {
  id: string;
  name: string;
  type: string;
  target: string;
  accesor: Accesor;
  arguments: SmartContractConditionArgument[];
}

/* ======================================== */
// Rules
/* ======================================== */
enum RuleCondition {
  Or = 'or',
  BeforeTimestamp = 'beforeTimestamp',
  AfterTimestamp = 'afterTimestamp',
}

export interface SmartContractRule {
  id: string;
  name: string;
  type: string;
  condition: RuleCondition;
}

/* ======================================== */
// Set
/* ======================================== */
export interface SmartContractSet {
  id: string;
  name: string;
  type: string;
  timestamp: string;
  version: Version;
  description?: string;
  keywords?: string[];
  tags?: Tags;
  content?: string;
  entities: SmartContractEntity[];
  conditions: SmartContractCondition[];
  rules: SmartContractRule[];
}
