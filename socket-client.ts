import { SocketClient } from "@dydxprotocol/v4-client-js";
import { network } from "./network";
import { MessageData } from "./types";

const onOpen = () => {
  console.log("onOpen");
};
const onClose = () => {
  console.log("onClose");
};
const onMessage = (message: MessageEvent) => {
  if (typeof message.data !== "string") {
    return;
  }

  const jsonString = message.data;
  try {
    const data = JSON.parse(jsonString) as MessageData;

    switch (data.type) {
      case "connected":
        // socket.subscribeToMarkets();
        // socket.subscribeToOrderbook("ETH-USD");
        // socket.subscribeToTrades("ETH-USD");
        // socket.subscribeToCandles("ETH-USD", CandlesResolution.FIFTEEN_MINUTES);
        // socket.subscribeToSubaccount(DYDX_ADDRESS, 0);
        break;
      case "subscribed":
        // data.contents.markets["lalala"].
        break;
      case "channel_batch_data":
        break;
      default:
        console.log("onMessage received unknown message", data);
    }
    console.log("onMessage", data);
  } catch (error) {
    console.error("Error parsing JSON message:", error);
  }
};

const socket = new SocketClient(
  network.indexerConfig,
  onOpen,
  onClose,
  onMessage
);
socket.connect();
