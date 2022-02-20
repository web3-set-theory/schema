import { Tags, Version } from './core.types';

/* ======================================== */
// Entities
/* ======================================== */
export interface MetaEntity {
  id: string;
  name: string;
  type: string;
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

enum Condition {
  Minimum = 'minimum',
  Maximum = 'maximum',
  Equals = 'equals',
  Contains = 'contains',
  Range = 'range',
}

enum ValueTypes {
  String = 'string',
  BigNumber = 'bignumber',
  Tuple = 'tuple',
  Bytes = 'bytes',
  Bytes32 = 'bytes32',
}

export interface MetaConditionArgument {
  index: string;
  type: ValueTypes;
  condition: Condition;
  value: string;
}

export interface MetaCondition {
  id: string;
  name: string;
  type: string;
  target: string;
  accesor: Accesor;
  arguments: MetaConditionArgument[];
}

/* ======================================== */
// Rules
/* ======================================== */
enum RuleCondition {
  Or = 'or',
  BeforeTimestamp = 'beforeTimestamp',
  AfterTimestamp = 'afterTimestamp',
}

export interface MetaRule {
  id: string;
  name: string;
  type: string;
  condition: RuleCondition;
}

/* ======================================== */
// Set
/* ======================================== */
export interface MetaSet {
  id: string;
  name: string;
  type: string;
  timestamp: string;
  version: Version;
  description?: string;
  keywords?: string[];
  tags?: Tags;
  entities: MetaEntity[];
  conditions: MetaCondition[];
  rules: MetaRule[];
}
