// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class CreateGame extends ethereum.Event {
  get params(): CreateGame__Params {
    return new CreateGame__Params(this);
  }
}

export class CreateGame__Params {
  _event: CreateGame;

  constructor(event: CreateGame) {
    this._event = event;
  }

  get _title(): string {
    return this._event.parameters[0].value.toString();
  }

  get _price(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get _startPrice(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _affiliatePercent(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get _ownerPercent(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get jackpotPercent(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get values(): Array<BigInt> {
    return this._event.parameters[6].value.toBigIntArray();
  }

  get percents(): Array<BigInt> {
    return this._event.parameters[7].value.toBigIntArray();
  }

  get idGame(): BigInt {
    return this._event.parameters[8].value.toBigInt();
  }

  get nameContract(): string {
    return this._event.parameters[9].value.toString();
  }

  get newContractGame(): Address {
    return this._event.parameters[10].value.toAddress();
  }
}

export class Order extends ethereum.Event {
  get params(): Order__Params {
    return new Order__Params(this);
  }
}

export class Order__Params {
  _event: Order;

  constructor(event: Order) {
    this._event = event;
  }

  get totalReward(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get qty(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get jackpot(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }

  get devFee(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get mktFee(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get affFee(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get ownerFee(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class megajackpot__gameInfoResult {
  value0: BigInt;
  value1: BigInt;
  value2: string;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;
  value7: BigInt;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: string,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt,
    value7: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    return map;
  }

  getPrice(): BigInt {
    return this.value0;
  }

  getStartPrize(): BigInt {
    return this.value1;
  }

  getTitle(): string {
    return this.value2;
  }

  getOwnerPercent(): BigInt {
    return this.value3;
  }

  getAffiliatePercent(): BigInt {
    return this.value4;
  }

  getTerm(): BigInt {
    return this.value5;
  }

  getTotalReward(): BigInt {
    return this.value6;
  }

  getTotalSpin(): BigInt {
    return this.value7;
  }
}

export class megajackpot__ordersResult {
  value0: boolean;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: boolean, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }

  getJackpot(): boolean {
    return this.value0;
  }

  getQty(): BigInt {
    return this.value1;
  }

  getTokenId(): BigInt {
    return this.value2;
  }
}

export class megajackpot__prizeResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getValue(): BigInt {
    return this.value0;
  }

  getPercent(): BigInt {
    return this.value1;
  }
}

export class megajackpot extends ethereum.SmartContract {
  static bind(address: Address): megajackpot {
    return new megajackpot("megajackpot", address);
  }

  PERCENTS_DIVIDER(): BigInt {
    let result = super.call(
      "PERCENTS_DIVIDER",
      "PERCENTS_DIVIDER():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_PERCENTS_DIVIDER(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "PERCENTS_DIVIDER",
      "PERCENTS_DIVIDER():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  SPIN_PERCENTS_DIVIDER(): BigInt {
    let result = super.call(
      "SPIN_PERCENTS_DIVIDER",
      "SPIN_PERCENTS_DIVIDER():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_SPIN_PERCENTS_DIVIDER(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "SPIN_PERCENTS_DIVIDER",
      "SPIN_PERCENTS_DIVIDER():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  gameInfo(param0: BigInt): megajackpot__gameInfoResult {
    let result = super.call(
      "gameInfo",
      "gameInfo(uint256):(uint256,uint256,string,uint256,uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new megajackpot__gameInfoResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toString(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toBigInt()
    );
  }

  try_gameInfo(
    param0: BigInt
  ): ethereum.CallResult<megajackpot__gameInfoResult> {
    let result = super.tryCall(
      "gameInfo",
      "gameInfo(uint256):(uint256,uint256,string,uint256,uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new megajackpot__gameInfoResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toString(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toBigInt()
      )
    );
  }

  indexGame(): BigInt {
    let result = super.call("indexGame", "indexGame():(uint256)", []);

    return result[0].toBigInt();
  }

  try_indexGame(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("indexGame", "indexGame():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  nonce(): BigInt {
    let result = super.call("nonce", "nonce():(uint256)", []);

    return result[0].toBigInt();
  }

  try_nonce(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("nonce", "nonce():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  orderDetail(param0: BigInt, param1: BigInt): BigInt {
    let result = super.call(
      "orderDetail",
      "orderDetail(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toBigInt();
  }

  try_orderDetail(param0: BigInt, param1: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "orderDetail",
      "orderDetail(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  orders(param0: BigInt): megajackpot__ordersResult {
    let result = super.call(
      "orders",
      "orders(uint256):(bool,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new megajackpot__ordersResult(
      result[0].toBoolean(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_orders(param0: BigInt): ethereum.CallResult<megajackpot__ordersResult> {
    let result = super.tryCall(
      "orders",
      "orders(uint256):(bool,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new megajackpot__ordersResult(
        value[0].toBoolean(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  prize(param0: BigInt, param1: BigInt): megajackpot__prizeResult {
    let result = super.call(
      "prize",
      "prize(uint256,uint256):(uint256,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return new megajackpot__prizeResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_prize(
    param0: BigInt,
    param1: BigInt
  ): ethereum.CallResult<megajackpot__prizeResult> {
    let result = super.tryCall(
      "prize",
      "prize(uint256,uint256):(uint256,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new megajackpot__prizeResult(value[0].toBigInt(), value[1].toBigInt())
    );
  }

  projectOwnerWallet(): Address {
    let result = super.call(
      "projectOwnerWallet",
      "projectOwnerWallet():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_projectOwnerWallet(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "projectOwnerWallet",
      "projectOwnerWallet():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  token(): Address {
    let result = super.call("token", "token():(address)", []);

    return result[0].toAddress();
  }

  try_token(): ethereum.CallResult<Address> {
    let result = super.tryCall("token", "token():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class CreateGameCall extends ethereum.Call {
  get inputs(): CreateGameCall__Inputs {
    return new CreateGameCall__Inputs(this);
  }

  get outputs(): CreateGameCall__Outputs {
    return new CreateGameCall__Outputs(this);
  }
}

export class CreateGameCall__Inputs {
  _call: CreateGameCall;

  constructor(call: CreateGameCall) {
    this._call = call;
  }

  get _title(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _price(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _startPrice(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _affiliatePercent(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _ownerPercent(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get jackpotPercent(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get values(): Array<BigInt> {
    return this._call.inputValues[6].value.toBigIntArray();
  }

  get percents(): Array<BigInt> {
    return this._call.inputValues[7].value.toBigIntArray();
  }
}

export class CreateGameCall__Outputs {
  _call: CreateGameCall;

  constructor(call: CreateGameCall) {
    this._call = call;
  }
}

export class OrderCall extends ethereum.Call {
  get inputs(): OrderCall__Inputs {
    return new OrderCall__Inputs(this);
  }

  get outputs(): OrderCall__Outputs {
    return new OrderCall__Outputs(this);
  }
}

export class OrderCall__Inputs {
  _call: OrderCall;

  constructor(call: OrderCall) {
    this._call = call;
  }

  get devPercent(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get sytemFee(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get sponsorAddress(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get devWallet(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get mktWallet(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get idGame(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get qty(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }

  get userSpin(): Address {
    return this._call.inputValues[8].value.toAddress();
  }
}

export class OrderCall__Outputs {
  _call: OrderCall;

  constructor(call: OrderCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetProjectOwnerWalletCall extends ethereum.Call {
  get inputs(): SetProjectOwnerWalletCall__Inputs {
    return new SetProjectOwnerWalletCall__Inputs(this);
  }

  get outputs(): SetProjectOwnerWalletCall__Outputs {
    return new SetProjectOwnerWalletCall__Outputs(this);
  }
}

export class SetProjectOwnerWalletCall__Inputs {
  _call: SetProjectOwnerWalletCall;

  constructor(call: SetProjectOwnerWalletCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetProjectOwnerWalletCall__Outputs {
  _call: SetProjectOwnerWalletCall;

  constructor(call: SetProjectOwnerWalletCall) {
    this._call = call;
  }
}

export class SetTokenCall extends ethereum.Call {
  get inputs(): SetTokenCall__Inputs {
    return new SetTokenCall__Inputs(this);
  }

  get outputs(): SetTokenCall__Outputs {
    return new SetTokenCall__Outputs(this);
  }
}

export class SetTokenCall__Inputs {
  _call: SetTokenCall;

  constructor(call: SetTokenCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetTokenCall__Outputs {
  _call: SetTokenCall;

  constructor(call: SetTokenCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
