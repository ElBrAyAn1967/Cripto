import { useState } from "react";
import { motion } from "framer-motion";

import { InvitationModal } from "../../InvitationModal";
import { CheckArrowIcon } from "../../../assets/icons/CheckArrowIcon";
import XIcon from "../../../assets/icons/XIcon";  // Importamos el ícono de la X
const pricingPlans = [
  {
    plan: "Beginner",
    price: "$0",
    availableMonthly: true,
    features: [
      { text: "Seamless integration", available: true },
      { text: "Real-time data visualization through our community", available: true },
      { text: "Basic Courses", available: true },
      { text: "Intermediate Courses", available: false },
      { text: "Advanced Courses", available: false },
      { text: "Trading sessions", available: false },
      { text: "Scholarships and educational support", available: false },
    ]
  },
  {
    plan: "Standard",
    price: "$180",
    availableMonthly: false,
    features: [
      { text: "Seamless integration", available: true },
      { text: "Real-time data visualization through our community", available: true },
      { text: "Basic Courses", available: true },
      { text: "Intermediate Courses", available: true },
      { text: "Advanced Courses", available: false },
      { text: "Trading sessions", available: false },
      { text: "Scholarships and educational support", available: true },
    ]
  },
  {
    plan: "Premium",
    price: "$350",
    availableMonthly: false,
    features: [
      { text: "Seamless integration", available: true },
      { text: "Real-time data visualization through our community", available: true },
      { text: "Basic Courses", available: true },
      { text: "Intermediate Courses", available: true },
      { text: "Advanced Courses", available: true },
      { text: "Trading sessions", available: true },
      { text: "Scholarships and educational support", available: true },
    ]
  }
];

export const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <section className="w-screen flex justify-center bg-bgDark2 relative">
      <div className="absolute -top-16" id="pricing" />
      <div className="pb-20 pt-12 bg-bgDark2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="block-subtitle">Find Your Perfect Fit</span>
              <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-primaryText">Choose your best plan</h2>
              <p className="mb-6 text-secondaryText">Select the plan that suits your needs and benefit from our courses.</p>

              <label className="mx-auto bg-bgDark3 relative flex justify-between items-center group text-xl w-44 h-12 rounded-lg pr-36 pl-1 cursor-pointer">
                <input type="checkbox" className="peer appearance-none" checked={!isMonthly} onChange={handleChange} />
                <span className="h-8 w-[5.5rem] flex items-center pr-2 bg-bgDark3 after:rounded-lg duration-300 ease-in-out after:w-[30rem] after:h-10 after:bg-primaryColor after:shadow-md after:duration-300 peer-checked:after:translate-x-[5.5rem] cursor-pointer"></span>
                <div className="flex absolute text-primaryText text-sm font-bold">
                  <div className={isMonthly ? "mr-9 ml-3" : "mr-9 ml-3 text-gray-400"}>Monthly</div>
                  <div className={isMonthly ? "text-gray-400" : ""}>Yearly</div>
                </div>
              </label>
            </div>

            <div className="flex flex-wrap flex-col lg:flex-row -mx-4 items-center mt-20">
              {pricingPlans.map((plan, i) => (
                <div key={plan.plan} className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                  <div className="p-8 bg-bgDark3 rounded-3xl">
                    <h3 className="mb-2 text-xl font-bold font-heading text-primaryText text-left">{plan.plan}</h3>
                    <div className="flex justify-start items-end">
                      <div className="text-4xl sm:text-5xl font-bold text-primaryText text-left mt-4 mr-2">
                        {isMonthly ? plan.price : "$180"}
                      </div>
                      <div className="text-gray-500">{isMonthly ? "/ month" : "/ year"}</div>
                    </div>
                    <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">The perfect way to start building within the Web3 ecosystem</p>
                    <ul className="mb-2 2xl:mb-6 text-primaryText">
                      {plan.features.map((item, index) => (
                        <li className="mb-4 flex" key={index}>
                          {item.available ? <CheckArrowIcon /> : <XIcon  className="w-9 h-4" />}  {/* Usamos XIcon cuando no está disponible */}
                          <span>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl contained-button font-bold leading-loose mt-16" onClick={() => setIsModalOpen(true)} aria-label="Get started">
                      Get Started
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      {isModalOpen && <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />}
    </section>
  );
};
