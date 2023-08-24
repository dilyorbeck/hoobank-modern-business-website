import { useState } from "react";
import { close, logo, menu } from "../assets"
import { navLinks } from "../constants"

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full py-6 flex justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-32 h-8" />
      <ul className="list-none hidden justify-end items-center flex-1 sm:flex">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px]  ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}>
            <a href={'#{nav.id}'} className="text-white">{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="flex flex-1 justify-end items-center sm:hidden">
        <img src={toggle ? close : menu} alt="menu" className="w-7 h-7 object-contain" onClick={() => setToggle((prev) => !prev)} />
        <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-36 rounded-xl sidebar`}>
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`font-poppins font-medium cursor-pointer text-base ${active === nav.title ? "text-white" : "text-dimWhite"} ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`} onClick={() => setActive(nav.title)}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;