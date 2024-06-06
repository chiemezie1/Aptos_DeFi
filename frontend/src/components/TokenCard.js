
import React from 'react';

const TokenCard = ({ title, percentage, change, price, percentageChange }) => {
  return (
    <div className="bg-indigo-950 rounded-[20px] shadow p-4 flex flex-col gap-4">
      <div className="flex items-center mb-4">
        <div className="bg-orange-400 rounded-full w-4 h-4 mr-2"></div>
        <div className="text-white text-base font-semibold">{title}</div>
      </div>
      <div className="text-emerald-400 text-sm font-light">{percentage}</div>
      <div className="text-stone-300 text-sm font-light">{change}</div>
      <div className="flex justify-between items-center mt-4">
        <div className="text-stone-300 text-sm font-medium">{price}</div>
        <div className="text-stone-300 text-sm font-medium">{percentageChange}</div>
      </div>
      <div className="flex justify-around mt-4">
        <div className="bg-indigo-900 rounded-[5px] px-2 py-1 text-white text-sm">30m</div>
        <div className="border border-indigo-900 rounded-[5px] px-2 py-1 text-zinc-500 text-sm">1h</div>
        <div className="border border-indigo-900 rounded-[5px] px-2 py-1 text-zinc-500 text-sm">1d</div>
      </div>
    </div>
  );
};

export default TokenCard;
