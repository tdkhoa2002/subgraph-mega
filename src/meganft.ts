import { TransferSingle } from "../generated/meganft/meganft"
import { NFT } from "../generated/schema"

export function handleTransferSingle(event: TransferSingle): void {
    let nft = new NFT(
        event.transaction.hash.toHex()
    )

    nft.tokenId = event.params.id
    nft.value = event.params.value
    nft.owner = event.params.to

    nft.save()
}