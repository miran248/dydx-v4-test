import { Registry, decodeTxRaw } from "@cosmjs/proto-signing";
import { ValidatorClient } from "@dydxprotocol/v4-client-js";
import * as proto from "@dydxprotocol/v4-proto/src/codegen";
import { network } from "./network";

const registry = new Registry([
  [
    "/dydxprotocol.clob.MsgProposedOperations",
    proto.dydxprotocol.clob.MsgProposedOperations,
  ],
  [
    "/dydxprotocol.bridge.MsgAcknowledgeBridges",
    proto.dydxprotocol.bridge.MsgAcknowledgeBridges,
  ],
  [
    "/dydxprotocol.perpetuals.MsgAddPremiumVotes",
    proto.dydxprotocol.perpetuals.MsgAddPremiumVotes,
  ],
  [
    "/dydxprotocol.prices.MsgUpdateMarketPrices",
    proto.dydxprotocol.prices.MsgUpdateMarketPrices,
  ],
]);

const decodeTransaction = (transaction: Uint8Array) => {
  const decoded = decodeTxRaw(transaction);

  for (const message of decoded.body.messages) {
    console.log("decodeTransaction message", message);

    const operation = registry.decode(message);

    console.log("decodeTransaction operation", operation);
  }
};

const validator = await ValidatorClient.connect(network.validatorConfig);

const block = await validator.get.tendermintClient.getBlock(2500000);

console.log("block id header", block.id, block.header);

for (const tx of block.txs) {
  decodeTransaction(tx);
}
