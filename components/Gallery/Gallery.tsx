import Image from "next/image";

const galleryImages = [
  {
    src: "/images/Gallery/automatic filling line.PNG",
    title: "Automatic Filling Line",
  },
  {
    src: "/images/Gallery/production line.PNG",
    title: "Production Line",
  },
  {
    src: "/images/Gallery/PROCESS1.PNG",
    title: "Water Treatment Process",
  },
  {
    src: "/images/Gallery/PROCESS2.PNG",
    title: "Advanced Purification Process",
  },
  {
    src: "/images/Gallery/qc lab.PNG",
    title: "Quality Control Laboratory",
  },
  {
    src: "/images/Gallery/qc.PNG",
    title: "Quality Inspection",
  },
  {
    src: "/images/Gallery/sanitization.PNG",
    title: "Bottle Sanitization",
  },
  {
    src: "/images/Gallery/clean and sanitized bottles.PNG",
    title: "Clean & Sanitized Bottles",
  },
  {
    src: "/images/Gallery/finished production.PNG",
    title: "Finished Production",
  },
  {
    src: "/images/Gallery/storage.PNG",
    title: "Finished Goods Storage",
  },
  {
    src: "/images/Gallery/loading.PNG",
    title: "Loading for Distribution",
  },
  {
    src: "/images/Gallery/truck.PNG",
    title: "Transportation Fleet",
  },
  {
    src: "/images/Gallery/delivered.PNG",
    title: "Delivered to Customers",
  },
  {
    src: "/images/Gallery/office.png",
    title: "Office Installation",
  },
  {
    src: "/images/Gallery/home installation.PNG",
    title: "Home Installation",
  },
  {
    src: "/images/Gallery/hotel.PNG",
    title: "Hotels",
  },
  {
    src: "/images/Gallery/school.PNG",
    title: "Schools",
  },
  {
    src: "/images/Gallery/rural.PNG",
    title: "Supporting Rural Communities",
  },
  {
    src: "/images/Gallery/rural 2.PNG",
    title: "Community Water Access",
  },
  {
    src: "/images/Gallery/team 1.PNG",
    title: "The Hi Spring Team",
  },
];

export default function Gallery() {
  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-flex rounded-full bg-blue-100 text-blue-700 px-5 py-2 font-semibold">
            Our Gallery
          </span>

          <h2 className="mt-6 text-5xl lg:text-6xl font-black text-gray-900">
            Inside Every Drop of
            <span className="text-blue-700"> Hi Spring</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover our manufacturing excellence, quality assurance,
            distribution network, dedicated team, and the communities
            we proudly serve across Ethiopia.
          </p>

        </div>

        {/* Gallery */}

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {galleryImages.map((image, index) => (

            <div
              key={index}
              className="group overflow-hidden rounded-[32px] bg-white shadow-xl hover:shadow-2xl transition-all duration-500"
            >

              <div className="overflow-hidden">

                <Image
                  src={image.src}
                  alt={image.title}
                  width={1200}
                  height={675}
                  className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110"
                />

              </div>

              <div className="bg-white p-6">

                <h3 className="text-xl font-bold text-blue-700">
                  {image.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}