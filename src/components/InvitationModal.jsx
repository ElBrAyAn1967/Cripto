import { motion, AnimatePresence } from "framer-motion";

import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import { CloseIcon } from "../assets/icons/CloseIcon";
import { LogoMerch } from "../assets/logos/LogoMerch";

export const InvitationModal = ({ setIsOpen }) => (
  <AnimatePresence>
    <motion.div initial={{ opacity: 0, zIndex: 50 }} animate={{ opacity: 1, zIndex: 50 }} transition={{ duration: 0.1 }}  exit={{ opacity: 0 }} >
      <div className="w-full h-full  bg-bgDarkTransparentDarker fixed top-0 left-0 flex  z-50 justify-center items-center"  onClick={() => setIsOpen(false)} >
        <div  className="w-full h-screen sm:h-auto sm:w-3/4 md:w-3/5 lg:w-[1000px] xl:w-[1100px] sm:rounded-2xl bg-bgDarkTransparentLighter main-border-gray-darker py-12 px-8 sm:px-16 backdrop-blur-xl fixed sm:mb-8  mx-auto z-50" onClick={(e) => e.stopPropagation()} >
          <div className="flex relative">
            <div className="w-1/2 hidden lg:inline">


              <h2 className="mt-6 mb-2 text-5xl font-bold tracking-normal text-primaryText">
                Subscribe Now
              </h2>
              <h2 className="text-5xl font-bold tracking-normal text-secondaryColor">
               Merch Collection
              </h2>


              <ul className="mb-6 text-primaryText mt-12">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Unique merch</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Brand positioning</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Web3 Implementation</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 flex items-center flex-col justify-center pt-24 sm:pt-0">
              <div className="flex inline lg:hidden justify-start items-center grow basis-0 mb-8 pr-6">
                <div className="text-white mr-2 text-8xl">
                  <LogoMerch />
                </div>
                <div className="text-white font-['Inter'] font-bold text-3xl">
                  Merch
                </div>
              </div>

              <h3 className="mb-7 text-2xl text-primaryText font-bold leading-snug text-center">
                Join other  Humans
              </h3>
              <div className="flex flex-wrap -m-2">
                <div className="w-full sm:w-4/5 p-2 mx-auto">
                  <input
                    className="px-4 py-4 w-full text-gray-500 font-medium text-center placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                    id="newsletterInput3-1"
                    type="text"
                    placeholder="Your email address"
                  />
                </div>
                <div className="w-full sm:w-4/5 p-2 mt-4 mx-auto">
                  <button
                    className="py-4 px-6 w-full text-primaryText font-semibold rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-primaryColor hover:bg-[#7274f3] transition ease-in-out duration-200"
                    type="button"
                    aria-label="Join now"
                  >
                    Join Now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="fixed top-6 right-6 z-50 w-5 h-5 cursor-pointer text-[rgb(255,255,255,0.7)] hover:text-white transition"
              onClick={() => setIsOpen(false)}
            >
              <CloseIcon />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </AnimatePresence>
);
