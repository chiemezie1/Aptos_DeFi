import React from 'react';
import { useWallet, WalletReadyState } from '@aptos-labs/wallet-adapter-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ConnectButton = () => {
  const { wallets, connected, connect, disconnect, isLoading } = useWallet();

  const onWalletDisconnectRequest = async () => {
    try {
      await disconnect();
      toast.success('Wallet successfully disconnected!');
    } catch (error) {
      console.error(error);
      toast.error('Failed to disconnect wallet. Please try again.');
    }
  };

  const onWalletConnectRequest = async (walletName) => {
    try {
      await connect(walletName);
      toast.success('Wallet successfully connected!');
    } catch (error) {
      console.error(error);
      toast.error('Failed to connect wallet. Please try again.');
    }
  };

  const WalletView = ({ wallet }) => {
    const isWalletReady = wallet.readyState === WalletReadyState.Installed || wallet.readyState === WalletReadyState.Loadable;
    return (
      <button
        onClick={() => onWalletConnectRequest(wallet.name)}
        className={`text-white bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-800 ${isWalletReady ? '' : 'opacity-50 cursor-not-allowed'}`}
        disabled={!isWalletReady}
      >
        {isWalletReady ? 'Connect Wallet' : 'Connect Wallet'}
      </button>
    );
  };

  if (isLoading || !wallets?.length) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <div className="flex justify-center">
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      {connected ? (
        <button
          onClick={onWalletDisconnectRequest}
          className="text-white bg-red-500 px-4 py-2 rounded-full hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-800"
        >
          Disconnect
        </button>
      ) : (
        <WalletView wallet={wallets[0]} />
      )}
    </div>
  );
};

export default ConnectButton;
