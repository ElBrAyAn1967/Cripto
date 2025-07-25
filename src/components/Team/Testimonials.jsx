import { useState } from "react";
import { motion } from "framer-motion";

import { FacebookIcon } from "../../assets/icons/FacebookIcon";
import { TwitterIcon } from "../../assets/icons/TwitterIcon";
import { InstagramIcon } from "../../assets/icons/InstagramIcon";

const features = [
  {
    title: "Rentabilidad",
    subtitle: "Redes sociales",
    description:
      "Conecta con tu comunidad a través de productos físicos. Nuestro sistema convierte cada pieza. lorem ds asdnsad sajdnksnkajnkjdsa ",
    icon: FacebookIcon,
    color: "from-[#E71D36]/80 to-[#E71D36]/40",
  },
  {
    title: "Pagos con Cripto",
    subtitle: "Dinero",
    description:
      "Recibe pagos en cualquier red y token. Automatizamos la contabilidad Web3 y recompensamos cada compra.",
    icon: TwitterIcon,
    color: "from-[#3E3EF4]/80 to-[#3E3EF4]/40",
  },
  {
    title: "Identidad Digital",
    subtitle: "Memes",
    description:
      "Integra NFTs, POAPs o DAOs en tu merch. Cada prenda se convierte en una llave de acceso al ecosistema.",
    icon: InstagramIcon,
    color: "from-[#FAFAFA]/80 to-[#FAFAFA]/40"

  },
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="w-full flex justify-center pt-16 mb-16 lg:mb-32 bg-bgDark2 relative">
      <div className="absolute -top-16" id="feedback" />
      <div className="flex flex-col w-full lg:w-[1150px] justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="block-subtitle text-center mb-6 text-primary">
            Nuestra propuesta de valor
          </div>
          <div className="block-big-title text-center mb-20 px-8 sm:px-24 md:px-48">
            ¿Por qué elegir nuestro merch3?
          </div>

          <div className="flex flex-col lg:flex-row gap-8 px-6 xl:px-0 items-center">
            {features.map((item, index) => {
              const isActive = index === activeIndex;
              const IconComponent = item.icon;

              return (
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`group w-full lg:w-1/3 rounded-xl border border-gray-700 p-6 cursor-pointer text-white 
                    transition-all duration-700 ease-in-out
                    ${
                      isActive
                        ? `bg-gradient-to-br ${item.color}`
                        : "bg-bgDark3 hover:bg-gradient-to-br " + item.color
                    }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      whileHover={{ scale: 1.25 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className={`p-4 rounded-full mb-4 transition-all duration-700 ease-in-out
                        ${
                          isActive
                            ? "bg-white bg-opacity-20"
                            : "bg-gray-800 group-hover:bg-white/20"
                        }`}
                    >
                      <IconComponent className="w-10 h-10" />
                    </motion.div>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm font-medium mb-3 text-gray-400">
                      {item.subtitle}
                    </p>
                    <p className="text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
