import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-lg text-primary bg-blue-gradient rounded-[10px] outline-none ${styles} mx-auto md:mx-0`}>
    Get Started
  </button>
);

export default Button;