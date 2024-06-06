import { Aptos, AptosConfig, Network } from '@aptos-labs/ts-sdk';

const config = new AptosConfig({ network: Network.DEVNET }); // Use DEVNET for testing
export const aptos = new Aptos(config);
