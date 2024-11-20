import { TruckIcon, MoneyIcon, LockIcon, PhoneIcon } from "../Common/Icons";

const features = [
  {
    icon: <TruckIcon className="w-10 h-10 sm:w-12 sm:h-12" />,
    title: "Free Shipping",
    description: "Order above $200",
  },
  {
    icon: <MoneyIcon className="w-10 h-10 sm:w-12 sm:h-12" />,
    title: "Money-back",
    description: "30 days guarantee",
  },
  {
    icon: <LockIcon className="w-10 h-10 sm:w-12 sm:h-12" />,
    title: "Secure Payments",
    description: "Secured by Stripe",
  },
  {
    icon: <PhoneIcon className="w-10 h-10 sm:w-12 sm:h-12" />,
    title: "24/7 Support",
    description: "Phone and Email support",
  },
];

const FeaturesSection = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 mb-6 gap-4 rounded-xl">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col justify-center  gap-4 p-4 bg-[#F3F5F7] rounded shadow-sm hover:shadow-md transition-shadow min-h-[200px] md:min-h-[250px]"
        >
          {feature.icon}
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800">
              {feature.title}
            </h3>
            <p className=" w-[70%] text-sm sm:text-base text-gray-500 break-words sm:whitespace-normal">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesSection;
