import { motion } from "framer-motion";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

const items = [
  "https://res.cloudinary.com/daucozfk6/image/upload//v1735273886/shiba1_eqqomc.webp",
  "https://res.cloudinary.com/daucozfk6/image/upload/v1735273879/shiba2_rgl8ph.webp",
  "https://res.cloudinary.com/daucozfk6/image/upload/v1735273869/shiba3_nyujdo.webp",
  "https://res.cloudinary.com/daucozfk6/image/upload/v1735272972/Criptec-largo_l4xi2n.webp",
  "https://res.cloudinary.com/daucozfk6/image/upload/v1735272976/antisat_oqrsmm.webp",
];

export const Features1 = () => {
  return (
    <section
      className="w-full bg-bgDark2 pt-24 -mt-8 mb-8 sm:-mt-8 sm:mb-24 xl:-mt-8 2xl:mt-0 md:pt-[12vw] lg:pt-16"
      id="Services"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <span className="block-subtitle">Embrace Innovation</span>
              <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
                Unlike any platform
              </h2>
              <p className="mb-10 text-secondaryText leading-loose">
                Discover how to boost your brand within web3 technology with merch3.
              </p>
              <ul className="mb-6 text-primaryText">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Support within the crypto world</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Unique merch</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Governance Systems</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8">
            <div className="mb-8 lg:mb-0 w-full sm:w-1/2 px-2 lg:px-0">
              <div className="mb-4 py-3 pl-3 pr-2 rounded">
                <img
                  src={items[0]}
                  alt="Feature image 1"
                  className="rounded-xl main-border-gray mx-auto sm:mx-unset transition-transform transform hover:scale-110 hover:duration-500"
                  aria-label="Feature image 1"
                />
              </div>
              <div className="py-3 pl-3 pr-2 rounded">
                <img
                  src={items[1]}
                  alt="Feature image 2"
                  className="rounded-xl main-border-gray mx-auto sm:mx-unset transition-transform transform hover:scale-110 hover:duration-500"
                  aria-label="Feature image 2"
                />
              </div>
            </div>
            <div className="w-1/2 lg:mt-20 pt-12 lg:pt-0 px-2 hidden sm:inline-block">
              <div className="mb-4 py-3 pl-3 pr-2 rounded-lg">
                <img
                  src={items[2]}
                  alt="Feature image 3"
                  className="rounded-xl main-border-gray transition-transform transform hover:scale-110 hover:duration-500"
                  aria-label="Feature image 3"
                />
              </div>
              <div className="py-3 pl-3 pr-2 rounded-lg">
                <img
                  src={items[3]}
                  alt="Feature image 4"
                  className="rounded-xl main-border-gray transition-transform transform hover:scale-110 hover:duration-500"
                  aria-label="Feature image 4"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
