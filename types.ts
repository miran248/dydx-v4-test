export type MessageData = {
  connection_id: string; // "4d8e02dd-1228-45f4-b541-e8f7ef459b85"
  message_id: number; // 0 based message order
} & (
  | { type: "connected" }
  | {
      type: "subscribed";
      channel: "v4_markets";
      contents: {
        markets: Record<
          string, // "BTC-USD"
          {
            clobPairId: string; // "0"
            ticker: string; // "BTC-USD"
            status: string; // "ACTIVE"
            lastPrice: string; // "0"
            oraclePrice: string; // "43660.93358"
            priceChange24H: string; // "-304.1947"
            volume24H: string; // "69330441.7567"
            trades24H: number; // 49153
            nextFundingRate: string; // "0.00003455585106382979"
            initialMarginFraction: string; // "0.05"
            maintenanceMarginFraction: string; // "0.03"
            basePositionNotional: string; // "1000000"
            openInterest: string; // "115.3099"
            atomicResolution: number; // -10
            quantumConversionExponent: number; // -9
            tickSize: string; // "1"
            stepSize: string; // "0.0001"
            stepBaseQuantums: number; // 1000000
            subticksPerTick: number; // 100000
          }
        >;
      };
    }
  | {
      type: "subscribed";
      channel: "v4_subaccounts";
      id: string; // wallet-address/sub-account-number
      contents: {
        subaccount: {
          address: string; // "dydx1rng9vpkyeglc8766f06v2728j0y8jtfpcr0zcj",
          subaccountNumber: number; // 0,
          equity: string; // "6284.1628",
          freeCollateral: string; // "6284.1628",
          openPerpetualPositions: {}; // TODO: figure out the type
          assetPositions: {
            USDC: {
              size: string; // "6284.1628",
              symbol: string; // "USDC",
              side: string; // "LONG",
              assetId: string; // "0"
            };
          };
          marginEnabled: boolean; // true
        };
        orders: [
          {
            id: string; // "42ca3f7b-a7f0-55ae-bd26-5643abbbd179"
            subaccountId: string; // "e6b6918b-ecdf-5e44-abee-ce727369cfcf"
            clientId: string; // "511412891"
            clobPairId: string; // "1"
            side: string; // "BUY"
            size: string; // "10"
            totalFilled: string; // "0"
            price: string; // "2080"
            type: string; // "LIMIT"
            status: string; // "OPEN"
            timeInForce: string; // "GTT"
            reduceOnly: boolean; // false
            orderFlags: string; // "64"
            goodTilBlockTime: string; // "2024-01-12T18:11:28.000Z"
            createdAtHeight: string; // "3448554"
            clientMetadata: string; // "0"
            updatedAt: string; // "2023-12-15T18:11:28.254Z"
            updatedAtHeight: string; // "3448554"
            postOnly: boolean; // false
            ticker: string; // "ETH-USD"
          }
        ];
      };
    }
  | {
      type: "subscribed";
      channel: "v4_orderbook";
      id: string; // "ETH-USD"
      contents: {
        bids: [
          {
            price: string; // "2229.8"
            size: string; // "1"
          }
        ];
        asks: [
          {
            price: string; // "2229.9"
            size: string; // "0.133"
          }
        ];
      };
    }
  | {
      type: "subscribed";
      channel: "v4_trades";
      id: string; // "ETH-USD"
      contents: {
        trades: [
          {
            id: string; // "003c52cf000000020000000b"
            side: string; //  "BUY"
            size: string; //  "0.135"
            price: string; //  "2228"
            createdAt: string; //  "2023-12-21T15:53:48.703Z"
            createdAtHeight: string; //  "3953359"
          }
        ];
      };
    }
  | {
      type: "channel_batch_data";
      channel: "v4_markets";
      version: string; // "1.0.0"
      contents: [
        | {
            trading: Record<
              string, // "BTC-USD"
              {
                priceChange24H: string; // "-349.25795"
                volume24H: string; // "69355897.4863"
                trades24H: number; // 49192
                openInterest: string; // "115.3193"
              }
            >;
          }
        | {
            oraclePrices: Record<
              string, // "BTC-USD"
              {
                oraclePrice: string; // "3.341360453"
                effectiveAt: string; // "2023-12-21T14:47:03.226Z"
                effectiveAtHeight: string; // "3949488"
                marketId: number; // 16
              }
            >;
          }
      ];
    }
  | {
      type: "channel_batch_data";
      channel: "v4_orderbook";
      version: string; // "1.0.0"
      id: string; // "ETH-USD"
      contents: [
        | {
            bids: [
              [
                string, // "2229.8"
                string // "1", "0" indicates removal
              ]
            ];
          }
        | {
            asks: [
              [
                string, // "2229.9"
                string // "0.133", "0" indicates removal
              ]
            ];
          }
      ];
    }
);
