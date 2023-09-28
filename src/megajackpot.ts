import { Address, BigInt, log } from "@graphprotocol/graph-ts";
import { CreateGame, 
    DataMaker, 
    MegaGameContract, 
    Order as OrderFactory, 
    OrderDetail, 
    OrderReward
} from "../generated/schema";
import { CreateGame as CreateGameEvent,
        Order as OrderEvent,
        OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/templates/MegaGameContract/megajackpot";
import { ONE_BD, ONE_BI, ZERO_BI, fetchGameIdPrize, fetchOrderRewards } from "./utils";
// import { megajackpot } from "../generated/templates"


export function handleCreatedGame(event: CreateGameEvent): void {
    let megaGameContract = MegaGameContract.load(event.address.toHex())
    if(megaGameContract !== null) {
        megaGameContract.totalGame = megaGameContract.totalGame.plus(ONE_BI);
        megaGameContract.save()

        let createdGame = new CreateGame(
            event.params.newContractGame.toHex().concat("-").concat(event.params.idGame.toString())
            )
        createdGame.title = event.params._title
        createdGame.price = event.params._price
        createdGame.startPrice = event.params._startPrice
        createdGame.affiliatePercent = event.params._affiliatePercent
        createdGame.ownerPercent = event.params._ownerPercent
        createdGame.jackpotPercent = event.params.jackpotPercent
        createdGame.values = event.params.values
        createdGame.percents = event.params.percents
        createdGame.idGame = event.params.idGame
        createdGame.newGameContract = event.params.newContractGame
        createdGame.megaGameContract = megaGameContract.id
        createdGame.totalQuantity = ZERO_BI
        createdGame.totalTransactions = ZERO_BI
        createdGame.totalPayAmount = ZERO_BI
        createdGame.jackpotTerm = ZERO_BI
        createdGame.jackpotValue = ZERO_BI

        createdGame.save()
    }
}

export function handleOrder(event: OrderEvent): void {
    let maker = DataMaker.load(event.transaction.from.toHex())
    if(maker !== null) {
        maker.totalReward = maker.totalReward.plus(event.params.totalReward)
        maker.save()
    }

    let orderDetail = new OrderDetail(
        event.transaction.hash.toHex()
    )
    orderDetail.totalReward = event.params.totalReward
    orderDetail.affFee = event.params.affFee
    orderDetail.devFee = event.params.devFee
    orderDetail.ownerFee = event.params.ownerFee
    orderDetail.mktFee = event.params.mktFee
    orderDetail.win = event.params.jackpot
    orderDetail.idGame = event.params.idGame

    //GAME
    let game = CreateGame.load(
        event.address.toHex().concat("-").concat(event.params.idGame.toString())
    )
    if (game !== null) {
        if(orderDetail.win) {
            game.jackpotTerm = game.jackpotTerm.plus(ONE_BI)
        }
        game.jackpotValue = fetchGameIdPrize(event.address,event.params.idGame, BigInt.fromI32(11))
        game.save()
    }
    orderDetail.save()
}
export function handleOwnershipTransferred(
    event: OwnershipTransferredEvent
  ): void {}

function toBigInt(): any {
    throw new Error("Function not implemented.");
}
