import React from 'react';
import logo from '../Assets/img/logo1.png';

const Invoicea4 = () => {
  return (
    <div className="w-[190mm] mx-auto bg-white border border-gray-300 shadow-lg rounded-lg relative overflow-hidden p-8">
    {/* Ribbon */}
    <div className="absolute top-0 left-0 w-32 h-32">
  <div className="absolute transform rotate-[-45deg] bg-blue-500 text-white text-sm font-semibold py-1 left-[-26%] top-[20%] w-[120%] text-center shadow-md">
    Pending
  </div>
</div>
      {/* Header Section */}
      <header className="flex justify-between items-center mb-6 border-b pb-4">
        <div className='ml-10'><img src={logo} alt="Company Logo" /></div>
        <div className="text-right">
          <p className="font-semibold text-lg">Invoice #12345</p>
          <p className="text-gray-500 text-sm">Date Issued: 2024-11-04</p>
        </div>
      </header>

      {/* Company and Customer Info */}
      <section className="grid grid-cols-2 gap-8 mb-5">
        <div>
          <p className="font-bold text-lg mb-2">Office Address:</p>
          <p className="text-sm">Office 123, Street Name</p>
          <p className="text-sm">City, Country</p>
          <p className="text-sm">+1 (123) 456-7890</p>
          <p className="text-sm">companyemail@example.com</p>
        </div>
        <div>
          <p className="font-bold text-lg mb-2">Bill To:</p>
          <p className="text-sm">John Doe</p>
          <p className="text-sm">johndoe@example.com</p>
          <p className="text-sm">123-456-7890</p>
        </div>
      </section>

      {/* Vehicle and Driver Details */}
      <section className="mb-5">
        <p className="font-bold text-lg border-b pb-2">Vehicle & Driver Details</p>
        <div className="flex justify-between mt-2 text-sm">
          <div>
            <p><span className="font-semibold">Vehicle:</span> Toyota Camry 2022</p>
            <p><span className="font-semibold">Registration Number:</span> ABC-1234</p>
            <p><span className="font-semibold">Rental Period:</span> 2024-11-01 to 2024-11-04 (3 days 12 hours 44 minutes)</p>
          </div>
          <div>
            <p><span className="font-semibold">Driver:</span> Raj Kumar</p>
            <p><span className="font-semibold">Contact:</span> 987-654-3210</p>
          </div>
        </div>
      </section>

      {/* Invoice Items Table */}
      <table className="w-full border-collapse mb-5 text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-2 py-1 text-center">Description</th>
            <th className="border px-2 py-1 text-center">Cost per Day</th>
            <th className="border px-2 py-1 text-center">Qty (Days)</th>
            <th className="border px-2 py-1 text-center">Total Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border pl-4 py-1 text-left">Vehicle Rental</td>
            <td className="border pl-4 py-1 text-left"><i className="bi bi-currency-rupee"></i>3,500.00</td>
            <td className="border py-1 text-center">4</td>
            <td className="border pl-4 py-1 text-left"><i className="bi bi-currency-rupee"></i>14,000.00</td>
          </tr>
          <tr>
            <td className="border pl-4 py-1 text-left">Driver Charges</td>
            <td className="border pl-4 py-1 text-left"><i className="bi bi-currency-rupee"></i>1,000.00</td>
            <td className="border py-1 text-center">4</td>
            <td className="border pl-4 py-1 text-left"><i className="bi bi-currency-rupee"></i>4,000.00</td>
          </tr>
          <tr>
            <td className="border pl-4 py-1 text-left">Maintenance Charges</td>
            <td className="border pl-4 py-1 text-left"><i className="bi bi-currency-rupee"></i>500.00</td>
            <td className="border py-1 text-center">1</td>
            <td className="border pl-4 py-1 text-left"><i className="bi bi-currency-rupee"></i>500.00</td>
          </tr>
        </tbody>
      </table>

      {/* Invoice Summary */}
      <section className="text-right mb-5 text-sm">
        <div className="mb-1">Subtotal: <span className="font-semibold"><i className="bi bi-currency-rupee"></i>18,500.00</span></div>
        <div className="mb-1">GST (18%): <span className="font-semibold"><i className="bi bi-currency-rupee"></i>3,330.00</span></div>
        <div className="text-lg font-bold">Total: <i className="bi bi-currency-rupee"></i>21,830.00</div>
      </section>

      {/* Payment Details */}
      <section className="mb-5">
        <p className="font-bold text-lg border-b pb-2">Payment Details</p>
        <table className="w-full text-sm mt-2">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-2 py-1 text-center">Payment</th>
              <th className="border px-2 py-1 text-center">Amount</th>
              <th className="border px-2 py-1 text-center">Date & Time</th>
              <th className="border px-2 py-1 text-center">Mode</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border pl-4 py-1 text-left">Advance</td>
              <td className="border pl-4 py-1 text-left"><i className="bi bi-currency-rupee"></i>5,000.00</td>
              <td className="border pl-4 py-1 text-left">2024-10-30 10:30 AM</td>
              <td className="border pl-4 py-1 text-left">Bank Transfer</td>
            </tr>
            <tr>
              <td className="border pl-4 py-1 text-left">Remaining</td>
              <td className="border pl-4 py-1 text-left"><i className="bi bi-currency-rupee"></i>16,830.00</td>
              <td className="border pl-4 py-1 text-left">2024-11-04 02:00 PM</td>
              <td className="border pl-4 py-1 text-left">Credit Card</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Footer with Customer Quote */}
      <footer className="pt-4 border-t mt-5 text-sm">
        <p className="mb-2">Approved By: Harish M</p>
        <p className="text-gray-600 mb-4">Thank you for choosing the best vehicle rental service in town!</p>
        <blockquote className="text-center italic text-gray-500">
          "Exceptional service, reliable vehicles, and professional drivers. Highly recommended!" - A satisfied customer
        </blockquote>
      </footer>
    </div>
  );
};

export default Invoicea4;
