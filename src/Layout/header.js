import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/logo.png";
import { useLocation } from "react-router-dom";
import { HeaderData } from "../collections/headerData";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const router = useLocation();

  const [showMenu, setshowMenu] = useState(false);

  const handleClick = () => {
    setshowMenu((prev) => !prev);
  };

  return (
    <header className="w-full h-[81px] fixed top-0 bg-transparent flex z-[100]">
      <nav className="w-full lg:flex hidden">
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
        <div className="flex items-center">
          {!showMenu ? (
            <GiHamburgerMenu
              className="w-7 h-7 text-[#83bcff] mx-5"
              onClick={handleClick}
            />
          ) : (
            <AiOutlineClose
              className="w-7 h-7 text-[#83bcff] mx-5"
              onClick={handleClick}
            />
          )}

          <div className="w-full absolute left-[43%]">
            <img src={Logo} alt="logo" className="w-[60px]" />
          </div>
        </div>
        <div className="bg-[#fdc6c6]">
          {showMenu && (
            <div className="mt-5 py-10">
              {HeaderData.map((item) => {
                return (
                  <div key={item.id} className="px-5 py-2 text-[#4b5358]">
                    <Link to={item.link}>{item.name}</Link>
                  </div>
                );
              })}
              <div className="text-white text-center mt-5 bg-[#4b5358] hover:bg-gray-600 mx-4 px-1 py-3">
                <Link to="/">İletişime Geç</Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
