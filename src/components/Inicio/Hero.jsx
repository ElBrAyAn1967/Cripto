import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { InvitationModal } from "../InvitationModal";

// Cambiamos items a objetos con más info y botones
const items = [
  {
    title: "Model Y",
    subtitle: "Agenda una prueba de manejo",
    image:
      "https://res.cloudinary.com/daucozfk6/image/upload//v1735273886/shiba1_eqqomc.webp",
    buttons: [
      { label: "Ordenar", onClick: () => alert("Ordenar Model Y") },
      { label: "Más información", onClick: () => alert("Info Model Y") },
    ],
  },
  {
    title: "Model X",
    subtitle: "SUV de lujo",
    image:
      "https://res.cloudinary.com/daucozfk6/image/upload/v1735273879/shiba2_rgl8ph.webp",
    buttons: [
      { label: "Ver inventario", onClick: () => alert("Inventario Model X") },
      { label: "Más información", onClick: () => alert("Info Model X") },
    ],
  },
  {
    title: "Model Y",
    subtitle: "Agenda una prueba de manejo",
    image:
      "https://res.cloudinary.com/daucozfk6/image/upload//v1735273886/shiba1_eqqomc.webp",
    buttons: [
      { label: "Ordenar", onClick: () => alert("Ordenar Model Y") },
      { label: "Más información", onClick: () => alert("Info Model Y") },
    ],
  },
  {
    title: "Model X",
    subtitle: "SUV de lujo",
    image:
      "https://res.cloudinary.com/daucozfk6/image/upload/v1735273879/shiba2_rgl8ph.webp",
    buttons: [
      { label: "Ver inventario", onClick: () => alert("Inventario Model X") },
      { label: "Más información", onClick: () => alert("Info Model X") },
    ],
  },
  {
    title: "Model Y",
    subtitle: "Agenda una prueba de manejo",
    image:
      "https://res.cloudinary.com/daucozfk6/image/upload//v1735273886/shiba1_eqqomc.webp",
    buttons: [
      { label: "Ordenar", onClick: () => alert("Ordenar Model Y") },
      { label: "Más información", onClick: () => alert("Info Model Y") },
    ],
  },
  {
    title: "Model X",
    subtitle: "SUV de lujo",
    image:
      "https://res.cloudinary.com/daucozfk6/image/upload/v1735273879/shiba2_rgl8ph.webp",
    buttons: [
      { label: "Ver inventario", onClick: () => alert("Inventario Model X") },
      { label: "Más información", onClick: () => alert("Info Model X") },
    ],
  },
];

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  // Detectar slide activo al hacer scroll
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const children = Array.from(carousel.children);
      const scrollLeft = carousel.scrollLeft;
      let total = 0;
      let index = 0;

      for (let i = 0; i < children.length; i++) {
        total += children[i].offsetWidth;
        if (scrollLeft + carousel.offsetWidth / 2 < total) {
          index = i;
          break;
        }
      }
      setActiveIndex(index);
    };

    carousel.addEventListener("scroll", handleScroll, { passive: true });
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll al slide al hacer click en punto
  const scrollToIndex = (index) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const children = Array.from(carousel.children);
    if (children[index]) {
      children[index].scrollIntoView({ behavior: "smooth", inline: "start" });
    }
  };

  return (
    <section
      className="w-screen flex justify-center items-center bg-bgDark1 mb-[28vw] md:mb-[18vw] lg:mb-[10vw] 2xl:mb-60 hero-bg-gradient pb-24 sm:pb-32 md:pb-44 lg:pb-0"
      id="home"
    >
      <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center">
        {/* Encabezado intacto */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-secondaryColor text-sm sm:text-base mb-6 sm:mt-32 mt-16 font-bold">
            Merch3
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-6xl font-bold tracking-wide text-primaryText px-8 sm:px-8 md:px-20 lg:px-4">
            <h1 className="inline md:hidden">Wearable Exclusive</h1>
            <h1 className="hidden md:inline">Wearable Exclusive</h1>
          </div>
          <h2 className="mt-2 sm:mt-2 text-xl sm:text-2xl lg:text-3xl xl:text-3xl font-bold tracking-wide text-primaryText px-8 sm:px-20 md:px-24 lg:px-24">
            Digital Identity
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-secondaryText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48">
            It evokes clothing or merch as an extension of digital identity in a future Web3
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex flex-col gap-2 sm:flex-row mt-14 mb-24 sm:mb-40 justify-center">
            <button
              className="contained-button w-64 sm:w-52 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0"
              onClick={() => setIsModalOpen(true)}
              aria-label="Get started"
            >
              Claim
            </button>

            <button
              href="/Cursos"
              className="inline-flex justify-center items-center w-64 sm:w-52 h-12 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-400 transform transition-all duration-300 hover:scale-105"
            >
              <svg
                className="w-6 h-6 transition-colors duration-500 transform hover:text-black"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <circle cx="16" cy="16" r="16" fill="currentColor" />
                <path
                  d="M21.75 12.973c.285-1.91-1.17-2.938-3.153-3.624l.644-2.58-1.57-.392-.63 2.525c-.413-.103-.837-.2-1.257-.297l.637-2.553-1.57-.392-.644 2.581c-.342-.078-.68-.157-1.008-.237l.001-.005-2.165-.54-.418 1.683s1.17.269 1.147.287c.641.16.756.585.737.921l-.737 2.952c.044.011.101.026.165.05l-.168-.042-1.034 4.142c-.079.197-.28.493-.733.38.016.023-1.146-.287-1.146-.287l-.781 1.801 2.042.51c.38.095.75.195 1.116.292l-.65 2.607 1.569.392.644-2.58c.427.115.84.223 1.246.328l-.641 2.566 1.569.392.65-2.61c2.682.508 4.698.303 5.544-2.124.683-1.947-.034-3.068-1.447-3.8 1.026-.236 1.799-.906 2.006-2.293zm-3.601 5.003c-.489 1.947-3.812.893-4.883.63l.872-3.5c1.071.268 4.523.799 4.011 2.87zm.49-5.035c-.448 1.796-3.21.882-4.1.66l.79-3.169c.89.222 3.781.638 3.31 2.51z"
                  fill="#FFFFFF"
                />
              </svg>
              <a href="/Nav/Merch"><span  className="ms-2"> buy</span></a>

            </button>
          </div>
        </motion.div>

        {/* Carrusel horizontal con scrollbar oculto */}
        <motion.div
          initial={{ opacity: 0, y: 10, zIndex: 20 }}
          animate={{ opacity: 1, y: 0, zIndex: 20 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="w-full"
        >
          <div
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth space-x-6 px-4 hide-scrollbar"
            role="list"
            aria-label="Carrusel de productos"
            tabIndex={0}
          >
            {items.map(({ title, subtitle, image, buttons }, i) => (
              <motion.div
                key={title}
                className="bento-item snap-start flex-shrink-0 min-w-[85%] md:min-w-[40rem] cursor-pointer relative"
                role="listitem"
                initial={{ opacity: 0.7, scale: 0.95 }}
                animate={{
                  opacity: activeIndex === i ? 1 : 0.7,
                  scale: activeIndex === i ? 1 : 0.95,
                  transition: { duration: 0.5 },
                }}
                id={`carousel-item-${i}`}
              >
                <div className="group border rounded-lg overflow-hidden shadow-lg relative">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-64 md:h-96 object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105 rounded"
                  />
                  {/* Texto y botones encima de la imagen */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-6 rounded">
                    <h3 className="font-bold text-2xl md:text-3xl mb-2">{title}</h3>
                    <p className="mb-4 text-md md:text-lg">{subtitle}</p>
                    <div className="flex gap-4 flex-wrap justify-center">
                      {buttons.map(({ label, onClick }) => (
                        <button
                          key={label}
                          onClick={onClick}
                          className={`${
                            label.toLowerCase().includes("ordenar") ||
                            label.toLowerCase().includes("ver")
                              ? "bg-blue-600 text-white hover:bg-blue-700"
                              : "bg-white text-black hover:bg-gray-200"
                          } px-4 py-2 rounded transition`}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Puntos de navegación */}
          <div
            id="dots"
            className="flex justify-center gap-2 mt-6"
            role="tablist"
            aria-label="Navegación del carrusel"
          >
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`dot w-3 h-3 rounded-full transition-all duration-300 ease-in-out ${
                  activeIndex === i ? "bg-black scale-125" : "bg-gray-400"
                }`}
                aria-selected={activeIndex === i}
                role="tab"
                aria-controls={`carousel-item-${i}`}
                tabIndex={activeIndex === i ? 0 : -1}
                aria-label={`Ir al slide ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
