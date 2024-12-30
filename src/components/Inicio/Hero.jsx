import { useState } from "react";
import { motion } from "framer-motion";

import { InvitationModal } from "../InvitationModal";
import dashboard from "../../assets/images/dashboard.jpg";

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="w-screen  flex justify-center items-center bg-bgDark1 mb-[28vw] md:mb-[18vw] lg:mb-[10vw] xl:mb-[13vw] 2xl:mb-60 hero-bg-gradient pb-24 sm:pb-32 md:pb-44 lg:pb-0" id="home">
      <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center">
        <motion.div  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h3 className="text-secondaryColor text-sm sm:text-base  mb-6 sm:mt-32 mt-16  font-bold"> CripTec</h3>
        </motion.div>


        <motion.div  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}  transition={{ duration: 0.5, delay: 0.05 }}>
          <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide  text-primaryText  px-8 sm:px-8 md:px-20 lg:px-4">
            <h1 className="inline md:hidden"> Formación en Web3</h1>
            <h1 className="hidden md:inline"> Formación en Web3</h1>
          </div>
          <h2 className="mt-2 sm:mt-2 text-xl sm:text-2xl lg:text-3xl xl:text-3xl font-bold tracking-wide text-primaryText px-8 sm:px-20 md:px-24 lg:px-24">  Cursos de Blockchain</h2>

        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <h3 className="text-secondaryText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48 ">
          Conectamos el presente con el futuro de la mano de las criptomonedas
          </h3>
        </motion.div>
        
        
        <motion.div  initial={{ opacity: 0, y: 10 }}  animate={{ opacity: 1, y: 0 }}  transition={{ duration: 0.5, delay: 0.15 }}>
          <div className="flex flex-col gap-2 sm:flex-row mt-14 mb-24 sm:mb-40 justify-center">
            <button className="contained-button w-64 sm:w-52 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0" onClick={() => setIsModalOpen(true)} aria-label="Get started">
              Cursos en vivo
            </button>


            <button href="/Cursos" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 transform transition-all duration-300 hover:scale-105">
              <svg className="w-6 h-6 transition-colors duration-500 transform hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true">
                <circle cx="16" cy="16" r="16" fill="currentColor"/>
                <path d="M21.75 12.973c.285-1.91-1.17-2.938-3.153-3.624l.644-2.58-1.57-.392-.63 2.525c-.413-.103-.837-.2-1.257-.297l.637-2.553-1.57-.392-.644 2.581c-.342-.078-.68-.157-1.008-.237l.001-.005-2.165-.54-.418 1.683s1.17.269 1.147.287c.641.16.756.585.737.921l-.737 2.952c.044.011.101.026.165.05l-.168-.042-1.034 4.142c-.079.197-.28.493-.733.38.016.023-1.146-.287-1.146-.287l-.781 1.801 2.042.51c.38.095.75.195 1.116.292l-.65 2.607 1.569.392.644-2.58c.427.115.84.223 1.246.328l-.641 2.566 1.569.392.65-2.61c2.682.508 4.698.303 5.544-2.124.683-1.947-.034-3.068-1.447-3.8 1.026-.236 1.799-.906 2.006-2.293zm-3.601 5.003c-.489 1.947-3.812.893-4.883.63l.872-3.5c1.071.268 4.523.799 4.011 2.87zm.49-5.035c-.448 1.796-3.21.882-4.1.66l.79-3.169c.89.222 3.781.638 3.31 2.51z" fill="#FFFFFF"/>
              </svg>
              <span className="ms-2">Todos los cursos</span>
            </button>
          </div>
        </motion.div>



        <motion.div initial={{ opacity: 0, y: 10, zIndex: 20 }} animate={{ opacity: 1, y: 0, zIndex: 20 }}  transition={{ duration: 0.5, delay: 0.15 }}>
          <div className="relative w-screen flex justify-center ">
            <img src={dashboard.src}  alt="Dashboard image" className="w-4/5 2xl:w-[1200px] mx-auto absolute z-10 rounded-xl main-border-gray hero-dashboard-border-gradient lg:top-6 xl:top-0"  />
          </div>
        </motion.div>


        <div className="relative w-screen flex justify-center ">
          <div className="shape-divider-bottom-1665343298 mt-4 sm:mt-16 md:mt-52 hidden lg:block">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="bg-bgDark2">
              <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill bg-bgDark1  fill-bgDark1" ></path>
            </svg>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
