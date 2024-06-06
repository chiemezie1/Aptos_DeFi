import React from 'react';
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { MartianWallet } from "@martianwallet/aptos-wallet-adapter";
import { PontemWallet } from "@pontem/wallet-adapter-plugin";

const wallets = [new PetraWallet(), new MartianWallet(), new PontemWallet()];

export  function WalletProvider({ children }) {
  return (
    <AptosWalletAdapterProvider
      plugins={wallets}
      autoConnect={true}
      onError={(error) => {
        console.log("error", error);
      }}
    >      {children}
    </AptosWalletAdapterProvider>
  );
}
