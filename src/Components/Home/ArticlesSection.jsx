const articles = [
  {
    id: 1,
    title: "7 Ways to Decorate Your Home",
    image: "/assets/article1.jpeg",
    link: "#",
  },
  {
    id: 2,
    title: "Kitchen Organization",
    image: "/assets/article2.jpeg",
    link: "#",
  },
  {
    id: 3,
    title: "Decor Your Bedroom",
    image: "/assets/article3.jpeg",
    link: "#",
  },
];

const ArticlesSection = () => {
  return (
    <section className="p-2 md:p-0">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Articles</h2>
        <a
          href="#"
          className="text-sm font-medium text-blue-500 hover:underline"
        >
          More Articles →
        </a>
      </div>

      {/* Articles Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {articles.map((article) => (
          <div
            key={article.id}
            className=" overflow-hidden transition transform hover:scale-105"
          >
            {/* Article Image */}
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-60 object-cover sm:h-56"
            />
            {/* Article Content */}
            <div className="py-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {article.title}
              </h3>
              <a
                href={article.link}
                className=" inline-block text-sm underline"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticlesSection;
