import React from "react";
const Form = () => {
  return (
    <form  id="Contact" className="max-w-full mx-auto md:py-8" action="https://formsubmit.co/2330fe87cb767f8d382e0f32ba7eab79" method="post">
      {/* Email Input */}
      <div className="relative z-0 w-full mb-7 group">
        <input type="email" name="floating_email" id="floating_email"  className="peer block w-full bg-transparent text-sm text-gray-900 border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 dark:text-white dark:border-gray-600 dark:focus:border-blue-500" placeholder=" " required/>
        <label htmlFor="floating_email" className="absolute top-0 left-0 text-gray-500 dark:text-gray-400 text-sm transform origin-[0] transition-all duration-300 peer-placeholder-shown:top-0 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:dark:text-gray-400 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
          Email address</label>
      </div>
      {/* First and Last Name Inputs */}
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-7 group">
          <input type="text" name="floating_first_name"  id="floating_first_name"  className="peer block w-full bg-transparent text-sm text-gray-900 border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 dark:text-white dark:border-gray-600 dark:focus:border-blue-500" placeholder=" " required/>
          <label htmlFor="floating_first_name" className="absolute top-0 left-0 text-gray-500 dark:text-gray-400 text-sm transform origin-[0] transition-all duration-300 peer-placeholder-shown:top-0 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:dark:text-gray-400 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
            First name </label>
        </div>
        <div className="relative z-0 w-full mb-7 group">
          <input type="text" name="floating_last_name" id="floating_last_name" className="peer block w-full bg-transparent text-sm text-gray-900 border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 dark:text-white dark:border-gray-600 dark:focus:border-blue-500" placeholder=" " required />
          <label htmlFor="floating_last_name" className="absolute top-0 left-0 text-gray-500 dark:text-gray-400 text-sm transform origin-[0] transition-all duration-300 peer-placeholder-shown:top-0 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:dark:text-gray-400 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500" >
            Last name </label>
        </div>
      </div>
      {/* Phone and Company Inputs */}
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-7 group">
          <input type="tel" name="floating_phone"  id="floating_phone" className="peer block w-full bg-transparent text-sm text-gray-900 border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 dark:text-white dark:border-gray-600 dark:focus:border-blue-500" placeholder=" "  required />
          <label htmlFor="floating_phone" className="absolute top-0 left-0 text-gray-500 dark:text-gray-400 text-sm transform origin-[0] transition-all duration-300 peer-placeholder-shown:top-0 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:dark:text-gray-400 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500" >
            Phone number </label>
        </div>
        <div className="relative z-0 w-full mb-7 group">
          <input type="text" name="floating_company"  id="floating_company" className="peer block w-full bg-transparent text-sm text-gray-900 border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 dark:text-white dark:border-gray-600 dark:focus:border-blue-500" placeholder=" " required  />
          <label htmlFor="floating_company"   className="absolute top-0 left-0 text-gray-500 dark:text-gray-400 text-sm transform origin-[0] transition-all duration-300 peer-placeholder-shown:top-0 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:dark:text-gray-400 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500" >
            Comments </label>
        </div>
      </div>
      {/* Submit Button */}
      <button  type="submit" className="w-full sm:w-auto px-5 py-2.5 text-sm font-medium text-white bg-primaryColor rounded-lg hover:bg-primaryColor focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-primaryColor dark:hover:bg-secondaryColor dark:focus:ring-blue-800 transition-colors duration-300" >   Enviar </button>
      {/* Hidden Inputs */}
      <input type="hidden" name="_next" value="http://localhost:4321/" />
      <input type="hidden" name="_captcha" value="false" />
    </form>
  );
};
export default Form;