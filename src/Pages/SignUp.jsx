// src/Pages/SignUp.jsx

const SignUp = () => {
  const couchImage = "https://i.ibb.co/v1fX5fH/couch2.png"; // Import the image
  return (
    <div className="flex flex-col md:flex-row min-h-screen md:h-screen items-center justify-center ">
      {/* Left Section: Image with Logo on Top */}
      <div className="flex flex-col items-center justify-center w-full md:w-1/2 bg-[#F3F5F7] md:justify-start md:h-full p-6">
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
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Sign up</h1>
        <p className="text-sm text-gray-600 mb-8">
          Already have an account?{" "}
          <a href="/signin" className="text-green-600 hover:underline">
            Sign in
          </a>
        </p>

        {/* Form */}
        <form className="w-full max-w-md">
          {/* Name Input */}
          <div className="mb-6">
            <label
              className="block text-sm font-medium mb-2 text-gray-700"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:ring focus:ring-green-300 focus:outline-none"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Input */}
          <div className="mb-6">
            <label
              className="block text-sm font-medium mb-2 text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:ring focus:ring-green-300 focus:outline-none"
              placeholder="Enter your email"
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
          </div>

          {/* Terms and Conditions */}
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring focus:ring-green-300 focus:outline-none"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
              I agree to the{" "}
              <a href="#" className="text-green-600 hover:underline">
                Privacy Policy
              </a>{" "}
              &{" "}
              <a href="#" className="text-green-600 hover:underline">
                Terms of Use
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg text-sm font-semibold hover:bg-gray-800"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
