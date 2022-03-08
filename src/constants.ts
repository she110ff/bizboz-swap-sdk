import JSBI from 'jsbi'
import { factory } from './boaswap_address.json'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  STANDALONE = 1281,
  MAINNET = 1,
  ROPSTEN = 2,
  LUNIVERSE_TEST = 1286,
  LUNIVERSE_PROD = 1287
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS: { [key: string]: string } = {
  [ChainId.STANDALONE]: '0x5c4242beB94dE30b922f57241f1D02f36e906915',
  [ChainId.MAINNET]: factory,
  [ChainId.ROPSTEN]: factory,
  [ChainId.LUNIVERSE_TEST]: factory,
  [ChainId.LUNIVERSE_PROD]: factory
}

export const INIT_CODE_HASH = '0xc6d3f0c0b4e23fa6fef6dff4530ac633fc081ff9e17b69e562a23a303db8f817'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
