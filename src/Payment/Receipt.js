import React from 'react';

const Receipt = () => {
  return (
    <div className="max-w-72 mx-auto p-4 border border-gray-300 shadow-lg rounded-md bg-white">
      <div className="text-center mb-4">
        <h2 className="text-xl font-semibold">Payment Receipt</h2>
        <p className="text-gray-500">Booking Id #00302</p>
        <p className="text-gray-500">October 18, 2023</p>
      </div>
      <div className="mb-5">
        <p className="text-gray-700">Hello, Harish.</p>
        <p className="text-gray-500">Thank you for your Payment.</p>
      </div>
      <div className="border-t border-b py-2">
        <div className="flex justify-between text-sm font-medium">
          <span className="font-semibold">V.No</span>
          <span className="font-semibold">Type</span>
        </div>
        <div className="flex justify-between text-sm py-1">
          <span>Py05H0001</span>
          <span>Advance</span>
        </div>
      </div>
      <div className="mt-2 text-sm">
        <div className="flex justify-between">
          <span>Amount</span>
          <span>Rs.5000</span>
        </div>
      </div>
      <div className="mt-2 text-lg font-semibold flex justify-end">
        <span>Paid</span>
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-semibold">Billing Information</h3>
        <p className="text-sm">Philip Brooks</p>
        <p className="text-sm">134 Madison Ave.</p>
        <p className="text-sm">New York NY 00102</p>
        <p className="text-sm">United States</p>
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-semibold">Payment Information</h3>
        <p className="text-sm">Credit Card</p>
        <p className="text-sm">Card Type: Visa</p>
        <p className="text-sm">•••• •••• •••• 1234</p>
      </div>
    </div>
  );
};

export default Receipt;