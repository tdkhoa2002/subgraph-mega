import { BigInt, Value, log } from "@graphprotocol/graph-ts";
import {
  DeployedGame as DeployedGameEvent,
  Order as OrderEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/megafactory/megafactory"
import { CreateGame, DataMaker, MegaGameContract, Order, OrderDetail, OrderReward, OwnershipTransferred, ProjectOwner, Token, TokenOwnerGame } from "../generated/schema"
import { MegaGameContract as MegaTemplates } from "../generated/templates"
import { 
  ONE_BI,
  ZERO_BI, fetchOrderRewards, fetchTokenDecimals, fetchTokenName, fetchTokenSymbol 
} from "./utils"

export function handleDeployedGame(event: DeployedGameEvent): void {
  let token = Token.load(event.params.contractToken.toHex());
  if (token === null) {
    token = new Token(event.params.contractToken.toHex());
    token.name = fetchTokenName(event.params.contractToken);
    token.symbol = fetchTokenSymbol(event.params.contractToken);
    let decimals = fetchTokenDecimals(event.params.contractToken);
    if (decimals === null) {
      return;
    }
    token.decimals = decimals;
    token.save();
  }

  let entity = new MegaGameContract(
    event.params.contractGameNew.toHex()
    )
  entity.contractGameNew = event.params.contractGameNew
  let projectOwner = new ProjectOwner(
    event.params.projectOwner.toHex()
  )
  projectOwner.address = event.params.projectOwner
  projectOwner.megaGameContracts = entity.id
  entity.contractGameOrigin = event.params.contractGameOrigin
  entity.contractToken = event.params.contractToken
  entity.token = token.id
  entity.deployedFee = event.params.deployedFee
  entity.affFee = event.params.affFee
  entity.devFee = event.params.devFee
  entity.mktFee = event.params.mktFee
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash
  entity.totalGame = ZERO_BI
  entity.totalQuantity = ZERO_BI
  entity.totalTransactions = ZERO_BI
  entity.totalPayAmount = ZERO_BI
  entity.name = "Name Contract Origin"

  let tokenOwnerGame = new TokenOwnerGame(
    event.transaction.hash.toHex()
  )
  tokenOwnerGame.token = token.id
  tokenOwnerGame.projectOwner = projectOwner.id
  tokenOwnerGame.megaGameContract = entity.id
  tokenOwnerGame.save()

  entity.save()
  projectOwner.save()

  MegaTemplates.create(event.params.contractGameNew)
}

export function handleOrder(event: OrderEvent): void {
  let game = CreateGame.load(
    event.params.contractGame.toHex().concat("-").concat(event.params.idGame.toString())
  )

  if(game !== null) {
    game.totalQuantity = game.totalQuantity.plus(event.params.qty)
    game.totalTransactions = game.totalTransactions.plus(ONE_BI)
    game.totalPayAmount = game.totalPayAmount.plus(event.params.qty.times(game.price))
    game.save()

    let amount = event.params.qty.times(game.price)
    let megaGameContract = MegaGameContract.load(event.params.contractGame.toHex())
    if(megaGameContract !== null) {
      megaGameContract.totalQuantity = megaGameContract.totalQuantity.plus(event.params.qty)
      megaGameContract.totalTransactions = megaGameContract.totalTransactions.plus(ONE_BI)
      megaGameContract.totalPayAmount = megaGameContract.totalPayAmount.plus(amount)
      megaGameContract.save()
    }

    //MAKER
    let maker = DataMaker.load(event.transaction.from.toHex())

    if(maker === null) {
      maker = new DataMaker(
        event.transaction.from.toHex()
      )
      maker.address = event.transaction.from
      maker.totalVolume = ZERO_BI
      maker.totalQuantity = ZERO_BI
      maker.totalTransactions = ZERO_BI
      maker.totalReward = ZERO_BI
    } 
    maker.totalVolume = maker.totalVolume.plus(amount)
    maker.totalQuantity = maker.totalQuantity.plus(event.params.qty)
    maker.totalTransactions = maker.totalTransactions.plus(ONE_BI)

    maker.save()

    //ORDER
    let entity = new Order(
      event.transaction.hash.toHex()
    )
    entity.contractGame = event.params.contractGame
    entity.idGame = event.params.idGame
    entity.tokenId = event.params.tokenId
    entity.qty = event.params.qty
    entity.blockNumber = event.block.number
    entity.blockTimestamp = event.block.timestamp
    entity.transactionHash = event.transaction.hash
    entity.game = game.id
    entity.amount = amount
    entity.maker = maker.id

    for(let i = ZERO_BI; i.lt(event.params.qty); i = i.plus(ONE_BI)) {
      let orderReward = new OrderReward(
        event.params.contractGame.toHex().concat("-").concat(event.params.tokenId.toString()).concat("-").concat(i.toString())
      )
      orderReward.values = fetchOrderRewards(event.params.contractGame, i, event.params.tokenId)
      orderReward.gameContract = event.params.contractGame
      orderReward.idGame = event.params.idGame
      orderReward.tokenId = event.params.tokenId
      orderReward.quantity = event.params.qty
      orderReward.transactionHash = event.transaction.hash
      let orderDetail = OrderDetail.load(event.transaction.hash.toHex())
      if(orderDetail != null) {
        orderReward.orderDetail = orderDetail.id
      }
      log.info('order rewards id: {}', [orderReward.id])
      orderReward.save()
    }

    let orderDetail = OrderDetail.load(event.transaction.hash.toHex())
    if(orderDetail != null) {
      entity.orderDetail = orderDetail.id
    }
    entity.save()
  }
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {

}
