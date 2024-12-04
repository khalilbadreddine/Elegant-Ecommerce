/* eslint-disable react/prop-types */
// src/components/Icons.jsx
// Instagram Icon
export const Instagram = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="2"
      y="2"
      width="20"
      height="20"
      rx="4"
      stroke="#141718"
      strokeWidth="1.5"
    />
    <circle cx="18" cy="6" r="1" fill="#141718" />
    <circle cx="12" cy="12" r="5" stroke="#141718" strokeWidth="1.5" />
  </svg>
);

// YouTube Icon
export const YouTube = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="2"
      y="3"
      width="20"
      height="18"
      rx="4"
      stroke="#141718"
      strokeWidth="1.5"
    />
    <path
      d="M10.4472 8.72361L15.2111 11.1056C15.9482 11.4741 15.9482 12.5259 15.2111 12.8944L10.4472 15.2764C9.78231 15.6088 9 15.1253 9 14.382V9.61803C9 8.87465 9.78231 8.39116 10.4472 8.72361Z"
      stroke="#141718"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
// Hamburger Icon (if needed)
export const Hamburger = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 8H17M7 12H17M7 16H17"
      stroke="#141718"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// Cart Icon
export const Cart = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9 6L9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7V6"
      stroke="#141718"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.6115 3H8.38848C6.43313 3 4.76436 4.41365 4.44291 6.3424L2.77624 16.3424C2.36988 18.7805 4.25006 21 6.72182 21H17.2781C19.7499 21 21.6301 18.7805 21.2237 16.3424L19.557 6.3424C19.2356 4.41365 17.5668 3 15.6115 3Z"
      stroke="#141718"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

export const DesktopListIcon = () => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 2C0.5 1.60218 0.658035 1.22064 0.93934 0.93934C1.22064 0.658035 1.60218 0.5 2 0.5H5C5.39782 0.5 5.77936 0.658035 6.06066 0.93934C6.34196 1.22064 6.5 1.60218 6.5 2V5C6.5 5.39782 6.34196 5.77936 6.06066 6.06066C5.77936 6.34196 5.39782 6.5 5 6.5H2C1.60218 6.5 1.22064 6.34196 0.93934 6.06066C0.658035 5.77936 0.5 5.39782 0.5 5V2ZM8 2C8 1.60218 8.15804 1.22064 8.43934 0.93934C8.72064 0.658035 9.10218 0.5 9.5 0.5H12.5C12.8978 0.5 13.2794 0.658035 13.5607 0.93934C13.842 1.22064 14 1.60218 14 2V5C14 5.39782 13.842 5.77936 13.5607 6.06066C13.2794 6.34196 12.8978 6.5 12.5 6.5H9.5C9.10218 6.5 8.72064 6.34196 8.43934 6.06066C8.15804 5.77936 8 5.39782 8 5V2ZM15.5 2C15.5 1.60218 15.658 1.22064 15.9393 0.93934C16.2206 0.658035 16.6022 0.5 17 0.5H20C20.3978 0.5 20.7794 0.658035 21.0607 0.93934C21.342 1.22064 21.5 1.60218 21.5 2V5C21.5 5.39782 21.342 5.77936 21.0607 6.06066C20.7794 6.34196 20.3978 6.5 20 6.5H17C16.6022 6.5 16.2206 6.34196 15.9393 6.06066C15.658 5.77936 15.5 5.39782 15.5 5V2ZM0.5 9.5C0.5 9.10218 0.658035 8.72064 0.93934 8.43934C1.22064 8.15804 1.60218 8 2 8H5C5.39782 8 5.77936 8.15804 6.06066 8.43934C6.34196 8.72064 6.5 9.10218 6.5 9.5V12.5C6.5 12.8978 6.34196 13.2794 6.06066 13.5607C5.77936 13.842 5.39782 14 5 14H2C1.60218 14 1.22064 13.842 0.93934 13.5607C0.658035 13.2794 0.5 12.8978 0.5 12.5V9.5ZM8 9.5C8 9.10218 8.15804 8.72064 8.43934 8.43934C8.72064 8.15804 9.10218 8 9.5 8H12.5C12.8978 8 13.2794 8.15804 13.5607 8.43934C13.842 8.72064 14 9.10218 14 9.5V12.5C14 12.8978 13.842 13.2794 13.5607 13.5607C13.2794 13.842 12.8978 14 12.5 14H9.5C9.10218 14 8.72064 13.842 8.43934 13.5607C8.15804 13.2794 8 12.8978 8 12.5V9.5ZM15.5 9.5C15.5 9.10218 15.658 8.72064 15.9393 8.43934C16.2206 8.15804 16.6022 8 17 8H20C20.3978 8 20.7794 8.15804 21.0607 8.43934C21.342 8.72064 21.5 9.10218 21.5 9.5V12.5C21.5 12.8978 21.342 13.2794 21.0607 13.5607C20.7794 13.842 20.3978 14 20 14H17C16.6022 14 16.2206 13.842 15.9393 13.5607C15.658 13.2794 15.5 12.8978 15.5 12.5V9.5ZM0.5 17C0.5 16.6022 0.658035 16.2206 0.93934 15.9393C1.22064 15.658 1.60218 15.5 2 15.5H5C5.39782 15.5 5.77936 15.658 6.06066 15.9393C6.34196 16.2206 6.5 16.6022 6.5 17V20C6.5 20.3978 6.34196 20.7794 6.06066 21.0607C5.77936 21.342 5.39782 21.5 5 21.5H2C1.60218 21.5 1.22064 21.342 0.93934 21.0607C0.658035 20.7794 0.5 20.3978 0.5 20V17ZM8 17C8 16.6022 8.15804 16.2206 8.43934 15.9393C8.72064 15.658 9.10218 15.5 9.5 15.5H12.5C12.8978 15.5 13.2794 15.658 13.5607 15.9393C13.842 16.2206 14 16.6022 14 17V20C14 20.3978 13.842 20.7794 13.5607 21.0607C13.2794 21.342 12.8978 21.5 12.5 21.5H9.5C9.10218 21.5 8.72064 21.342 8.43934 21.0607C8.15804 20.7794 8 20.3978 8 20V17ZM15.5 17C15.5 16.6022 15.658 16.2206 15.9393 15.9393C16.2206 15.658 16.6022 15.5 17 15.5H20C20.3978 15.5 20.7794 15.658 21.0607 15.9393C21.342 16.2206 21.5 16.6022 21.5 17V20C21.5 20.3978 21.342 20.7794 21.0607 21.0607C20.7794 21.342 20.3978 21.5 20 21.5H17C16.6022 21.5 16.2206 21.342 15.9393 21.0607C15.658 20.7794 15.5 20.3978 15.5 20V17Z"
        fill="#6C7275"
      />
    </svg>
  );
};

// Close Icon React.forwardRef((props, ref) =>
export const Close = (props) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.292893 0.292893C0.683417 -0.0976309 1.31658 -0.0976309 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683418 14.0976 0.292893 13.7071C-0.0976309 13.3166 -0.0976309 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418 0.292893 0.292893Z"
      fill="#6C7275"
    />
  </svg>
);

// Search Icon
export const Search = (props) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.5 17.5L21 21M20 10.5C20 5.25329 15.7467 1 10.5 1C5.25329 1 1 5.25329 1 10.5C1 15.7467 5.25329 20 10.5 20C15.7467 20 20 15.7467 20 10.5Z"
      stroke="#141718"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Profile = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.5588 18.5488C16.5654 15.8918 14.0036 14 11 14C7.99638 14 5.4346 15.8918 4.44117 18.5488M17.5588 18.5488C19.6672 16.7154 21 14.0134 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 14.0134 2.33285 16.7154 4.44117 18.5488M17.5588 18.5488C15.8031 20.0756 13.5095 21 11 21C8.49052 21 6.19694 20.0756 4.44117 18.5488M14 8C14 9.65685 12.6569 11 11 11C9.34315 11 8 9.65685 8 8C8 6.34315 9.34315 5 11 5C12.6569 5 14 6.34315 14 8Z"
      stroke="#141718"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

export const TruckIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M28 38V14M28 38H32M28 38H18M28 14C28 9.58172 24.4183 6 20 6H12C7.58172 6 4 9.58172 4 14V30C4 33.7304 6.55333 36.8645 10.0077 37.7499M28 14H34.4182C35.4344 14 36.4126 14.3868 37.154 15.0819L42.7358 20.3148C43.5424 21.071 44 22.1273 44 23.2329V34C44 36.2091 42.2091 38 40 38M40 38C40 40.2091 38.2091 42 36 42C33.7909 42 32 40.2091 32 38M40 38C40 35.7909 38.2091 34 36 34C33.7909 34 32 35.7909 32 38M18 38C18 40.2091 16.2091 42 14 42C11.7909 42 10 40.2091 10 38C10 37.916 10.0026 37.8326 10.0077 37.7499M18 38C18 35.7909 16.2091 34 14 34C11.8748 34 10.1368 35.6573 10.0077 37.7499"
      stroke="#141718"
      strokeWidth="2.5"
    />
    <path
      d="M20 16H16"
      stroke="#141718"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 24H12"
      stroke="#141718"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MoneyIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="4"
      y="8"
      width="40"
      height="32"
      rx="4"
      stroke="#141718"
      strokeWidth="2.5"
    />
    <circle
      cx="4"
      cy="4"
      r="4"
      transform="matrix(1 0 0 -1 20 28)"
      stroke="#141718"
      strokeWidth="2.5"
    />
    <circle
      cx="2"
      cy="2"
      r="2"
      transform="matrix(1 0 0 -1 34 26)"
      fill="#141718"
    />
    <circle
      cx="2"
      cy="2"
      r="2"
      transform="matrix(1 0 0 -1 10 26)"
      fill="#141718"
    />
  </svg>
);

export const LockIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32 16H16M32 16C36.4183 16 40 19.5817 40 24V36C40 40.4183 36.4183 44 32 44H16C11.5817 44 8 40.4183 8 36V24C8 19.5817 11.5817 16 16 16M32 16V12C32 7.58172 28.4183 4 24 4C19.5817 4 16 7.58172 16 12V16M24 32V28"
      stroke="#141718"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

export const PhoneIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M38 34V30.7081C38 29.0725 37.0042 27.6017 35.4856 26.9942L31.4173 25.3669C29.4857 24.5943 27.2844 25.4312 26.354 27.292L26 28C26 28 21 27 17 23C13 19 12 14 12 14L12.708 13.646C14.5688 12.7156 15.4057 10.5143 14.6331 8.58271L13.0058 4.51444C12.3983 2.99581 10.9275 2 9.29187 2H6C3.79086 2 2 3.79086 2 6C2 23.6731 16.3269 38 34 38C36.2091 38 38 36.2091 38 34Z"
      stroke="#141718"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
  </svg>
);
export const MailIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.07667 6.53075C4.23291 6.01858 4.70918 5.646 5.27246 5.646H19.2725C19.8358 5.646 20.312 6.01858 20.4683 6.53075L12.2725 11.9946L4.07667 6.53075ZM2.5225 6.88226C2.52236 6.89026 2.52235 6.89826 2.52246 6.90625V16.896C2.52246 18.4148 3.75368 19.646 5.27246 19.646H19.2725C20.7912 19.646 22.0225 18.4148 22.0225 16.896V6.90622M20.5225 8.29738V16.896C20.5225 17.5864 19.9628 18.146 19.2725 18.146H5.27246C4.58211 18.146 4.02246 17.5864 4.02246 16.896V8.29738L11.8564 13.52C12.1084 13.688 12.4366 13.688 12.6885 13.52L20.5225 8.29738ZM22.0224 6.88229C22.015 5.36981 20.7867 4.146 19.2725 4.146H5.27246C3.75826 4.146 2.52989 5.3698 2.5225 6.88226"
        fill="#141718"
      />
    </svg>
  );
};
export const FiveStars = () => {
  return (
    <svg
      width="98"
      height="27"
      viewBox="0 0 88 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M79.5383 2.00376C79.7091 1.59312 80.2909 1.59312 80.4617 2.00376L81.9987 5.69936C82.0707 5.87247 82.2336 5.99076 82.4204 6.00574L86.4102 6.3256C86.8535 6.36114 87.0332 6.91439 86.6955 7.20373L83.6557 9.80758C83.5133 9.92956 83.4512 10.1209 83.4947 10.3033L84.4234 14.1966C84.5265 14.6292 84.0559 14.9711 83.6764 14.7393L80.2606 12.653C80.1006 12.5553 79.8994 12.5553 79.7394 12.653L76.3236 14.7393C75.9441 14.9711 75.4735 14.6292 75.5766 14.1966L76.5053 10.3033C76.5488 10.1209 76.4867 9.92956 76.3443 9.80758L73.3045 7.20373C72.9668 6.91439 73.1465 6.36114 73.5898 6.3256L77.5796 6.00574C77.7664 5.99076 77.9293 5.87247 78.0013 5.69936L79.5383 2.00376Z"
        fill="#343839"
      />
      <path
        d="M61.5383 2.00376C61.7091 1.59312 62.2909 1.59312 62.4617 2.00376L63.9987 5.69936C64.0707 5.87247 64.2336 5.99076 64.4204 6.00574L68.4102 6.3256C68.8535 6.36114 69.0332 6.91439 68.6955 7.20373L65.6557 9.80758C65.5133 9.92956 65.4512 10.1209 65.4947 10.3033L66.4234 14.1966C66.5265 14.6292 66.0559 14.9711 65.6764 14.7393L62.2606 12.653C62.1006 12.5553 61.8994 12.5553 61.7394 12.653L58.3236 14.7393C57.9441 14.9711 57.4735 14.6292 57.5766 14.1966L58.5053 10.3033C58.5488 10.1209 58.4867 9.92956 58.3443 9.80758L55.3045 7.20373C54.9668 6.91439 55.1465 6.36114 55.5898 6.3256L59.5796 6.00574C59.7664 5.99076 59.9293 5.87247 60.0013 5.69936L61.5383 2.00376Z"
        fill="#343839"
      />
      <path
        d="M43.5383 2.00376C43.7091 1.59312 44.2909 1.59312 44.4617 2.00376L45.9987 5.69936C46.0707 5.87247 46.2336 5.99076 46.4204 6.00574L50.4102 6.3256C50.8535 6.36114 51.0332 6.91439 50.6955 7.20373L47.6557 9.80758C47.5133 9.92956 47.4512 10.1209 47.4947 10.3033L48.4234 14.1966C48.5265 14.6292 48.0559 14.9711 47.6764 14.7393L44.2606 12.653C44.1006 12.5553 43.8994 12.5553 43.7394 12.653L40.3236 14.7393C39.9441 14.9711 39.4735 14.6292 39.5766 14.1966L40.5053 10.3033C40.5488 10.1209 40.4867 9.92956 40.3443 9.80758L37.3045 7.20373C36.9668 6.91439 37.1465 6.36114 37.5898 6.3256L41.5796 6.00574C41.7664 5.99076 41.9293 5.87247 42.0013 5.69936L43.5383 2.00376Z"
        fill="#343839"
      />
      <path
        d="M25.5383 2.00376C25.7091 1.59312 26.2909 1.59312 26.4617 2.00376L27.9987 5.69936C28.0707 5.87247 28.2336 5.99076 28.4204 6.00574L32.4102 6.3256C32.8535 6.36114 33.0332 6.91439 32.6955 7.20373L29.6557 9.80758C29.5133 9.92956 29.4512 10.1209 29.4947 10.3033L30.4234 14.1966C30.5265 14.6292 30.0559 14.9711 29.6764 14.7393L26.2606 12.653C26.1006 12.5553 25.8994 12.5553 25.7394 12.653L22.3236 14.7393C21.9441 14.9711 21.4735 14.6292 21.5766 14.1966L22.5053 10.3033C22.5488 10.1209 22.4867 9.92956 22.3443 9.80758L19.3045 7.20373C18.9668 6.91439 19.1465 6.36114 19.5898 6.3256L23.5796 6.00574C23.7664 5.99076 23.9293 5.87247 24.0013 5.69936L25.5383 2.00376Z"
        fill="#343839"
      />
      <path
        d="M7.53834 2.00376C7.70914 1.59312 8.29086 1.59312 8.46166 2.00376L9.99874 5.69936C10.0707 5.87247 10.2336 5.99076 10.4204 6.00574L14.4102 6.3256C14.8535 6.36114 15.0332 6.91439 14.6955 7.20373L11.6557 9.80758C11.5133 9.92956 11.4512 10.1209 11.4947 10.3033L12.4234 14.1966C12.5265 14.6292 12.0559 14.9711 11.6764 14.7393L8.26063 12.653C8.10062 12.5553 7.89938 12.5553 7.73937 12.653L4.32363 14.7393C3.94408 14.9711 3.47345 14.6292 3.57665 14.1966L4.50534 10.3033C4.54884 10.1209 4.48665 9.92956 4.34426 9.80758L1.30453 7.20373C0.966758 6.91439 1.14652 6.36114 1.58985 6.3256L5.57955 6.00574C5.76645 5.99076 5.92925 5.87247 6.00126 5.69936L7.53834 2.00376Z"
        fill="#343839"
      />
    </svg>
  );
};
// src/Components/Sm-Components/Icons.jsx

export const List = () => (
  <svg
    width="18"
    height="19"
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 12.75C10 12.1533 10.2371 11.581 10.659 11.159C11.081 10.7371 11.6533 10.5 12.25 10.5L15.75 10.5C16.3467 10.5 16.919 10.7371 17.341 11.159C17.7629 11.581 18 12.1533 18 12.75L18 16.25C18 16.8467 17.7629 17.419 17.341 17.841C16.919 18.2629 16.3467 18.5 15.75 18.5L12.25 18.5C11.6533 18.5 11.081 18.2629 10.659 17.841C10.2371 17.419 10 16.8467 10 16.25L10 12.75ZM10 2.75C10 2.15326 10.2371 1.58097 10.659 1.15901C11.081 0.737053 11.6533 0.5 12.25 0.5L15.75 0.5C16.3467 0.5 16.919 0.737053 17.341 1.15901C17.7629 1.58097 18 2.15326 18 2.75L18 6.25C18 6.84674 17.7629 7.41903 17.341 7.84099C16.919 8.26295 16.3467 8.5 15.75 8.5L12.25 8.5C11.6533 8.5 11.081 8.26295 10.659 7.84099C10.2371 7.41903 10 6.84674 10 6.25L10 2.75ZM4.37114e-07 12.75C4.1103e-07 12.1533 0.237053 11.581 0.65901 11.159C1.08097 10.7371 1.65326 10.5 2.25 10.5L5.75 10.5C6.34674 10.5 6.91903 10.7371 7.34099 11.159C7.76295 11.581 8 12.1533 8 12.75L8 16.25C8 16.8467 7.76295 17.419 7.34099 17.841C6.91903 18.2629 6.34674 18.5 5.75 18.5L2.25 18.5C1.65326 18.5 1.08097 18.2629 0.65901 17.841C0.237054 17.419 6.16188e-07 16.8467 5.90104e-07 16.25L4.37114e-07 12.75ZM0 2.75C-2.60842e-08 2.15326 0.237053 1.58097 0.65901 1.15901C1.08097 0.737053 1.65326 0.500001 2.25 0.500001L5.75 0.5C6.34674 0.5 6.91903 0.737053 7.34099 1.15901C7.76295 1.58097 8 2.15326 8 2.75L8 6.25C8 6.84674 7.76295 7.41903 7.34099 7.84099C6.91903 8.26295 6.34674 8.5 5.75 8.5L2.25 8.5C1.65326 8.5 1.08097 8.26295 0.65901 7.84099C0.237053 7.41903 1.79074e-07 6.84674 1.5299e-07 6.25L0 2.75Z"
      fill="#6C7275"
    />
    <path d="M3 18.5L3 10.502L15 10.502L15 18.5L3 18.5Z" fill="#6C7275" />
    <path
      d="M3 8.49805L3 0.500001L15 0.5L15 8.49805L3 8.49805Z"
      fill="#6C7275"
    />
  </svg>
);

export const Grid = () => (
  <svg
    width="18"
    height="19"
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.75 10.5C6.34674 10.5 6.91903 10.7371 7.34099 11.159C7.76295 11.581 8 12.1533 8 12.75V16.25C8 16.8467 7.76295 17.419 7.34099 17.841C6.91903 18.2629 6.34674 18.5 5.75 18.5H2.25C1.65326 18.5 1.08097 18.2629 0.65901 17.841C0.237053 17.419 0 16.8467 0 16.25V12.75C0 12.1533 0.237053 11.581 0.65901 11.159C1.08097 10.7371 1.65326 10.5 2.25 10.5H5.75ZM15.75 10.5C16.3467 10.5 16.919 10.7371 17.341 11.159C17.7629 11.581 18 12.1533 18 12.75V16.25C18 16.8467 17.7629 17.419 17.341 17.841C16.919 18.2629 16.3467 18.5 15.75 18.5H12.25C11.6533 18.5 11.081 18.2629 10.659 17.841C10.2371 17.419 10 16.8467 10 16.25V12.75C10 12.1533 10.2371 11.581 10.659 11.159C11.081 10.7371 11.6533 10.5 12.25 10.5H15.75ZM5.75 0.5C6.34674 0.5 6.91903 0.737053 7.34099 1.15901C7.76295 1.58097 8 2.15326 8 2.75V6.25C8 6.84674 7.76295 7.41903 7.34099 7.84099C6.91903 8.26295 6.34674 8.5 5.75 8.5H2.25C1.65326 8.5 1.08097 8.26295 0.65901 7.84099C0.237053 7.41903 0 6.84674 0 6.25V2.75C0 2.15326 0.237053 1.58097 0.65901 1.15901C1.08097 0.737053 1.65326 0.5 2.25 0.5H5.75ZM15.75 0.5C16.3467 0.5 16.919 0.737053 17.341 1.15901C17.7629 1.58097 18 2.15326 18 2.75V6.25C18 6.84674 17.7629 7.41903 17.341 7.84099C16.919 8.26295 16.3467 8.5 15.75 8.5H12.25C11.6533 8.5 11.081 8.26295 10.659 7.84099C10.2371 7.41903 10 6.84674 10 6.25V2.75C10 2.15326 10.2371 1.58097 10.659 1.15901C11.081 0.737053 11.6533 0.5 12.25 0.5H15.75Z"
      fill="#6C7275"
    />
  </svg>
);

export const GridList = () => (
  <svg
    width="18"
    height="19"
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.75 10.5C6.34674 10.5 6.91903 10.7371 7.34099 11.159C7.76295 11.581 8 12.1533 8 12.75V16.25C8 16.8467 7.76295 17.419 7.34099 17.841C6.91903 18.2629 6.34674 18.5 5.75 18.5H2.25C1.65326 18.5 1.08097 18.2629 0.65901 17.841C0.237053 17.419 0 16.8467 0 16.25V12.75C0 12.1533 0.237053 11.581 0.65901 11.159C1.08097 10.7371 1.65326 10.5 2.25 10.5H5.75ZM15.75 10.5C16.3467 10.5 16.919 10.7371 17.341 11.159C17.7629 11.581 18 12.1533 18 12.75V16.25C18 16.8467 17.7629 17.419 17.341 17.841C16.919 18.2629 16.3467 18.5 15.75 18.5H12.25C11.6533 18.5 11.081 18.2629 10.659 17.841C10.2371 17.419 10 16.8467 10 16.25V12.75C10 12.1533 10.2371 11.581 10.659 11.159C11.081 10.7371 11.6533 10.5 12.25 10.5H15.75ZM5.75 0.5C6.34674 0.5 6.91903 0.737053 7.34099 1.15901C7.76295 1.58097 8 2.15326 8 2.75V6.25C8 6.84674 7.76295 7.41903 7.34099 7.84099C6.91903 8.26295 6.34674 8.5 5.75 8.5H2.25C1.65326 8.5 1.08097 8.26295 0.65901 7.84099C0.237053 7.41903 0 6.84674 0 6.25V2.75C0 2.15326 0.237053 1.58097 0.65901 1.15901C1.08097 0.737053 1.65326 0.5 2.25 0.5H5.75ZM15.75 0.5C16.3467 0.5 16.919 0.737053 17.341 1.15901C17.7629 1.58097 18 2.15326 18 2.75V6.25C18 6.84674 17.7629 7.41903 17.341 7.84099C16.919 8.26295 16.3467 8.5 15.75 8.5H12.25C11.6533 8.5 11.081 8.26295 10.659 7.84099C10.2371 7.41903 10 6.84674 10 6.25V2.75C10 2.15326 10.2371 1.58097 10.659 1.15901C11.081 0.737053 11.6533 0.5 12.25 0.5H15.75Z"
      fill="#6C7275"
    />
  </svg>
);

export const HeartIcon = ({ color = "#6C7275" }) => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 20 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.577 3.76422C10.2546 4.07365 9.74545 4.07365 9.42301 3.76422L8.84601 3.2105C8.17065 2.56239 7.25829 2.16667 6.25001 2.16667C4.17894 2.16667 2.50001 3.8456 2.50001 5.91667C2.50001 7.90219 3.57483 9.54171 5.12647 10.8888C6.67944 12.237 8.53618 13.1312 9.64555 13.5876C9.87751 13.683 10.1225 13.683 10.3545 13.5876C11.4638 13.1312 13.3206 12.237 14.8735 10.8888C16.4252 9.54171 17.5 7.90218 17.5 5.91667C17.5 3.8456 15.8211 2.16667 13.75 2.16667C12.7417 2.16667 11.8294 2.56239 11.154 3.2105L10.577 3.76422ZM10 2.00798C9.02676 1.074 7.70542 0.5 6.25001 0.5C3.25847 0.5 0.833344 2.92512 0.833344 5.91667C0.833344 11.2235 6.64196 14.1542 9.0115 15.1289C9.64965 15.3914 10.3504 15.3914 10.9885 15.1289C13.3581 14.1542 19.1667 11.2235 19.1667 5.91667C19.1667 2.92512 16.7416 0.5 13.75 0.5C12.2946 0.5 10.9733 1.074 10 2.00798Z"
      fill={color} // Dynamic color
    />
  </svg>
);

export const StarIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.53834 1.10997C6.70914 0.699319 7.29086 0.699318 7.46166 1.10996L8.99874 4.80556C9.07075 4.97868 9.23355 5.09696 9.42045 5.11194L13.4102 5.4318C13.8535 5.46734 14.0332 6.02059 13.6955 6.30993L10.6557 8.91378C10.5133 9.03576 10.4512 9.22715 10.4947 9.40952L11.4234 13.3028C11.5265 13.7354 11.0559 14.0773 10.6764 13.8455L7.26063 11.7592C7.10062 11.6615 6.89938 11.6615 6.73937 11.7592L3.32363 13.8455C2.94408 14.0773 2.47345 13.7354 2.57665 13.3028L3.50534 9.40952C3.54884 9.22715 3.48665 9.03576 3.34426 8.91378L0.304527 6.30993C-0.0332418 6.02059 0.14652 5.46734 0.589847 5.4318L4.57955 5.11194C4.76645 5.09696 4.92925 4.97868 5.00126 4.80556L6.53834 1.10997Z"
      fill="#343839"
    />
  </svg>
);

// Dropdown Icon
export const Dropdown = (props) => (
  <svg
    width="15"
    height="8"
    viewBox="0 0 15 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.27246 1L7.27246 7L13.2725 1"
      stroke="#141718"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Wishlist Icon
export const Wishlist = (props) => (
  <svg
    width="22"
    height="19"
    viewBox="0 0 22 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.6924 4.58373C11.3055 4.95505 10.6945 4.95505 10.3076 4.58373L9.6152 3.91927C8.80477 3.14154 7.70994 2.66667 6.5 2.66667C4.01472 2.66667 2 4.68139 2 7.16667C2 9.5493 3.28979 11.5167 5.15176 13.1332C7.01532 14.7511 9.2434 15.8241 10.5746 16.3717C10.853 16.4862 11.147 16.4862 11.4254 16.3717C12.7566 15.8241 14.9847 14.7511 16.8482 13.1332C18.7102 11.5167 20 9.54929 20 7.16667C20 4.68139 17.9853 2.66667 15.5 2.66667C14.2901 2.66667 13.1952 3.14154 12.3848 3.91927L11.6924 4.58373ZM11 2.47624C9.83211 1.35548 8.24649 0.666672 6.5 0.666672C2.91015 0.666672 0 3.57682 0 7.16667C0 13.5349 6.97034 17.0517 9.81379 18.2214C10.5796 18.5364 11.4204 18.5364 12.1862 18.2214C15.0297 17.0517 22 13.5349 22 7.16667C22 3.57682 19.0899 0.666672 15.5 0.666672C13.7535 0.666672 12.1679 1.35548 11 2.47624Z"
      fill="#141718"
    />
  </svg>
);

// Social Media Icons (Group of Icons)
// src/components/Icons.jsx

export const Facebook = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="2"
      y="2"
      width="20"
      height="20"
      rx="4"
      stroke="#141718"
      strokeWidth="1.5"
    />
    <path
      d="M15 7H13C12.4477 7 12 7.44772 12 8V10H15L14.5 12H12V17H10V12H8V10H10V8C10 6.89543 10.8954 6 12 6H15V7Z"
      fill="#141718"
    />
  </svg>
);

// src/components/Icons.jsx

export const Ticket = (props) => (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.512 9.89042L14.2667 10.5991L14.2667 10.5991L14.512 9.89042ZM14.5121 6.10958L14.7574 6.81831L14.5121 6.10958ZM2.48791 9.89042L2.73328 10.5991H2.73328L2.48791 9.89042ZM2.48791 6.10958L2.24254 6.81831H2.24254L2.48791 6.10958ZM11.0303 6.53033C11.3232 6.23744 11.3232 5.76256 11.0303 5.46967C10.7374 5.17678 10.2625 5.17678 9.96965 5.46967L11.0303 6.53033ZM5.96965 9.46967C5.67676 9.76256 5.67676 10.2374 5.96965 10.5303C6.26254 10.8232 6.73742 10.8232 7.03031 10.5303L5.96965 9.46967ZM4.49998 13.25C3.44143 13.25 2.58331 12.3919 2.58331 11.3333H1.08331C1.08331 13.2203 2.61301 14.75 4.49998 14.75V13.25ZM14.4166 11.3333C14.4166 12.3919 13.5585 13.25 12.5 13.25V14.75C14.387 14.75 15.9166 13.2203 15.9166 11.3333H14.4166ZM12.5 2.75C13.5585 2.75 14.4166 3.60812 14.4166 4.66667H15.9166C15.9166 2.77969 14.387 1.25 12.5 1.25V2.75ZM4.49998 1.25C2.61301 1.25 1.08331 2.77969 1.08331 4.66667H2.58331C2.58331 3.60812 3.44143 2.75 4.49998 2.75V1.25ZM14.7574 9.18169C14.267 9.01191 13.9166 8.54591 13.9166 8H12.4166C12.4166 9.20473 13.1909 10.2267 14.2667 10.5991L14.7574 9.18169ZM13.9166 8C13.9166 7.45409 14.267 6.98809 14.7574 6.81831L14.2667 5.40086C13.1909 5.77332 12.4166 6.79527 12.4166 8H13.9166ZM3.08331 8C3.08331 8.54591 2.73292 9.01191 2.24254 9.18169L2.73328 10.5991C3.80908 10.2267 4.58331 9.20473 4.58331 8H3.08331ZM2.24254 6.81831C2.73292 6.98809 3.08331 7.45409 3.08331 8H4.58331C4.58331 6.79527 3.80908 5.77332 2.73328 5.40086L2.24254 6.81831ZM15.9166 5.33333V4.66667H14.4166V5.33333H15.9166ZM14.4166 10.6667V11.3333H15.9166V10.6667H14.4166ZM1.08331 10.6667V11.3333H2.58331V10.6667H1.08331ZM2.58331 5.33333V4.66667H1.08331V5.33333H2.58331ZM12.5 13.25H4.49998V14.75H12.5V13.25ZM12.5 1.25H4.49998V2.75H12.5V1.25ZM2.24254 9.18169C1.73782 9.35643 1.08331 9.84831 1.08331 10.6667H2.58331C2.58331 10.6809 2.57995 10.6932 2.57715 10.6998C2.57494 10.705 2.57577 10.7005 2.58662 10.6885C2.61142 10.661 2.66274 10.6236 2.73328 10.5991L2.24254 9.18169ZM14.7574 6.81831C15.2621 6.64357 15.9166 6.15169 15.9166 5.33333H14.4166C14.4166 5.31907 14.42 5.30681 14.4228 5.30022C14.425 5.29499 14.4242 5.29953 14.4133 5.31154C14.3885 5.33899 14.3372 5.37643 14.2667 5.40086L14.7574 6.81831ZM2.73328 5.40086C2.66274 5.37643 2.61142 5.33899 2.58662 5.31154C2.57577 5.29953 2.57494 5.29499 2.57715 5.30022C2.57995 5.30681 2.58331 5.31907 2.58331 5.33333H1.08331C1.08331 6.15169 1.73782 6.64357 2.24254 6.81831L2.73328 5.40086ZM14.2667 10.5991C14.3372 10.6236 14.3885 10.661 14.4133 10.6885C14.4242 10.7005 14.425 10.705 14.4228 10.6998C14.42 10.6932 14.4166 10.6809 14.4166 10.6667H15.9166C15.9166 9.84831 15.2621 9.35643 14.7574 9.18169L14.2667 10.5991ZM6.41665 6C6.41665 5.95398 6.45396 5.91667 6.49998 5.91667V7.41667C7.28238 7.41667 7.91665 6.7824 7.91665 6H6.41665ZM6.49998 5.91667C6.546 5.91667 6.58331 5.95398 6.58331 6H5.08331C5.08331 6.7824 5.71758 7.41667 6.49998 7.41667V5.91667ZM6.58331 6C6.58331 6.04602 6.546 6.08333 6.49998 6.08333V4.58333C5.71758 4.58333 5.08331 5.2176 5.08331 6H6.58331ZM6.49998 6.08333C6.45396 6.08333 6.41665 6.04602 6.41665 6H7.91665C7.91665 5.2176 7.28238 4.58333 6.49998 4.58333V6.08333ZM10.4166 10C10.4166 9.95398 10.454 9.91667 10.5 9.91667V11.4167C11.2824 11.4167 11.9166 10.7824 11.9166 10H10.4166ZM10.5 9.91667C10.546 9.91667 10.5833 9.95398 10.5833 10H9.08331C9.08331 10.7824 9.71758 11.4167 10.5 11.4167V9.91667ZM10.5833 10C10.5833 10.046 10.546 10.0833 10.5 10.0833V8.58333C9.71758 8.58333 9.08331 9.2176 9.08331 10H10.5833ZM10.5 10.0833C10.454 10.0833 10.4166 10.046 10.4166 10H11.9166C11.9166 9.2176 11.2824 8.58333 10.5 8.58333V10.0833ZM9.96965 5.46967L5.96965 9.46967L7.03031 10.5303L11.0303 6.53033L9.96965 5.46967Z"
      fill="#141718"
    />
  </svg>
);
