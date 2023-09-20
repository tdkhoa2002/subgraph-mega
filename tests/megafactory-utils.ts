import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  DeployedGame,
  Order,
  OwnershipTransferred
} from "../generated/megafactory/megafactory"

export function createDeployedGameEvent(
  contractGameNew: Address,
  projectOwner: Address,
  contractGameOrigin: Address,
  contractToken: Address,
  deployedFee: BigInt,
  affFee: BigInt,
  devFee: BigInt,
  mktFee: BigInt
): DeployedGame {
  let deployedGameEvent = changetype<DeployedGame>(newMockEvent())

  deployedGameEvent.parameters = new Array()

  deployedGameEvent.parameters.push(
    new ethereum.EventParam(
      "contractGameNew",
      ethereum.Value.fromAddress(contractGameNew)
    )
  )
  deployedGameEvent.parameters.push(
    new ethereum.EventParam(
      "projectOwner",
      ethereum.Value.fromAddress(projectOwner)
    )
  )
  deployedGameEvent.parameters.push(
    new ethereum.EventParam(
      "contractGameOrigin",
      ethereum.Value.fromAddress(contractGameOrigin)
    )
  )
  deployedGameEvent.parameters.push(
    new ethereum.EventParam(
      "contractToken",
      ethereum.Value.fromAddress(contractToken)
    )
  )
  deployedGameEvent.parameters.push(
    new ethereum.EventParam(
      "deployedFee",
      ethereum.Value.fromUnsignedBigInt(deployedFee)
    )
  )
  deployedGameEvent.parameters.push(
    new ethereum.EventParam("affFee", ethereum.Value.fromUnsignedBigInt(affFee))
  )
  deployedGameEvent.parameters.push(
    new ethereum.EventParam("devFee", ethereum.Value.fromUnsignedBigInt(devFee))
  )
  deployedGameEvent.parameters.push(
    new ethereum.EventParam("mktFee", ethereum.Value.fromUnsignedBigInt(mktFee))
  )

  return deployedGameEvent
}

export function createOrderEvent(
  contractGame: Address,
  idGame: BigInt,
  tokenId: BigInt,
  qty: BigInt
): Order {
  let orderEvent = changetype<Order>(newMockEvent())

  orderEvent.parameters = new Array()

  orderEvent.parameters.push(
    new ethereum.EventParam(
      "contractGame",
      ethereum.Value.fromAddress(contractGame)
    )
  )
  orderEvent.parameters.push(
    new ethereum.EventParam("idGame", ethereum.Value.fromUnsignedBigInt(idGame))
  )
  orderEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  orderEvent.parameters.push(
    new ethereum.EventParam("qty", ethereum.Value.fromUnsignedBigInt(qty))
  )

  return orderEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}
