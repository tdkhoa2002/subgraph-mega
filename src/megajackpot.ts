import { CreateGame } from "../generated/schema";
import { CreateGame as CreateGameEvent } from "../generated/templates/megajackpot/megajackpot";

export function handleCreatedGame(event: CreateGameEvent): void {
    let createdGame = new CreateGame(event.transaction.hash.concatI32(event.logIndex.toI32()))

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

    createdGame.save()
}