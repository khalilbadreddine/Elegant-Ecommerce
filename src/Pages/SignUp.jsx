// src/Pages/SignUp.jsx
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../redux/actions/userActions';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo, loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) navigate('/');
  }, [userInfo, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen md:h-screen items-center justify-center ">
      {/* Left Section */}
      <div className="flex flex-col items-center justify-center w-full md:w-1/2 bg-[#F3F5F7] md:justify-start md:h-full p-6">
        <div className="text-2xl font-bold text-gray-800 mb-4 md:mt-8">3legont.</div>
        <img
          src="https://i.ibb.co/v1fX5fH/couch2.png"
          alt="Couch"
          className="w-full max-w-xs md:max-w-md h-auto"
        />
      </div>

      {/* Right Section: Form */}
      <div className="flex-1 bg-white w-full h-full md:w-1/2 flex flex-col items-center justify-center p-6 md:p-12 shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Sign up</h1>
        <p className="text-sm text-gray-600 mb-8">
          Already have an account?{' '}
          <a href="/signin" className="text-green-600 hover:underline">Sign in</a>
        </p>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:ring focus:ring-green-300 focus:outline-none"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:ring focus:ring-green-300 focus:outline-none"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6 relative">
            <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:ring focus:ring-green-300 focus:outline-none"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-6 flex items-center">
            <input type="checkbox" id="terms" className="h-4 w-4 text-green-600 border-gray-300 rounded"/>
            <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
              I agree to the{' '}
              <a href="#" className="text-green-600 hover:underline">Privacy Policy</a> &{' '}
              <a href="#" className="text-green-600 hover:underline">Terms of Use</a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg text-sm font-semibold hover:bg-gray-800"
            disabled={loading}
          >
            {loading ? 'Signing up...' : 'Sign up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
