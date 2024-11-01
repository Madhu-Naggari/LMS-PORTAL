// import React, { useState } from 'react';
// // import QRCode from 'qrcode.react';

// const Upi = () => {
//   // State for handling manual UPI ID entry
//   const [upiID, setUpiID] = useState('');
//   const [amount] = useState('₹500'); // Example amount
//   const [offer] = useState('Upto ₹100 cashback on UPI');


//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
//       <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
//         <h1 className="text-2xl font-semibold mb-4 text-center text-blue-500">UPI Payment</h1>

//         {/* Price Summary */}
//         <div className="text-center mb-4">
//           <p className="text-lg font-semibold">Amount to Pay</p>
//           <p className="text-3xl font-bold text-green-600">{amount}</p>
//         </div>

//         {/* UPI QR Code */}
//         <div className="flex justify-center mb-4">
//           {/* <QRCode
//             value={upiLink}
//             size={150}
//             bgColor="#FFFFFF"
//             fgColor="#000000"
//             className="rounded-lg shadow-md"
//           /> */}
//         </div>

//         {/* Offer Details */}
//         <div className="text-center mb-4">
//           {/* <p className="text-sm text-gray-500">Scan the QR code with any UPI app</p> */}
//           <p className="text-xs text-green-600 font-medium mt-2">{offer}</p>
//         </div>

//         {/* UPI ID Entry */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-1" htmlFor="upiID">Or enter UPI ID</label>
//           <input
//             type="text"
//             id="upiID"
//             value={upiID}
//             onChange={(e) => setUpiID(e.target.value)}
//             placeholder="your-upi-id@bank"
//             className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 border-gray-300 outline-none"
//           />
//           <button
//             className="w-full mt-3 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
//             onClick={() => alert(`Payment link sent to ${upiID}`)}
//             disabled={!upiID}
//           >
//             Proceed with UPI ID
//           </button>
//         </div>
        
//         {/* Security Notice */}
//         <p className="text-center text-xs text-gray-400 mt-4">
//           Payments are securely processed through UPI.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Upi;



import React from 'react';
// import QRCode from 'qrcode.react';

const PaymentInterface = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg flex w-full max-w-4xl">
        {/* Left Side - Price Summary */}
        <div className="bg-blue-600 text-white p-6 w-1/3 rounded-l-lg">
          <div className="text-center">
            <div className="text-lg font-bold">CompanyName</div>
            <p className="text-xs mt-1">Razorpay Trusted Business</p>
          </div>
          <div className="mt-8">
            <p className="text-sm font-semibold">Price Summary</p>
            <p className="text-4xl font-bold mt-2">₹490</p>
          </div>
          <div className="mt-8 text-sm space-y-3">
            <div className="flex items-center justify-between">
              <p>Using as</p>
              <p className="font-semibold">+91 00000000000</p>
            </div>
            <button className="bg-blue-700 text-white px-3 py-2 rounded-lg w-full mt-4 flex items-center justify-center">
              Offers on UPI
            </button>
          </div>
          <div className="mt-8 text-center text-xs">
            Secured by <span className="font-bold">Razorpay</span>
          </div>
        </div>

        {/* Right Side - Payment Options */}
        <div className="p-6 w-2/3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Payment Options</h2>
            <button className="text-gray-500 hover:text-gray-700">&times;</button>
          </div>

          {/* Offers */}
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm font-semibold">Available Offers</p>
            <p className="text-xs bg-gray-200 px-2 py-1 rounded-full">UPTO ₹200 CRED cashback on CRED</p>
          </div>

          {/* Payment Methods */}
          <div className="mt-4">
            <p className="text-sm font-semibold mb-2">Recommended</p>
            <div className="bg-gray-100 p-4 rounded-lg space-y-4">
              {/* UPI Option */}
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">UPI</p>
                <p className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">Upto ₹200 cashback</p>
              </div>

              {/* Cards */}
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">Cards</p>
                <div className="flex space-x-2">
                  <span className="bg-gray-300 px-4 py-1  rounded-md flex items-center justify-center text-xs">Visa</span>
                  <span className="bg-gray-300 px-4 py-1  rounded-md flex items-center justify-center text-xs">Amex</span>
                </div>
              </div>

              {/* Netbanking */}
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">Netbanking</p>
                <div className="flex space-x-2">
                  <span className="bg-gray-300 px-4 py-1  rounded-md flex items-center justify-center text-xs">SBI</span>
                  <span className="bg-gray-300 px-4 py-1  rounded-md flex items-center justify-center text-xs">HDFC</span>
                </div>
              </div>

              {/* Wallet */}
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">Wallet</p>
                <div className="flex space-x-2">
                  <span className="bg-gray-300 px-4 py-1 rounded-md flex items-center justify-center text-xs">Paytm</span>
                </div>
              </div>

              {/* Pay Later */}
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">Pay Later</p>
                <span className="bg-gray-300 px-4 py-1  rounded-md flex items-center justify-center text-xs">PayPal</span>
              </div>
            </div>
          </div>

          {/* UPI QR Code */}
          <div className="mt-6 bg-gray-100 p-4 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <p className="text-sm font-semibold">UPI QR</p>
              {/* <QRCode
                value="upi://pay?pa=your-upi-id@bank&pn=Your Name&am=490&cu=INR"
                size={150}
                bgColor="#FFFFFF"
                fgColor="#000000"
                className="mt-4"
              /> */}
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" alt="" className='w-32 h-32' />
              <p className="text-xs mt-2 text-gray-500">Scan with any UPI app</p>
              <p className="text-xs bg-green-100 text-green-600 px-2 py-1 mt-2 rounded-full inline-block">Upto ₹200 cashback</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInterface;