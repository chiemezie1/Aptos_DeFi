import React, { useState } from 'react';

const ExchangeBox = ({ onSwap }) => {
  const [amountA, setAmountA] = useState('');
  const [amountB, setAmountB] = useState('');
  const [tokenA, setTokenA] = useState('ETH');
  const [tokenB, setTokenB] = useState('EUR');

  const handleSwap = () => {
    onSwap(parseFloat(amountA), parseFloat(amountB));
  };

  return (
    <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg w-full max-w-md transition-transform transform hover:scale-105">
      <div className="relative z-10">
        <div className="text-pink-600 dark:text-pink-300 text-4xl md:text-5xl font-semibold text-center p-2 mb-4">
          Swap Tokens
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 rounded-full px-4 py-2 transition-shadow focus-within:shadow-lg">
            <select
              className="bg-white dark:bg-gray-700 rounded-full p-4 text-gray-900 dark:text-gray-200 text-sm focus:outline-none"
              value={tokenA}
              onChange={(e) => setTokenA(e.target.value)}
            >
              <option value="ETH">ETH</option>
              <option value="BTC">BTC</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
            <input
              className="flex-grow bg-transparent text-gray-900 dark:text-gray-200 text-base placeholder-gray-400 focus:outline-none"
              type="number"
              placeholder="Amount"
              value={amountA}
              onChange={(e) => setAmountA(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 rounded-full p-4 transition-shadow focus-within:shadow-lg">
            <select
              className="bg-white dark:bg-gray-700 rounded-full px-4 py-2 text-gray-900 dark:text-gray-200 text-sm focus:outline-none"
              value={tokenB}
              onChange={(e) => setTokenB(e.target.value)}
            >
              <option value="ETH">ETH</option>
              <option value="BTC">BTC</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
            <input
              className="flex-grow bg-transparent text-gray-900 dark:text-gray-200 text-base placeholder-gray-400 focus:outline-none"
              type="number"
              placeholder="Amount"
              value={amountB}
              onChange={(e) => setAmountB(e.target.value)}
            />
          </div>
        </div>

        <div className="text-center text-gray-600 dark:text-gray-400 text-sm font-normal mt-4">
          1 {tokenA} = 2.682.81 {tokenB}
        </div>
        <div className="flex justify-center mt-36">
          <button
            onClick={handleSwap}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white text-base font-semibold px-6 py-2 rounded-full shadow-md transition-all transform hover:scale-105"
          >
            Convert
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExchangeBox;
