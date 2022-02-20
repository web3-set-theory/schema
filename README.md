# 🧪 Web3 Set Theory Schema

![CI](https://github.com/web3-set-theory/schema/actions/workflows/main.yml/badge.svg)
![ts](https://badgen.net/badge/-/TypeScript?icon=typescript&label&labelColor=blue&color=555555)
[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)

The `@web3-set-theory/schema` module defines an informal Web3 Set Theory schema in a JSON Schema Draft 7 specification format.

## 📒&nbsp;Introduction - Why Informal Set Theory

The Web3 Set Theory schema defines a simple, but extensible interface for applying information set theory to Web3 entities.

The primary objective is to contextualize relationships between different Entity types in varying EVM compute environments using a simple off-chain set based schema to organize the who, what, when, where, how... and why.

In other words, the composable and modular characteristics of protocols can continue to flourish and evolve across EVM environments (Ethereum, Optimism, Arbitrum, Polygon, etc...) but the proper metadata and user journey experience can be carefully crafted to contain the "chaos" and disorderliness inherit in decentralized systems - both from a technical and human perspective.

**The current schema contains 3 `Entity` set types:**

- SmartContract
- DecentralizedIdentifier
- Meta

The `SmartContract` and `DecentralizedIdentifier` entity types are simple - groups of entities with similar cryptographic primitive properties.

👉🏾 👉 **The `Meta` entity is unique.** 👈🏻 👈🏾

It does not contain a specific Web3 `Entity`.

Instead it treats all possible set types as it's child entity type.  Enabling cross-entity composability by groupings into **super sets** or "MetaSets" or "Ethereum Metaverse Quests".

### 📖&nbsp; Set Theory Schema (JSON Schema Draft 07 Specification)

http://json-schema.org/

The Informal Web3 Set Theory schema is the first attempt at defining, a simple framework for defining complex relationships.

In addition to grouping `Entity` types into sets, the `Set` schema also contains `Rules` and `Conditions` which are applied to the `Entities` for additional contextualization about expected final compute state.

In this way it differs slightly from the core principles of "set theory".

Instead of a simple taxonomy system to group sets of "things" or `Entities` together with like characteristics and properties. The set also applies restraints to how the `Entity` can be interacted with and how.

For example, a smart contract might have 20 method calls, but for a specific set that defines an end goal, we need a conditional for telling a user to call just 1 function on the smart contract.

```js
/**
  * Smart Contract Schema Example
  * Below is a small subset of the schema, which defines what fields are required for a complete set.
  * version:V0.1.0-alpha.1
*/
```

```json
{
   "$schema":"http://json-schema.org/draft-07/schema#",
   "$id":"https://github.com/metameta-protocol/metametasets-schema/src/set.smartcontract.schema.json",
   "title":"Smart Contract Set Schema",
   "description":"A smart contract set schema for usage in Web3 Set Theory",
   "type":"object",
   "additionalProperties":true,
   "required":[
       "id",
       "name",
       "object",
       "timestamp",
       "version",
       "entities",
       "conditions",
       "rules"
   ],
   "properties":{
       "id":{
         "$ref":"#/definitions/IdentifierDefinition"
       },
       "name":{
           "$ref":"#/definitions/NameDefinition"
       },
       "object":{
           "$ref":"#/definitions/ObjectDefinition"
       },
       "timestamp":{
           "type":"string",
           "format":"date-time",
           "description":"The timestamp of when the set was created"
       },
       "version":{
           "$ref":"#/definitions/Version"
       },
       "entities":{
           "type":"array",
           "description":"The list of entities included in the set.",
           "items":{
               "$ref":"#/definitions/EntityDefinition"
           },
           "minItems":1,
           "maxItems":10000
       },
       "conditions":{
           "type":"array",
           "description":"Conditions that apply to the set entities.",
           "items":{
               "$ref":"#/definitions/ConditionDefinition"
           },
           "minItems":0,
           "maxItems":10000
       },
       "rules":{
           "type":"array",
           "description":"Rules that apply to the set conditions.",
           "items":{
               "$ref":"#/definitions/RuleDefinition"
           },
           "minItems":0,
           "maxItems":10000
       },
   }
```
The primary fields to construct a set are `entities`, `conditions`, and `rules`.

Fields like `id`, `name`, `object`, etc... contain the secondary set data about the set, which is important, but not critical to the core functionality.

## Entity (Entities)

An `Entity` object defines how to communicate with an entity.

For example, for the `SmartContract` entity contains an `address` and `chainId` fields which can be used to identify what EMV compatible chain the smart contract is stored. And the `DecentralizedIdentity` entity contains the `did` field, which points to decentralized identifier used to interact with the `DecentralizedIdentity` entity.

## Condition (Conditions)

Conditions are applied to entities - describing an entity behavior or cryptographic outcome.

For example a `SmartContract` entity might have `MethodExecution` rule applied, which describes what "state" or conditionals are applied to transaction parsed data field. In other words, if an address swaps X token for Y amount any number of conditionals can be applied to the `X` and `Y` parameters to define a suitable state outcome. 

## Rule (Rules)

Rules provides additional environmental constraints to the entire set of entities.

For example, a set might contain a 1 SmartContract entity with 20 conditionals, but any 1 of the 20 conditionals if met will be satisfactory will can be described in the rules.

# Constructed Set Object

Using the schema, new sets can be created and validated.

Giving wallets, decentralized application, EVM ecosystem onboarding campaigns and others the tools to use a shared language and standard for creating a formalized user journey in a multichain environment.

### Empty

```js
/**
  * Empty Smart Contract Set
  * An empty smart contract set object.
*/
```

```json
{
  "id:hashhash-hashhash-hashhash-hashhash",
  "name:Empty Smart Contract Set",
  "object:set.smartcontract",
  "timestamp:2018-11-13T20:20:39+00:00",
  "version": {
    "major": 0,
    "minor": 1,
    "patch": 0
  },
  "keywords": [],
  "tags": {},
  "entities": [],
  "conditions": [],
  "rules": []
}
```

## 📝 TL;DR

In short, the set schema, with the `entities`, `conditions`, and `rules` fields provides just enough structure and also flexibility to facilitate an infinitely composable set of Web3 entities.

# 🧩 Examples

Below is a few small examples demonstrating how to build a `SmartContract` entity set with a few simple rules and conditionals applied.

## MetaSet

A MetaSet contains other sets as an `Entity` type. 

In the demo set below PoolTogether and Bankless are included - defining actions in a EVM compute environment and also a relationship between two decentralized identifiers by requiring a verifiable attestation.

```json
{
  "id": "defi-kickstart-metaquest",
  "name": "DeFi Kickstart Quest",
  "type": "set.meta",
  "entities": [
     {
      "id": "set.pooltogether.depositAndSave",
      "name": "PoolTogether Deposit and Save",
      "object": "entity.set.smartcontract",
      "entityUri": "ipfs:://mtwirsqawjuoloq2gvtyug2tc3jbf5htm2zeo4rsknfiv3fdp46a"
     },
     {
      "id": "set.bankless.decentralizedFinanceCourse",
      "name": "Bankless Decentralzied Finance Course",
      "object": "entity.set.did",
      "entityUri": "ipfs:://mtwirsqawjuoloq2gvtyug2tc3jbf5htm2zeo4rsknfiv3fdp46a"
     },
  ],
  "rules": [
    {
      "id": "set.smartcontract.",
      "name": "meta.defi-intro.defi.complete",
      "type": "rule.meta",
      "target": "set.pooltogether.depositAndSave",
      "operations": [
        {
          "type": "set.smartcontract",
          "condition": "complete"
        }
      ]
    },
    {
      "name": "set.decentralizedidenrtifier",
      "type": "rule.meta",
      "target": "set.bankless.decentralizedFinanceCourse",
      "operations": [
        {
          "type": "set.did",
          "condition": "complete"
        }
      ]
    }
  ]
}
```

## Smart Contract

### 🦄 Uniswap Set (Swap Any Token for Greater Then 1 ETH)

```json
{
  "id:set.uniswapv2.swapForEth",
  "object:set",
  "name:UniswapV2: Swap for ETH",
  "logoURI:ipfs://Qmc6MHybup7ppGgUdyEcsi5jqCeTAPtcxF9wBaco56Uc1H",
  "contentURI:ipfs://Qmc6MHybup7ppGgUdyEcsi5jqCeTAPtcxF9wBaco56Uc1H",
  "description:Swap any token for minimum 1 ETH using Uniswap",
  "keywords": ["defi", "uniswap"],
  "timestamp:2018-11-13T20:20:39+00:00",
  "tags": {
    "defi": {
      "name:DeFi",
      "description:Decentralized finance on the Ethereum blockchain"
    }
  },
  "version": {
    "major": 0,
    "minor": 1,
    "patch": 0
  },
  "entities": [
    {
      "id:contract.uniswap.v2.swapRouter",
      "name:Uniswap V2 SwapRouter",
      "type:set.smartcontract.entity",
      "chainId": 1,
      "address:0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
      "abi": []
    }
  ],
  "conditions": [
    {
      "id:contract.uniswap.v2.swapRouter.condition.0",
      "name:Uniswap.exactOutput: Swap for 100 USDC (gte)",
      "type:smartcontract.set.condition.function",
      "target:contract.uniswap.v2.swapRouter",
      "accesor:function",
      "value:swapExactTokensForETH(uint256,uint256,address[],address,uint256)",
      "arguments": [
        {
          "index": 1,
          "type:bignumber",
          "condition:gte",
          "value:10000000000000000000"
        }
      ]
    }
  ],
  "rules": [
    {
      "id:contract.uniswap.routerv2.swap.rule.0",
      "type:smartcontract.set.rule",
      "condition:or",
      "targets": [
        "contract.uniswap.v2.swapRouter.condition.0",
        "contract.uniswap.v2.swapRouter.condition.1"
      ]
    }
  ]
}
```

### 🏖️ PoolTogether Set (Deposit 100 USDC Minimum into a YieldSourcePrizepool)

```json
{
  "id:set.pooltogetherv4.swapForEth",
  "object:set",
  "name:PooltogetherV4: Deposit USDC",
  "logoURI:ipfs://Qmc6MHybup7ppGgUdyEcsi5jqCeTAPtcxF9wBaco56Uc1H",
  "contentURI:ipfs://Qmc6MHybup7ppGgUdyEcsi5jqCeTAPtcxF9wBaco56Uc1H",
  "description:Swap any token for minimum 1 ETH using Uniswap",
  "keywords": ["defi", "pooltogether"],
  "timestamp:2018-11-13T20:20:39+00:00",
  "tags": {
    "defi": {
      "name:DeFi",
      "description:Decentralized finance on the Ethereum blockchain"
    }
  },
  "version": {
    "major": 0,
    "minor": 1,
    "patch": 0
  },
  "entities": [
    {
      "id:contract.pooltogether.v4.prizePool",
      "name:PoolTogether V4 YieldSourePrizePool",
      "type:entity.smartcontract",
      "chainId": 1,
      "address:0xd89a09084555a7D0ABe7B111b1f78DFEdDd638Be",
      "abi": []
    }
  ],
  "conditions": [
    {
      "id:contract.pooltogether.v4.prizePool.condition.0",
      "name:Uniswap.exactOutput: Swap for 100 USDC (gte)",
      "type:smartcontract.set.condition.function",
      "target:contract.pooltogether.v4.prizePool",
      "accesor:function",
      "value:depositToAndDelegate(address,uint256,address)",
      "arguments": [
        {
          "index": 1,
          "type:bignumber",
          "condition:gte",
          "value:100000"
        }
      ]
    }
  ],
  "rules": [
    {
      "id:contract.uniswap.routerv2.swap.rule.0",
      "type:smartcontract.set.rule",
      "condition:or",
      "targets": [
        "contract.pooltogether.v4.prizePool.condition.0",
        "contract.pooltogether.v4.prizePool.condition.1"
      ]
    }
  ]
}

```


## 💾 Installation

```sh
npm install @web3-set-theory/schema
```

```sh
yarn add @web3-set-theory/schema
```

```sh
git clone https://github.com/web3-set-theory/schema
```


## Special Thanks

- Uniswap: TokenList Schema
- Etherscan: Free Scanner API