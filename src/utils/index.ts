/* eslint-disable prefer-const */
import { Address, BigDecimal, BigInt, ByteArray, Value, log } from "@graphprotocol/graph-ts";
import { ERC20 } from "../../generated/megafactory/ERC20";
import { ERC20NameBytes } from "../../generated/megafactory/ERC20NameBytes";
import { ERC20SymbolBytes } from "../../generated/megafactory/ERC20SymbolBytes";
import { megajackpot as MegaJackpotContract } from "../../generated/templates/MegaGameContract/megajackpot"
import { megafactory as FactoryContract } from "../../generated/templates/MegaGameContract/megafactory";

export let ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";
// prettier-ignore
export let FACTORY_ADDRESS = "0xb414D7C60DC87eDb46Ea5987f9043653aBE3af34";

export let ZERO_BI = BigInt.fromI32(0);
export let ONE_BI = BigInt.fromI32(1);
export let ZERO_BD = BigDecimal.fromString("0");
export let ONE_BD = BigDecimal.fromString("1");
export let BI_18 = BigInt.fromI32(18);

export let factoryContract = FactoryContract.bind(Address.fromString(FACTORY_ADDRESS));

export function exponentToBigDecimal(decimals: BigInt): BigDecimal {
  let bd = BigDecimal.fromString("1");
  for (let i = ZERO_BI; i.lt(decimals as BigInt); i = i.plus(ONE_BI)) {
    bd = bd.times(BigDecimal.fromString("10"));
  }
  return bd;
}

export function convertTokenToDecimal(tokenAmount: BigInt, exchangeDecimals: BigInt): BigDecimal {
  if (exchangeDecimals == ZERO_BI) {
    return tokenAmount.toBigDecimal();
  }
  return tokenAmount.toBigDecimal().div(exponentToBigDecimal(exchangeDecimals));
}

export function isNullBnbValue(value: string): boolean {
  return value == "0x0000000000000000000000000000000000000000000000000000000000000001";
}

export function fetchTokenSymbol(tokenAddress: Address): string {
  let contract = ERC20.bind(tokenAddress);
  let contractSymbolBytes = ERC20SymbolBytes.bind(tokenAddress);

  let symbolValue = "unknown";
  let symbolResult = contract.try_symbol();
  if (symbolResult.reverted) {
    let symbolResultBytes = contractSymbolBytes.try_symbol();
    if (!symbolResultBytes.reverted) {
      if (!isNullBnbValue(symbolResultBytes.value.toHex())) {
        symbolValue = symbolResultBytes.value.toString();
      }
    }
  } else {
    symbolValue = symbolResult.value;
  }
  return symbolValue;
}

export function fetchGameIdPrize(megaJackpotContract: Address, idGame: BigInt, prizeIndex: BigInt): BigInt {
  let contract = MegaJackpotContract.bind(megaJackpotContract);
  // let contractSymbolBytes = ERC20SymbolBytes.bind(megaJackpotContract);

  let prizeResult = contract.try_prize(idGame , prizeIndex); //return value and percent
  if (prizeResult.reverted) {
    return ZERO_BI
  }
  return prizeResult.value.getValue() //return getValue()
}

export function fetchTokenName(tokenAddress: Address): string {
  let contract = ERC20.bind(tokenAddress);
  let contractNameBytes = ERC20NameBytes.bind(tokenAddress);

  let nameValue = "unknown";
  let nameResult = contract.try_name();
  if (nameResult.reverted) {
    let nameResultBytes = contractNameBytes.try_name();
    if (!nameResultBytes.reverted) {
      if (!isNullBnbValue(nameResultBytes.value.toHex())) {
        nameValue = nameResultBytes.value.toString();
      }
    }
  } else {
    nameValue = nameResult.value;
  }
  return nameValue;
}

export function fetchOrderRewards(megaJackpotContract: Address, quantity: BigInt, tokenId: BigInt): Array<BigInt> {
  log.info('fetch Order Reward !!! ', [])
  let contract = MegaJackpotContract.bind(megaJackpotContract)
  let orderRewards = new Array<BigInt>()

  for(let i = ZERO_BI; i < quantity; i.plus(ONE_BI)) {
    let prizeResult = contract.try_orderRewards(tokenId , i) //return value of prize index
    log.info('prize: ', [prizeResult.value.toString()])
    orderRewards.push(prizeResult.value)
  }

  return orderRewards //return order rewards
}

export function fetchTokenDecimals(tokenAddress: Address): BigInt {
  let contract = ERC20.bind(tokenAddress);
  let decimalValue = null;
  let decimalResult = contract.try_decimals();
  if (!decimalResult.reverted) {
    decimalValue = decimalResult.value;
  }
  return BigInt.fromI32(decimalValue as i32);
}
