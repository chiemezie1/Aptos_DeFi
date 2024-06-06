import React, { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useWallet } from '@aptos-labs/wallet-adapter-react';
import BalanceInfo from './BalanceInfo';
import TokenCard from './TokenCard';

const WalletInfo = () => {
  const [copySuccess, setCopySuccess] = useState('');
  const { account } = useWallet();
  const [walletAddress, setWalletAddress] = useState('');
  const balance = '5.00 ETH';

  useEffect(() => {
    if (account?.address) {
      setWalletAddress(account.address);
    }
  }, [account]);

  const handleCopy = () => {
    setCopySuccess('Copied!');
    setTimeout(() => setCopySuccess(''), 2000);
  };


  return (
    <div className="bg-gray-300 text-center dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md transition-transform transform hover:scale-105">
      <BalanceInfo balance={balance}/>
      <div className="mb-4">
        <p className="text-sm font-bold text-gray-700 dark:text-gray-300">Address</p>

        <div className="flex justify-evenly bg-gray-400 dark:bg-gray-700 rounded-lg px-4 py-2">
          <p className="text-xl font-bold text-gray-700 dark:text-gray-300 text-center truncate max-w-xs">
            {walletAddress || 'Not Connected'}
          </p>
          <CopyToClipboard text={walletAddress} onCopy={handleCopy}>
            <button className="ml-2 text-blue-600 dark:text-blue-300 font-bold justify-end" disabled={!walletAddress}>
              Copy
            </button>
          </CopyToClipboard>
        </div>
        {copySuccess && <span className="text-green-500 font-semibold ml-2">{copySuccess}</span>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <TokenCard
          title="USD Coin"
          percentage="+22.4%"
          change="in 30m"
          price="$45,875.98"
          percentageChange="-12.77(%20)"
        />
        <TokenCard
          title="USD Coin"
          percentage="+22.4%"
          change="in 30m"
          price="$45,875.98"
          percentageChange="-12.77(%20)"
        />
      </div>
      <div>
      </div>
    </div>
  );
};

export default WalletInfo;
