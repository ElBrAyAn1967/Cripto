import { motion } from "framer-motion";
import { useState } from "react";


import { InvitationModal } from "./InvitationModal";

const items = [
  "https://res.cloudinary.com/daucozfk6/image/upload/v1751057979/Merch3-Logo_white-transparentBG_kwgfgg.svg",
];

export const FeaturesDiagonal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="Reclaim" className="lg:mb-16 w-full flex flex-col justify-center items-center bg-bgDark1">
      <div className="shape-divider-bottom-1665696614">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="bg-bgDark2  fill-bgDark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="bg-bgDark1  fill-bgDark1"
          ></path>
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className=" 2xl:w-[1150px] xl:w-[1050px]  md:w-4/5 flex justify-center bg-bgDark1 pt-12 lg:pt-24 pb-8 lg:pb-20 mx-auto lg:flex-row flex-col">
          <div className="w-3/4 lg:w-1/2 flex flex-col lg:mx-unset mx-auto">
            <span className="block-subtitle">Hackaton </span>
            <h2 className="mt-10 mb-8 text-4xl lg:text-5xl block-big-title">
              Platform &amp; Community
            </h2>
            <p className="mb-16 text-secondaryText leading-loose">
              "Transform the event space into an interactive playground where each action has a digital reward that can be converted into a physical product on the same day."
            </p>
            
            <a href="../libro/gratis" rel="noreferrer">
              <button  className="w-[210px] h-12 contained-button mr-10" aria-label="Get started" >
                Get Started
              </button>
            </a>
            
          </div>
          <div className="w-4/5 lg:w-1/2 lg:pl-16 flex justify-center mx-auto pt-16 lg:pt-0">
            <img
              src={items[0]}
              alt="Feature image"
              className="rounded-xl main-border-gray transition-transform transform hover:scale-110 hover:duration-500"
            />
          </div>
        </div>
      </motion.div>
      <div className="shape-divider-top-1665696661 w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="bg-bgDark2 fill-bgDark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="bg-bgDark1 fill-bgDark1"
          ></path>
        </svg>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
