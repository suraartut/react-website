import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/logo.png";
import { useLocation } from "react-router-dom";
import { HeaderData } from "../collections/headerData";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const router = useLocation();

  const [showMenu, setshowMenu] = useState(false);

  const handleClick = () => {
    setshowMenu((prev) => !prev);
  };

  return (
    <header className="w-full h-[81px] fixed top-0 bg-transparent flex z-[100]">
      <nav className="w-full lg:flex hidden">
        <li className="flex justify-center items-center pl-7">
          <Link to="/">
            <GiHamburgerMenu className="text-[#83bcff] w-10 h-10" />
          </Link>
        </li>
        <div className="p-1 w-[54%] flex justify-end">
          <img src={Logo} alt="logo" className="w-[108px]" />
        </div>
        <ul className="flex items-center pr-7 w-[46%] justify-end">
          {HeaderData?.map((item) => {
            return (
              <li className="nav-link" key={item.id}>
                <Link to={item.link} className="">
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <nav className="w-full lg:hidden py-5 flex flex-col justify-between">
        <GiHamburgerMenu
          className="w-7 h-7 text-[#83bcff] mx-5"
          onClick={handleClick}
        />
        {showMenu && (
          <div className="mt-5">
            {HeaderData.map((item) => {
              return (
                <div key={item.id} className="px-5 py-2 text-red-600">
                  <Link to={item.link}>{item.name}</Link>
                </div>
              );
            })}
            <div className="text-white bg-red-600 hover:bg-red-500 mx-4 px-1 py-3">
              <Link to="/">İletişime Geç</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
