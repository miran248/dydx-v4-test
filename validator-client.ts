import { decodeTxRaw } from "@cosmjs/proto-signing";
import { Any, ValidatorClient } from "@dydxprotocol/v4-client-js";
import * as proto from "@dydxprotocol/v4-proto/src/codegen";
import { network } from "./network";

const decodeMessage = (message: Any) => {
  switch (message.typeUrl) {
    case "/dydxprotocol.clob.MsgProposedOperations":
      return proto.dydxprotocol.clob.MsgProposedOperations.decode(
        message.value
      );
    case "/dydxprotocol.bridge.MsgAcknowledgeBridges":
      return proto.dydxprotocol.bridge.MsgAcknowledgeBridges.decode(
        message.value
      );
    case "/dydxprotocol.perpetuals.MsgAddPremiumVotes":
      return proto.dydxprotocol.perpetuals.MsgAddPremiumVotes.decode(
        message.value
      );
    case "/dydxprotocol.prices.MsgUpdateMarketPrices":
      return proto.dydxprotocol.prices.MsgUpdateMarketPrices.decode(
        message.value
      );
    default:
      throw new Error(`unknown message type ${message.typeUrl}`);
  }
};
const decodeTransaction = (transaction: Uint8Array) => {
  const decoded = decodeTxRaw(transaction);

  for (const message of decoded.body.messages) {
    console.log("decodeTransaction message", message);

    const operation = decodeMessage(message);

    console.log("decodeTransaction operation", operation);
  }
};

const validator = await ValidatorClient.connect(network.validatorConfig);

const block = await validator.get.tendermintClient.getBlock(2500000);

console.log("block id header", block.id, block.header);

for (const tx of block.txs) {
  decodeTransaction(tx);
}
