const OurServices = () => {
  const ourServices = [
    {
      title: "Lighting Design",
      description:
        "Achieve the perfect balance of ambient, task, and accent lighting for a functional atmosphere.",
      icon: "/images/Lighting-design-icon.png",
    },
    {
      title: "Interior Design",
      description:
        "From concept to completion, we oversee every detail to bring your vision to life efficiently.",
      icon: "/images/Interior-design-icon.png",
    },
    {
      title: "Outdoor Design",
      description:
        "Celebrate the changing seasons with our seasonal outdoor decor services.",
      icon: "/images/Outdoor-design-icon.png",
    },
  ];

  return (
    <section id="services" className="container mx-auto my-28 px-4">
      {/* Section Title */}
      <div className="flex items-center gap-4 mb-12">
        <div className="flex-1 h-0.5 bg-black max-w-[100px]"></div>
        <h2 className="text-3xl font-semibold text-black whitespace-nowrap">
          Our Services
        </h2>
      </div>

      {/* Our Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ourServices.map((service, index) => (
          <div key={index} className="p-6">
            <div className="flex items-center mb-4">
              <img
                src={service.icon}
                alt={`${service.title} icon`}
                className="w-12 h-12 mr-4"
              />
              <h3 className="text-[30px] font-semibold mb-2">
                {service.title}
              </h3>
            </div>
            <p className="text-[#545454] ml-16">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
