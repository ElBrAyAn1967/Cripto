import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { GithubIcon } from "../assets/icons/GithubIcon";
import { CriptecLogo } from "../assets/logos/LogoCriptec";

const navbarLinks = [
  { label: "CripTec", href: "/#home", ariaLabel: "Home" },
  { label: "Cursos", href: "/#features", ariaLabel: "Features" },
  { label: "Costos", href: "/#pricing", ariaLabel: "Pricing" },
  { label: "Doctoralia", href: "/#feedback", ariaLabel: "Feedback" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Listener para detectar el desplazamiento
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 0); // Cambia el estado si hay desplazamiento
    });
  }, [scrollY]);

  return (
    <motion.nav
      className="w-full h-20 flex flex-col justify-center items-center fixed z-40"
      aria-label="Main navigation"
      initial={false}
      animate={isScrolled ? "scrolled" : "top"}
      variants={{
        top: {
          backgroundColor: "rgba(0, 0, 0, 0)",
          boxShadow: "none",
          backdropFilter: "blur(0px)",
        },
        scrolled: {
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          boxShadow: "0px 5px 50px -5px rgba(0, 0, 0, 0.1), 0px 0px 0 1px rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(10px)",
          transition: { duration: 0.3 },
        },
      }}
    >
      <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} exit={{ opacity: 0 }}>
          <a href="/#home" aria-label="Home">
            <div className="flex justify-start items-center grow basis-0">
              <CriptecLogo  />
            </div>
          </a>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} exit={{ opacity: 0 }}>
          <div className="hidden lg:flex h-full pl-12 pb-2">
            {navbarLinks.map(({ href, label, ariaLabel }) => (
              <a
                className="text-white lg:text-base text-2xl leading-6 mr-4 ml-4 2xl:mr-6 2xl:ml-6 cursor-pointer font-normal lg:font-medium hover:scale-110 transition h-full pt-2"
                href={href}
                aria-label={ariaLabel}
                key={label}
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} exit={{ opacity: 0 }}>
          <div className="grow basis-0 justify-end hidden lg:flex">
            <a
              className="text-white main-border-gray rounded-xl bg-bgDark2 hover:bg-bgDark3 border-gray-700 pl-6 pr-8 pt-2 pb-2 text-sm flex"
              href="#"
              aria-label="Inicio de Sesion"
            >
              <GithubIcon />
              <span className="pt-px">Inicio de Sesion</span>
            </a>
          </div>
        </motion.div>
        <div
          className="lg:hidden flex flex-col px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-bgDark2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-5 h-0.5 bg-gray-500 mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500 mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500"></div>
        </div>
      </div>
      {/* Mobile navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col mt-16 lg:hidden absolute top-4 left-0 bg-bgDark1 z-50 w-full items-center gap-10 pb-10 border-y border-solid border-bgDark3 pt-10">
              {navbarLinks.map(({ label, href, ariaLabel }) => (
                <a
                  key={href}
                  className="text-white lg:text-base text-2xl leading-6 mr-4 ml-4 2xl:mr-6 2xl:ml-6 cursor-pointer font-normal lg:font-medium hover:scale-110 transition duration-300 h-full pt-2"
                  href={href}
                  onClick={() => setIsOpen(false)}
                  aria-label={ariaLabel}
                >
                  {label}
                </a>
              ))}
              <a className="outlined-button pl-6 pr-8 pt-2 pb-2 flex" href="#" aria-label="Inicio de Sesion">
                <GithubIcon />
                Inicio de Sesion
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
