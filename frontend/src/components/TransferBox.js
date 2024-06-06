import React, { useState, useEffect } from 'react';

const TransferBox = () => {
  const [currency, setCurrency] = useState('USDC');
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [error, setError] = useState('');
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [newBeneficiaryName, setNewBeneficiaryName] = useState('');
  const [newBeneficiaryAddress, setNewBeneficiaryAddress] = useState('');
  const [showBeneficiariesModal, setShowBeneficiariesModal] = useState(false);

  useEffect(() => {
    const storedBeneficiaries = JSON.parse(localStorage.getItem('beneficiaries')) || [];
    setBeneficiaries(storedBeneficiaries);
  }, []);

  const handleCurrencyChange = (e) => setCurrency(e.target.value);
  const handleAmountChange = (e) => setAmount(e.target.value);
  const handleRecipientChange = (e) => setRecipient(e.target.value);

  const validateAndTransfer = (e) => {
    e.preventDefault();
    // Add validation and transfer logic here
  };

  const addBeneficiary = () => {
    if (newBeneficiaryName && newBeneficiaryAddress && !beneficiaries.some(b => b.address === newBeneficiaryAddress)) {
      const updatedBeneficiaries = [...beneficiaries, { name: newBeneficiaryName, address: newBeneficiaryAddress }];
      localStorage.setItem('beneficiaries', JSON.stringify(updatedBeneficiaries));
      setBeneficiaries(updatedBeneficiaries);
      setNewBeneficiaryName('');
      setNewBeneficiaryAddress('');
    }
  };

  const removeBeneficiary = (address) => {
    const updatedBeneficiaries = beneficiaries.filter(b => b.address !== address);
    localStorage.setItem('beneficiaries', JSON.stringify(updatedBeneficiaries));
    setBeneficiaries(updatedBeneficiaries);
  };

  const handleSelectBeneficiary = (address) => {
    setRecipient(address);
    setShowBeneficiariesModal(false);
  };

  return (
    <div className="bg-gray-200 dark:bg-gray-700 p-6 rounded-lg shadow-md w-full max-w-md transition-transform transform hover:scale-105">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100 text-center">Transfer Funds</h2>
      <form onSubmit={validateAndTransfer} className="space-y-6 text-gray-800 dark:text-gray-200">
        <div>
          <label htmlFor="currency" className="text-sm font-medium block mb-2">Currency</label>
          <select
            id="currency"
            value={currency}
            onChange={handleCurrencyChange}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200"
          >
            <option value="USDC">USDC</option>
            <option value="EURC">EURC</option>
            <option value="ETH">ETH</option>
          </select>
        </div>
        <div>
          <label htmlFor="amount" className="text-sm font-medium block mb-2">Amount</label>
          <input
            type="text"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200"
            placeholder="Enter amount"
          />
        </div>
        <div>
          <label htmlFor="recipient" className="text-sm font-medium block mb-2">Recipient Address</label>
          <input
            type="text"
            id="recipient"
            value={recipient}
            onChange={handleRecipientChange}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200"
            placeholder="Enter recipient's address"
          />
        </div>
        {error && <p className="text-red-500 text-xs italic">{error}</p>}
        <button
          type="button"
          onClick={() => setShowBeneficiariesModal(true)}
          className="w-full bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mb-4"
        >
          Select from Beneficiaries
        </button>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Transfer
        </button>
      </form>

      {showBeneficiariesModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 text-gray-800 dark:text-gray-200">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md w-full">
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">Manage Beneficiaries</h3>
            <input
              type="text"
              value={newBeneficiaryName}
              onChange={(e) => setNewBeneficiaryName(e.target.value)}
              placeholder="Name"
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md mb-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
            />
            <input
              type="text"
              value={newBeneficiaryAddress}
              onChange={(e) => setNewBeneficiaryAddress(e.target.value)}
              placeholder="Address"
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md mb-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
            />
            <button
              onClick={addBeneficiary}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4 w-full"
            >
              Add
            </button>
            <ul className="space-y-2">
              {beneficiaries.map((b, index) => (
                <li key={index} className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className="truncate" style={{ maxWidth: "200px" }}>
                      <span
                        onClick={() => handleSelectBeneficiary(b.address)}
                        className="cursor-pointer"
                        title={b.address}
                      >
                        {b.name} - {b.address}
                      </span>
                    </div>
                    <button
                      onClick={() => removeBeneficiary(b.address)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setShowBeneficiariesModal(false)}
              className="mt-4 w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransferBox;
