import React, { useState } from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import ThemeToggle from '../utils/ThemeToggle';
import ConnectButton from '../components/ConnectButton';
import WalletInfo from '../components/WalletInfo';
import NavigationArrow from '../components/NavigationArrow';
import ExchangeBox from '../components/ExchangeBox';
import TransferBox from '../components/TransferBox';

const WalletPage = () => {
  const [currentBox, setCurrentBox] = useState('wallet');

  const handleNavigation = (direction) => {
    setCurrentBox((prev) => {
      if (direction === 'right') {
        return prev === 'wallet' ? 'exchange' : prev === 'exchange' ? 'transfer' : 'wallet';
      } else {
        return prev === 'wallet' ? 'transfer' : prev === 'transfer' ? 'exchange' : 'wallet';
      }
    });
  };

  const getNextLabel = (box) => (box === 'wallet' ? 'Exchange' : box === 'exchange' ? 'Transfer' : 'Wallet');
  const getPrevLabel = (box) => (box === 'wallet' ? 'Transfer' : box === 'transfer' ? 'Exchange' : 'Wallet');

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col items-center py-8 md:px-16 lg:px-32 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <header className="w-full max-w-5xl flex justify-between items-center px-4 mb-8">
          <ConnectButton />
          <ThemeToggle />
        </header>
        <div className="w-full max-w-5xl flex justify-center items-center relative">
          <NavigationArrow 
            direction="left" 
            onClick={() => handleNavigation('left')} 
            label={getPrevLabel(currentBox)} 
            className="absolute left-0 transform -translate-y-1/2 top-1/2"
          />
          <div className="relative w-full max-w-2xl min-h-[500px] bg-gray-100 dark:bg-gray-900 p-8 rounded-lg shadow-lg transition-all duration-300">
            <main className="flex flex-col items-center space-y-8 h-full">
              {currentBox === 'wallet' && <WalletInfo />}
              {currentBox === 'exchange' && <ExchangeBox />}
              {currentBox === 'transfer' && <TransferBox />}
            </main>
          </div>
          <NavigationArrow 
            direction="right" 
            onClick={() => handleNavigation('right')} 
            label={getNextLabel(currentBox)} 
            className="absolute right-0 transform -translate-y-1/2 top-1/2"
          />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default WalletPage;
