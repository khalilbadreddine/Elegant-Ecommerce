import PropTypes from "prop-types"; // Import PropTypes
import { MailIcon } from "./Icons";

const InputWithIcon = ({ id, name, icon: Icon, placeholder }) => (
  <div className="flex items-center w-full">
    <span className="p-2">
      <Icon />
    </span>
    <input
      id={id}
      name={name}
      type="email"
      placeholder={placeholder}
      className="flex-grow p-2 bg-transparent border-b border-gray-300 focus:border-gray-500 focus:outline-none"
    />
  </div>
);

// Prop validation for InputWithIcon
InputWithIcon.propTypes = {
  id: PropTypes.string.isRequired, // `id` must be a string and is required
  name: PropTypes.string.isRequired, // `name` must be a string and is required
  icon: PropTypes.elementType.isRequired, // `icon` must be a React component (function or class)
  placeholder: PropTypes.string, // `placeholder` must be a string
};

const StyledImage = ({ src, alt, className }) => (
  <img
    src={src}
    alt={alt}
    className={`w-auto h-[350px] object-cover transform scale-125 ${className}`}
    loading="lazy"
  />
);

// Prop validation for StyledImage
StyledImage.propTypes = {
  src: PropTypes.string.isRequired, // `src` must be a string and is required
  alt: PropTypes.string.isRequired, // `alt` must be a string and is required
  className: PropTypes.string, // `className` must be a string
};

const NewsletterSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email?.value.trim();
    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }
    console.log("Email submitted:", email);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 md:p-0 overflow-hidden bg-gray-100">
      <StyledImage
        src="/assets/plakar2.png"
        alt="Left side"
        className="-translate-x-16 hidden md:block flex-1"
      />

      <div className="flex flex-col items-center justify-center flex-1 px-10 py-10">
        <section>
          <h2 className="text-2xl font-bold text-center mb-2">
            Join Our Newsletter
          </h2>
          <p className="text-gray-600 text-center mb-4">
            Sign up for deals, new products, and promotions.
          </p>
        </section>
        <form
          onSubmit={handleSubmit}
          className="group flex items-center w-full mt-4 space-x-2"
        >
          <InputWithIcon
            id="newsletter-email"
            name="email"
            icon={MailIcon}
            placeholder="Email address"
          />
          <button
            type="submit"
            className="px-4 py-2 text-black bg-transparent border-b border-black group-hover:bg-gray-200"
          >
            Signup
          </button>
        </form>
      </div>

      <StyledImage
        src="/assets/couch2.png"
        alt="Right side"
        className="translate-x-16 hidden md:block"
      />
    </div>
  );
};

export default NewsletterSection;
