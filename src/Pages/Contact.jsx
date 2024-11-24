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
      <section className="py-16 px-6 bg-white">
        <Typography variant="h1" color="blue-gray" className="font-bold mb-4">
          We believe in sustainable decor. We’re passionate about life at home.
        </Typography>
        <Typography variant="paragraph" color="gray" className="max-w-xl">
          Our features timeless furniture, with natural fabrics, curved lines,
          plenty of mirrors and classic design, which can be incorporated into
          any decor project. The pieces enchant for their sobriety, to last for
          generations, faithful to the shapes of each period, with a touch of
          the present.
        </Typography>
      </section>

      {/* About Section */}
      <section className="flex flex-wrap items-center py-12 px-4 bg-gray-50">
        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
          <Card className="shadow-lg">
            <CardHeader className="p-0">
              <img
                src="https://images.unsplash.com/photo-1653634025872-4a2cf5c34d6f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="About sustainable decor"
                className="rounded-lg"
              />
            </CardHeader>
          </Card>
        </div>
        <div className="w-full md:w-1/2 px-4 text-center md:text-left">
          <Typography
            variant="h2"
            color="blue-gray"
            className="font-semibold mb-4"
          >
            About Us
          </Typography>
          <Typography color="gray" className="mb-4">
            Elegant is a global decor store based in HCMC, Vietnam, since 2010.
            Our customer service team is ready to support you 24/7.
          </Typography>
          <Button variant="gradient">Shop Now →</Button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <Typography variant="h2" className="text-center font-bold mb-8">
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
            <Card key={index} className="w-72 shadow-md">
              <CardBody className="text-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 mx-auto flex items-center justify-center text-2xl mb-4">
                  {icon}
                </div>
                <Typography variant="h5" className="font-bold mb-2">
                  {title}
                </Typography>
                <Typography color="gray">{details}</Typography>
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="flex flex-wrap md:flex-nowrap gap-8 justify-center">
          {/* Contact Form */}
          <form className="w-full max-w-lg bg-gray-50 p-6 rounded shadow-lg">
            {["Full Name", "Email Address", "Message"].map((label, idx) => (
              <div className="mb-4" key={idx}>
                <Input
                  label={label}
                  size="lg"
                  type={label === "Message" ? "textarea" : "text"}
                />
              </div>
            ))}
            <Button type="submit" fullWidth variant="gradient" className="mt-4">
              Send Message
            </Button>
          </form>

          {/* Google Map */}
          <Card className="w-full max-w-lg overflow-hidden">
            <iframe
              title="Google Map"
              className="w-full h-64"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6!2d106.695!3d10.776!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2zMTAuNzc2!5e0!3m2!1sen!2s!4v1631675678679!5m2!1sen!2s"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
