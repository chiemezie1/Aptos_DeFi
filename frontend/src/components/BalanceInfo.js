import React from 'react';

const BalanceInfo = ({ balance }) => {
  return (
    <div className="flex flex-col items-center gap-2 text-center mb-8">
      <div className="text-gray-800 dark:text-white text-sm md:text-base">Available balance</div>
      <div className="text-pink-600 dark:text-pink-300 text-4xl md:text-5xl font-semibold">{balance}</div>
      <div className="bg-violet-600/25 dark:bg-violet-600/50 text-violet-600 rounded-[25px] border border-violet-600 px-4 py-2 mt-2">
        <span className="text-white text-sm font-medium">Aptos Blockchain</span>
      </div>
    </div>
  );
};

export default BalanceInfo;
