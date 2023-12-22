import { IndexerClient } from "@dydxprotocol/v4-client-js";
import { network } from "./network";

const indexer = new IndexerClient(network.indexerConfig);
const response = await indexer.utility.getHeight();

console.log("response", response);
