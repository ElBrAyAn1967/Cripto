import { motion } from "framer-motion";
import { brands as images } from "../../data/brands";

const loopImages = [...images, ...images];

export const Brands = () => (
  <section className="py-12 sm:py-12 bg-bgDark1 w-full lg:mt-16 mb-8 lg:mb-16">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container px-4 mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5">
        <div className="text-center mb-8">
        {/* TITULO DE LOS PATROCINADORES 
          <div className="text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-normal">
            <h2 className="inline-block text-primaryText">Colaboradores</h2>{" "}
            <h2 className="inline-block text-secondaryColor">& Patrocinadores</h2>
          </div>
          */}
        </div>

        <div className="relative overflow-hidden max-w-full mx-auto">
          <div className="absolute top-0 bottom-0 left-0 w-[50px] bg-gradient-to-r from-bgDark1 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-[50px] bg-gradient-to-l from-bgDark1 to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex items-center gap-4 sm:gap-16"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 60,
              ease: "linear",
            }}
            style={{ width: `calc(200px * ${loopImages.length})` }}
          >
            {loopImages.map(({ img, url }, index) => (
              <motion.a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[120px] sm:w-[200px] transition-opacity duration-200 ease-in-out opacity-100 hover:opacity-50"
                whileHover={{ scale: 1.1 }}
              >
                <img src={img} alt={`Slide ${index + 1}`} className="w-full h-auto object-contain" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  </section>
);
