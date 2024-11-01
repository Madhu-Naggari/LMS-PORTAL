import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // Import Link from react-router-dom
import Googlelogo from './assets/images/Googlelogo.png'
import githublogo from './assets/images/githublogo.jpg'
import Linkedinlogo from './assets/images/Linkedin.jpg'

const Login = () => {

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-300 ">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          <NavLink to='/'>
                      <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
          </NavLink>
        </form>
        <div className="mt-4 text-center">or</div>
        <div className="mt-4 flex flex-col space-y-4">
          <button className="flex items-center justify-center border border-gray-300 rounded-lg p-2 hover:bg-gray-100">
            <img src={Googlelogo} alt="Google" className="w-8 h-5 mr-2" />
            Login with Google
          </button>
          <button className="flex items-center justify-center border border-gray-300 rounded-lg p-2 hover:bg-gray-100">
            <img src={githublogo} alt="GitHub" className="w-8 h-5 mr-2" />
            Login with GitHub
          </button>
          <button className="flex items-center justify-center border border-gray-300 rounded-lg p-2 hover:bg-gray-100">
            <img src={Linkedinlogo} alt="LinkedIn" className="w-8 h-5 mr-2" />
            Login with LinkedIn
          </button>
        </div>
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Don’t have an account?{' '}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
