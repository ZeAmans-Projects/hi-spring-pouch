import Image from "next/image";

const galleryImages = [
  { src: "/images/Gallery/automatic filling line.PNG", title: "Automatic Filling Line" },
  { src: "/images/Gallery/production line.PNG", title: "Production Line" },
  { src: "/images/Gallery/PROCESS1.PNG", title: "Water Treatment Process" },
  { src: "/images/Gallery/PROCESS2.PNG", title: "Advanced Purification Process" },
  { src: "/images/Gallery/qc lab.PNG", title: "Quality Control Laboratory" },
  { src: "/images/Gallery/qc.PNG", title: "Quality Inspection" },
  { src: "/images/Gallery/sanitization.PNG", title: "Bottle Sanitization" },
  { src: "/images/Gallery/clean and sanitized bottles.PNG", title: "Clean & Sanitized Bottles" },
  { src: "/images/Gallery/finished production.PNG", title: "Finished Production" },
  { src: "/images/Gallery/storage.PNG", title: "Finished Goods Storage" },
  { src: "/images/Gallery/loading.PNG", title: "Loading for Distribution" },
  { src: "/images/Gallery/truck.PNG", title: "Transportation Fleet" },
  { src: "/images/Gallery/delivered.PNG", title: "Delivered to Customers" },
  { src: "/images/Gallery/office installation.png", title: "Office Installation" },
  { src: "/images/Gallery/home installation.png", title: "Home Installation" },
  { src: "/images/Gallery/hotel.png", title: "Hotels" },
  { src: "/images/Gallery/school.png", title: "Schools" },
  { src: "/images/Gallery/rural.png", title: "Supporting Rural Communities" },
  { src: "/images/Gallery/rural 2.png", title: "Community Water Access" },
  { src: "/images/Gallery/team 1.png", title: "The Hi Spring Team" },
];

export default function GalleryPage() {
  return (
    <main>

      {/* Hero */}

      <section className="bg-gradient-to-br from-blue-700 to-sky-600 text-white py-28">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">

          <span className="inline-flex rounded-full bg-white/20 px-5 py-2 font-semibold">
            Our Gallery
          </span>

          <h1 className="mt-8 text-5xl lg:text-6xl font-black">
            Explore Hi Spring
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-xl leading-9 text-blue-100">
            Discover our advanced manufacturing facilities,
            purification process, quality assurance, dedicated
            team, distribution network and the communities we
            proudly serve across Ethiopia.
          </p>

        </div>

      </section>

      {/* Gallery */}

      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {galleryImages.map((image, index) => (

              <div
                key={index}
                className="group overflow-hidden rounded-[32px] bg-white shadow-xl"
              >

                <Image
                  src={image.src}
                  alt={image.title}
                  width={1200}
                  height={800}
                  className={`w-full transition duration-700 group-hover:scale-105 ${
                    image.title === "Production Line"
                      ? "h-auto object-contain bg-white p-4"
                      : "h-[320px] object-cover"
                  }`}
                />

                <div className="p-6">

                  <h3 className="text-2xl font-bold text-gray-900">
                    {image.title}
                  </h3>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}
