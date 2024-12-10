const FeatureContact = () => {
    const features = [
      {
        id: 1,
        icon: "🚚",
        title: "Address",
        description: "234 Hai Trieu, HCMC, Vietnam",
      },
      {
        id: 2,
        icon: "💳",
        title: "Contact Us",
        description: "+84 123 567 890",
      },
      {
        id: 3,
        icon: "🔒",
        title: "Email",
        description: "hello@sustaindecor.com",
      },
    ];
  
    return (
      <div className=" w-full grid grid-cols-2 lg:grid-cols-3 gap-10 p-12 ">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="   flex flex-col items-center text-center  bg-white p-6 rounded-lg shadow-md"
          >
            <span className="text-4xl mb-4">{feature.icon}</span>
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-sm text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default FeatureContact;