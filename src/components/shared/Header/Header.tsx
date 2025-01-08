"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// import location from "../../../assets/images/icon/location23.png";
// import chat from "../../../assets/images/icon/chat1.png";
import "./Header.css";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import logo from "../../../assets/images/logo/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import CategoryIcon from "@mui/icons-material/Category";
import {
  HeartIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

// const Header = () => {

//   return (
//     <div className="h-16 lg:h-20 z-10 py-1 w-full bg-gray-100">
//       <div className="w-full lg:h-20 items-center justify-between flex gap-20 px-5 lg:px-24 pt-[5px]">
//         <div className="flex gap-4 items-center">
//         <Image src={logo} className="h-auto lg:h-16 w-[70px] lg:w-28" alt="logo" />
//         <h4>Unkot Library</h4>
//         </div>
//         <div className="lg:flex hidden">{navMenu}</div>
//         <div className="flex gap-6">
//           <Image
//             src={location}
//             className="h-auto lg:h-[40px] w-[30px]"
//             alt="location Icon"
//           />
//           <Image
//             src={chat}
//             className="h-auto lg:h-[40px] w-[40px]"
//             alt="location Icon"
//           />
//         </div>
//         <div className="lg:hidden px-2">
//           <button className="p-1" onClick={toggleNavbar}>
//             {isClick ? <GrClose size={20} /> : <GiHamburgerMenu size={20} />}
//           </button>
//         </div>
//       </div>
//       {isClick && (
//         <div className="lg:hidden absolute left-0 w-full bg-white z-50 shadow-md pb-1 mt-[15px] h-full pl-5 pt-5">
//           {navMenu}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header

const Header = () => {
  const [isClick, setIsClick] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const currentPath = usePathname(); // Get the current path

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  const closeSidebar = () => {
    setIsClick(false);
  };

  const toggleAccordion = (label: string) => {
    setActiveAccordion((prev) => (prev === label ? null : label));
  };

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    {
      href: "#",
      label: "Services",
      submenu: [
        { href: "/services/research", label: "Research & Development" },
        { href: "/services/development", label: "Sample Development" },
        { href: "/services/merchandising", label: "Merchandising" },
        { href: "/services/fab-sourcing", label: "Fabric Sourcing" },
        
      ],
    },
    { href: "/compliance", label: "Blog" },

    { href: "/contact", label: "Contact Us" },
  ];

  const navMenu = (
    <ul className="flex flex-col lg:flex-row gap-3 lg:items-center text-black">
      {menuItems.map((item, index) => (
        <li key={index} className="relative group">
          {/* Large Screen Menu */}
          <div className="hidden lg:block">
            <Link
              href={item.href}
              className={
                "flex gap-1 items-center mr-3 pr-5 hover:text-blue-500"
              }
              onClick={closeSidebar}
            >
              {item.label}
              {item.submenu && <ChevronDownIcon className="h-5 w-5" />}
            </Link>
            {item.submenu && (
              <ul className="submenu absolute hidden group-hover:flex flex-col bg-white rounded shadow-lg p-2">
                {item.submenu.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    href={subItem.href}
                    className={`text-sm py-3 border-b-2 hover:bg-[#c3ddff] hover:font-bold ${
                      currentPath === subItem.href
                        ? "text-blue-500 font-bold"
                        : ""
                    }`}
                    onClick={closeSidebar}
                  >
                    <li className="">{subItem.label}</li>
                  </Link>
                ))}
              </ul>
            )}
          </div>
          {/* Small Screen Accordion */}
          <div className="lg:hidden">
            {item.submenu ? (
              <Accordion
                disableGutters
                expanded={activeAccordion === item.label}
                onChange={() => toggleAccordion(item.label)}
                sx={{ boxShadow: "none" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel-${index}-content`}
                  id={`panel-${index}-header`}
                >
                  <Typography>{item.label}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul className="flex flex-col">
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex} className="py-3">
                        <Link
                          href={subItem.href}
                          className={`text-sm block ${
                            currentPath === subItem.href
                              ? "text-blue-500 font-bold"
                              : ""
                          }`}
                          onClick={closeSidebar}
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionDetails>
              </Accordion>
            ) : (
              <Link
                href={item.href || "#"}
                className={`block py-2 px-4 ${
                  currentPath === item.href ? "text-blue-500 font-bold" : ""
                }`}
                onClick={closeSidebar}
              >
                {item.label}
              </Link>
            )}
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="bg-blue-800 text-white shadow-md">
      <div className="bg-white ">
        <div className="  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
          <div className="bg-[#012E4A] text-white h-16 lg:h-20 flex items-center px-2 lg:px-[30px] rounded-tr-[90px] lg:py-[55px] w-[250px] lg:w-[450px] ">
            <div className="absolute top-0 h-full w-24 lg:w-[120px]  rounded-tr-md" />
            <div className=" flex items-center justify-center gap-2 lg:gap-4  ">
              <Image
                src={logo}
                alt="Logo"
                className="w-[40px] lg:w-[80px] h-[40px] lg:h-[80px]"
              />
              <h1 className="text-[20px] lg:text-[40px]">আলোর পথ পাঠাগার</h1>
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden lg:flex ">{navMenu}</div>

          <div className="hidden lg:flex gap-10 ">
            {/* Category and Search */}
            <div className="flex items-center gap-2 bg-white rounded-full shadow-md px-4 my-6 border">
              <div className="flex items-center gap-2">
                <CategoryIcon sx={{ color: "blue" }} />
                <select className="bg-white text-black rounded px-2 py-1 text-sm">
                  <option>Category</option>
                  <option>Category</option>
                  <option>abc</option>
                </select>
              </div>

              <span className="border-l border-gray-300 h-8"></span>

              <input
                type="text"
                placeholder="Search by Book Name"
                className="flex-grow px-4 text-sm text-gray-700 focus:outline-none"
              />

              <button
                type="submit"
                className="text-blue-500 hover:text-blue-700 transition"
                onClick={() => console.log("Search")}
              >
                <SearchIcon />
              </button>
            </div>

            <div className="flex justify-center items-center gap-4 ">
              {/* Wishlist Button */}
              <button
                className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white text-blue-800 shadow-md hover:shadow-lg transition border"
                aria-label="Wishlist"
              >
                <HeartIcon className="h-6 w-6" />
                {/* Badge */}
                <span className="absolute top-1 right-1 text-xs bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
                  0
                </span>
              </button>

              {/* Cart Button */}
              <button
                className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white text-blue-800 shadow-md hover:shadow-lg transition border"
                aria-label="Cart"
              >
                <ShoppingCartIcon className="h-6 w-6" />
                {/* Badge */}
                <span className="absolute top-1 right-1 text-xs bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
                  0
                </span>
              </button>

              {/* Menu Button */}
              <button
                className="flex items-center justify-center border w-10 h-10 rounded-full bg-white text-blue-800 shadow-md hover:shadow-lg transition"
                aria-label="Menu"
              >
                <Bars3Icon className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="lg:hidden  pl-[100px] pt-[12px]">
            <button
              className="p-2 border border-black rounded-full"
              onClick={toggleNavbar}
            >
              {isClick ? (
                <CloseIcon sx={{ color: "black" }} />
              ) : (
                <MenuIcon sx={{ color: "black" }} />
              )}
            </button>
          </div>
        </div>
      </div>
      {isClick && (
        <div className="lg:hidden absolute left-0 bg-white w-full z-50 shadow-md pb-1 h-full pl-5 duration-300">
          {navMenu}
        </div>
      )}
    </div>
  );
};

export default Header;
