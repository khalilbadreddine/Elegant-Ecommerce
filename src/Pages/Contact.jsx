import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="py-16 px-6 bg-white text-center">
        <Typography
          variant="h1"
          color="blue-gray"
          className="font-bold mb-6 text-3xl md:text-4xl lg:text-5xl"
        >
          We believe in sustainable decor. We’re passionate about life at home
          :).
        </Typography>
        <Typography
          variant="paragraph"
          color="gray"
          className="max-w-2xl mx-auto text-lg leading-relaxed"
        >
          Our features timeless furniture, with natural fabrics, curved lines,
          plenty of mirrors and classic design, which can be incorporated into
          any decor project. The pieces enchant for their sobriety, to last for
          generations, faithful to the shapes of each period, with a touch of
          the present.
        </Typography>
      </section>

      {/* About Section */}
      <section className="flex flex-wrap items-center py-12 px-4">
        <div className="w-full md:w-1/2  mb-8 md:mb-0">
          <Card className="">
            <CardHeader className="">
              <img
                src="https://images.unsplash.com/photo-1653634025872-4a2cf5c34d6f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="About sustainable decor"
                className=" object-cover h-full w-full"
              />
            </CardHeader>
          </Card>
        </div>
        <div className="w-full md:w-1/2 px-4 text-center md:text-left">
          <Typography
            variant="h2"
            color="blue-gray"
            className="font-semibold mb-4 text-2xl md:text-3xl"
          >
            About Us
          </Typography>
          <Typography
            color="gray"
            className="mb-6 text-lg leading-relaxed max-w-md mx-auto md:mx-0"
          >
            Elegant is a global decor store based in HCMC, Vietnam, since 2010.
            Our customer service team is ready to support you 24/7.
          </Typography>
          <Button
            variant="gradient"
            className="px-6 py-3 text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Shop Now →
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <Typography
          variant="h2"
          className="text-center font-bold mb-8 text-3xl md:text-4xl"
        >
          Contact Us
        </Typography>
        <div className="flex flex-wrap gap-8 justify-center mb-12">
          {[
            {
              icon: "📍",
              title: "Address",
              details: "234 Hai Trieu, HCMC, Vietnam",
            },
            { icon: "📞", title: "Contact Us", details: "+84 123 567 890" },
            { icon: "✉️", title: "Email", details: "hello@sustaindecor.com" },
          ].map(({ icon, title, details }, index) => (
            <Card
              key={index}
              className="w-72 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <CardBody className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 mx-auto flex items-center justify-center text-2xl mb-4">
                  {icon}
                </div>
                <Typography
                  variant="h5"
                  className="font-bold text-lg mb-2 text-blue-gray-900"
                >
                  {title}
                </Typography>
                <Typography color="gray">{details}</Typography>
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="flex flex-wrap md:flex-nowrap gap-8 justify-center">
          {/* Contact Form */}
          <form className="w-full max-w-lg bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            {["Full Name", "Email Address", "Message"].map((label, idx) => (
              <div className="mb-4" key={idx}>
                <Input
                  label={label}
                  size="lg"
                  type={label === "Message" ? "textarea" : "text"}
                  className="focus:ring focus:ring-blue-300 transition-all"
                />
              </div>
            ))}
            <Button
              type="submit"
              fullWidth
              variant="gradient"
              className="mt-4 text-lg py-3"
            >
              Send Message
            </Button>
          </form>

          {/* Google Map */}
          <Card className="w-full max-w-lg overflow-hidden border border-gray-300 rounded-lg shadow-lg">
            <iframe
              title="Google Map"
              className="w-full h-64 md:h-[400px] rounded"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10951345.431263549!2d-123.69692736078872!3d34.04892809693842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b08ebcb4c186b%3A0x423927b17fc1cd71!2sArizona%2C%20USA!5e0!3m2!1sen!2sus!4v1690229345386!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
              style={{ border: 0 }}
            ></iframe>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
