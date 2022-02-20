import { Tags, Version, Condition } from './core.types';

/* ======================================== */
// Entities
/* ======================================== */
export interface DIDEntity {
  id: string;
  type: string;
  name: string;
  did: string;
  description?: string;
}

/* ======================================== */
// Conditions
/* ======================================== */
enum Action {
  Attestation = 'attestation',
}

export interface DIDConditionArgument {
  index: string;
  accesor: string;
  condition: Condition;
  value: any;
}

export interface DIDConditionActionType_Attestation {
  action: Action.Attestation;
  schema: string;
}

export interface DIDCondition {
  id: string;
  name: string;
  type: string;
  target: string;
  action: DIDConditionActionType_Attestation;
  arguments: DIDConditionArgument[];
}

/* ======================================== */
// Rules
/* ======================================== */
enum RuleCondition {
  Or = 'or',
  BeforeTimestamp = 'beforeTimestamp',
  AfterTimestamp = 'afterTimestamp',
}

export interface DIDRule {
  id: string;
  name: string;
  type: string;
  condition: RuleCondition;
}

/* ======================================== */
// Set
/* ======================================== */
export interface DIDSet {
  id: string;
  name: string;
  type: string;
  timestamp: string;
  version: Version;
  description?: string;
  keywords?: string[];
  tags?: Tags;
  entities: DIDEntity[];
  conditions: DIDCondition[];
  rules: DIDRule[];
}
