import {
  DeployedGame as DeployedGameEvent,
  Order as OrderEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/megafactory/megafactory"
import { DeployedGame, Order, OwnershipTransferred } from "../generated/schema"

export function handleDeployedGame(event: DeployedGameEvent): void {
  let entity = new DeployedGame(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.contractGameNew = event.params.contractGameNew
  entity.projectOwner = event.params.projectOwner
  entity.contractGameOrigin = event.params.contractGameOrigin
  entity.contractToken = event.params.contractToken
  entity.deployedFee = event.params.deployedFee
  entity.affFee = event.params.affFee
  entity.devFee = event.params.devFee
  entity.mktFee = event.params.mktFee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOrder(event: OrderEvent): void {
  let entity = new Order(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.contractGame = event.params.contractGame
  entity.idGame = event.params.idGame
  entity.tokenId = event.params.tokenId
  entity.qty = event.params.qty

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
