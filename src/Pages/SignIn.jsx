// src/Pages/SignIn.jsx
import couchImage from "https://i.ibb.co/v1fX5fH/couch2.png"; // Import the image

const SignIn = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen md:h-screen items-center justify-center bg-gray-100">
      {/* Left Section: Image with Logo on Top */}
      <div className="flex flex-col items-center justify-center w-full md:w-1/2 bg-[#F3F5F7]  md:justify-start md:h-full p-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800 mb-4 md:mt-8">
          3legont.
        </div>
        {/* Image */}
        <img
          src={couchImage}
          alt="Couch"
          className="w-full max-w-xs md:max-w-md h-auto"
        />
      </div>

      {/* Right Section: Form */}
      <div className="flex-1 bg-white w-full h-full md:w-1/2 flex flex-col items-center justify-center p-6 md:p-12 shadow-lg">
        {/* Form Heading */}
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Sign In</h1>
        <p className="text-sm text-gray-600 mb-8">
          Don’t have an account yet?{" "}
          <a href="/signup" className="text-green-600 hover:underline">
            Sign Up
          </a>
        </p>

        {/* Form */}
        <form className="w-full max-w-md">
          {/* Username or Email Input */}
          <div className="mb-6">
            <label
              className="block text-sm font-medium mb-2 text-gray-700"
              htmlFor="email"
            >
              Your username or email address
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:ring focus:ring-green-300 focus:outline-none"
              placeholder="Enter your username or email"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6 relative">
            <label
              className="block text-sm font-medium mb-2 text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:ring focus:ring-green-300 focus:outline-none"
              placeholder="Enter your password"
            />
            {/* Add an icon here for password visibility if needed */}
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring focus:ring-green-300 focus:outline-none"
              />
              <label
                htmlFor="rememberMe"
                className="ml-2 text-sm text-gray-600"
              >
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-green-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg text-sm font-semibold hover:bg-gray-800"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
