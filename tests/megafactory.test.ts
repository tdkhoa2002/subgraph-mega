import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { DeployedGame } from "../generated/schema"
import { DeployedGame as DeployedGameEvent } from "../generated/megafactory/megafactory"
import { handleDeployedGame } from "../src/megafactory"
import { createDeployedGameEvent } from "./megafactory-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let contractGameNew = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let projectOwner = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let contractGameOrigin = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let contractToken = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let deployedFee = BigInt.fromI32(234)
    let affFee = BigInt.fromI32(234)
    let devFee = BigInt.fromI32(234)
    let mktFee = BigInt.fromI32(234)
    let newDeployedGameEvent = createDeployedGameEvent(
      contractGameNew,
      projectOwner,
      contractGameOrigin,
      contractToken,
      deployedFee,
      affFee,
      devFee,
      mktFee
    )
    handleDeployedGame(newDeployedGameEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("DeployedGame created and stored", () => {
    assert.entityCount("DeployedGame", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "DeployedGame",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "contractGameNew",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "DeployedGame",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "projectOwner",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "DeployedGame",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "contractGameOrigin",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "DeployedGame",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "contractToken",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "DeployedGame",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "deployedFee",
      "234"
    )
    assert.fieldEquals(
      "DeployedGame",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "affFee",
      "234"
    )
    assert.fieldEquals(
      "DeployedGame",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "devFee",
      "234"
    )
    assert.fieldEquals(
      "DeployedGame",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "mktFee",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
