import {
  IndexerConfig,
  Network,
  ValidatorConfig,
} from "@dydxprotocol/v4-client-js";

export const DYDX_ADDRESS = "dydx...";

const indexerConfig = new IndexerConfig(
  "https://indexer.dydx.trade/v4",
  "wss://indexer.dydx.trade/v4/ws"
);

const validatorConfig = new ValidatorConfig(
  // "https://dydx-ops-rpc.kingnodes.com",
  "https://dydx-rpc.publicnode.com:443", // https://dydx.publicnode.com
  "dydx-mainnet-1",
  {
    USDC_DENOM:
      "ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5",
    USDC_DECIMALS: 6,
    USDC_GAS_DENOM: "uusdc",
    CHAINTOKEN_DENOM: "adydx", // "adv4tnt",
    CHAINTOKEN_DECIMALS: 18,
  }
);

export const network = new Network("mainnet", indexerConfig, validatorConfig);
