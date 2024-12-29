import { motion } from "framer-motion";
const images = [
  "https://res.cloudinary.com/daucozfk6/image/upload/q_auto,f_auto,w_800/v1735272972/eth_dvdw69.webp",
  "https://res.cloudinary.com/daucozfk6/image/upload/q_auto,f_auto,w_800/v1735272976/antisat_oqrsmm.webp",
  "https://res.cloudinary.com/daucozfk6/image/upload/q_auto,f_auto,w_800/v1735272972/merch_jqfcfp.webp",
  "https://res.cloudinary.com/daucozfk6/image/upload/q_auto,f_auto,w_800/v1735272972/Criptec-largo_l4xi2n.webp",
  "https://res.cloudinary.com/daucozfk6/image/upload/q_auto,f_auto,w_800/v1735272972/roots-blanco_gextlz.webp",
  "https://res.cloudinary.com/daucozfk6/image/upload/q_auto,f_auto,w_800/v1735272972/nouns_z7v6w2.webp",
  "https://res.cloudinary.com/daucozfk6/image/upload/q_auto,f_auto,w_800/v1735273883/vara-blanco_ilrzty.webp",
  "https://res.cloudinary.com/daucozfk6/image/upload/q_auto,f_auto,w_800/v1735272972/eth_dvdw69.webp",
  "https://res.cloudinary.com/daucozfk6/image/upload/q_auto,f_auto,w_800/v1735272976/antisat_oqrsmm.webp",
  "https://res.cloudinary.com/daucozfk6/image/upload/q_auto,f_auto,w_800/v1735272972/merch_jqfcfp.webp",
  "https://res.cloudinary.com/daucozfk6/image/upload/q_auto,f_auto,w_800/v1735272972/Criptec-largo_l4xi2n.webp",
  "https://res.cloudinary.com/daucozfk6/image/upload/q_auto,f_auto,w_800/v1735272972/roots-blanco_gextlz.webp",
  "https://res.cloudinary.com/daucozfk6/image/upload/q_auto,f_auto,w_800/v1735272972/nouns_z7v6w2.webp",
  "https://res.cloudinary.com/daucozfk6/image/upload/q_auto,f_auto,w_800/v1735273883/vara-blanco_ilrzty.webp",
];

export const Brands = () => (
  <section className="py-12 sm:py-12 bg-bgDark1 w-full lg:mt-16 mb-8 lg:mb-16">
    <motion.div  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
      <div className="container px-4 mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5">
        {/* Texto centrado en una sola línea */}
        <div className="text-center mb-8">
          <div className="text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-normal">
            <h2 className="inline-block text-primaryText">Colaboradores</h2>{" "}
            <h2 className="inline-block text-secondaryColor">& Patrocinadores</h2>
          </div>
        </div>


        {/* Carrusel de imágenes */}
        <div className="relative overflow-hidden max-w-full mx-auto ">
          {/* Gradientes laterales */}
          <div className="absolute top-0 bottom-0 left-0 w-[50px] bg-gradient-to-r from-bgDark1 to-transparent z-10"></div>
          <div className="absolute top-0 bottom-0 right-0 w-[50px] bg-gradient-to-l from-bgDark1 to-transparent z-10"></div>

          {/* Animación de movimiento infinito */}
          <motion.div className="flex items-center gap-4 sm:gap-16" animate={{ x: ["0%", "-100%"] }} transition={{   repeat: Infinity,   duration: 100,  ease: "linear", }} style={{ width: `calc(200px * ${images.length})` }}>
            {images.map((src, index) => (
              <motion.div key={index} className="w-[120px] sm:w-[200px] transition-opacity duration-200 ease-in-out opacity-100 hover:opacity-50" whileHover={{ scale: 1.1 }} >
                <img src={src} alt={`Slide ${index + 1}`} className="w-full" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  </section>
);
