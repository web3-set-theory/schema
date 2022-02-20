export enum Condition {
  Minimum = 'minimum',
  Maximum = 'maximum',
  Equals = 'equals',
  Contains = 'contains',
  Range = 'range',
}

export interface ABI {
  protocol: string;
  path: string;
}

export interface Version {
  major: number;
  minor: number;
  patch: number;
}

export interface Tags {
  [tagId: string]: {
    name: string;
    description: string;
  };
}

export interface Entity {
  id: string;
  name: string;
  type: string;
}

export interface Set {
  id: string;
  name: string;
  type: string;
  timestamp: string;
  version: Version;
  description?: string;
  keywords?: string[];
  tags?: Tags;
  entities?: Array<any>;
  conditions?: Array<any>;
  rules?: Array<any>;
}
