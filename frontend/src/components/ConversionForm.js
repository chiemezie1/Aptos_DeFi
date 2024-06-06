import React from 'react';

const ConversionForm = () => {
  return (
    <div className="relative bg-slate-800 rounded-[30px] p-6 shadow-lg w-full max-w-md">
            <div className="relative z-10">
        <div className="flex justify-center items-center gap-4 mb-6">
          <button className="bg-gradient-to-l from-blue-700 via-violet-600 to-fuchsia-500 text-white text-base font-semibold px-4 py-2 rounded-[25px] shadow border border-blue-700">Buy</button>
          <button className="text-stone-300 text-base font-normal px-4 py-2 rounded-[25px] shadow border border-blue-700">Sell</button>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 border border-white/50 rounded-[100px] px-4 py-2">
            <div className="bg-blue-950 rounded-[25px] px-4 py-2 text-white/80 text-xs">ETH</div>
            <div className="flex-grow text-right text-zinc-500 text-base font-normal">15.00 - 5000.00</div>
          </div>
          <div className="flex items-center gap-2 border border-white/50 rounded-[100px] px-4 py-2">
            <div className="bg-blue-950 rounded-[25px] px-4 py-2 text-white/80 text-xs">EUR</div>
            <div className="flex-grow text-right text-zinc-500 text-base font-normal">0.00</div>
          </div>
        </div>
        <div className="text-center text-stone-300 text-base font-normal mt-4">1 ETH = 2.682.81 EUR</div>
        <div className="flex justify-center mt-6">
          <button className="bg-gradient-to-l from-blue-700 via-violet-600 to-fuchsia-500 text-white text-base font-semibold px-6 py-2 rounded-[100px] border border-blue-700">Convert</button>
        </div>
      </div>
    </div>
  );
};

export default ConversionForm;
