// // LoginPage.js
// import React from "react";

// function LoginPage() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
//         <h2 className="text-3xl font-bold text-center mb-6">Log in</h2>

//         {/* Login Form */}
//         <form className="space-y-6">
//           {/* Username Input */}
//           <div>
//             <label className="block mb-2 text-sm font-medium text-gray-700">
//               Username
//             </label>
//             <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
//               <i className="fas fa-user text-gray-500 mr-2"></i>
//               <input
//                 type="text"
//                 placeholder="Enter your username"
//                 className="w-full focus:outline-none"
//               />
//             </div>
//           </div>

//           {/* Password Input */}
//           <div>
//             <label className="block mb-2 text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
//               <i className="fas fa-lock text-gray-500 mr-2"></i>
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 className="w-full focus:outline-none"
//               />
//             </div>
//           </div>

//           {/* Remember Me */}
//           <div className="flex items-center">
//             <input type="checkbox" className="form-checkbox text-blue-600" />
//             <label className="ml-2 text-sm text-gray-600">Remember me</label>
//           </div>

//           {/* Login Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
//           >
//             Log in
//           </button>
//         </form>

//         {/* Forgot Password */}
//         <div className="text-center mt-4">
//           <a href="#" className="text-sm text-blue-500 hover:underline">
//             Forgot password?
//           </a>
//         </div>

//         {/* Sign Up Link */}
//         <div className="text-center mt-4">
//           <p className="text-sm text-gray-600">
//             Don't have an account?{" "}
//             <a href="#" className="text-blue-500 hover:underline">
//               Sign up
//             </a>
//           </p>
//         </div>

//         {/* Social Login */}
//         <div className="mt-6 text-center">
//           <p className="text-gray-600 text-sm">Or login with</p>
//           <div className="flex justify-center space-x-4 mt-3">
//             <i className="fab fa-facebook text-gray-600 text-2xl cursor-pointer hover:text-gray-900"></i>
//             <i className="fab fa-twitter text-gray-600 text-2xl cursor-pointer hover:text-gray-900"></i>
//             <i className="fab fa-google text-gray-600 text-2xl cursor-pointer hover:text-gray-900"></i>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;
