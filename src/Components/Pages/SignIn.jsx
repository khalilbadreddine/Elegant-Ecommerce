// src/Pages/SignIn.jsx
import couchImage from "/assets/couch2.png"; // Import the image

const SignIn = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen items-center justify-center bg-gray-50">
      {/* Left Section: Image */}
      <div className="hidden md:block w-1/2 h-full">
        <img
          src={couchImage}
          alt="Couch"
          className="object-cover h-full w-full"
        />
      </div>

      {/* Right Section: Form */}
      <div className="w-full md:w-1/2 flex flex-col items-center px-6 py-8 bg-white">
        <h1 className="text-3xl font-bold mb-4">Sign In</h1>
        <p className="text-sm text-gray-600 mb-6">
          Don’t have an account?{" "}
          <a href="/signup" className="text-black underline">
            Sign up
          </a>
        </p>
        <form className="w-full max-w-sm">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="w-4 h-4 mr-2" />
              <label htmlFor="remember" className="text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-black underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
