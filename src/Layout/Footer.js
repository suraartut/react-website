import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#fdc6c6] lg:py-16 py-10 lg:px-0 px-8">
      <div className="lg:flex justify-around">
        <div className="hoverable">
          <h3 className="text-[#83bcff] text-2xl font-semibold lg:pb-3">
            Holding
          </h3>
          <ul>
            <li>Hakkımızda</li>
            <li>Biz kimiz</li>
            <li>Vizyon ve Misyon</li>
            <li>Ekibimiz</li>
          </ul>
        </div>
        <div className="hoverable">
          <h3 className="text-[#83bcff] text-2xl font-semibold lg:pb-3 lg:mt-0 mt-8">
            Our Company
          </h3>
          <ul>
            <li>
              <Link to="/">Kurumsal Bilgiler</Link>
            </li>
            <li>
              <Link to="/">Sosyal Sorumluluk</Link>
            </li>
            <li>
              <Link to="/">İnsan Kaynakları</Link>
            </li>
            <li>
              <Link to="/">Şirket Bilgileri</Link>
            </li>
          </ul>
        </div>
        <div className="hoverable">
          <h3 className="text-[#83bcff] text-2xl font-semibold lg:pb-3 lg:mt-0 mt-8">
            Products
          </h3>
          <ul className="footer-icons">
            <li>
              <Link to="/">Özel Teklifler</Link>
            </li>
            <li>
              <Link to="/">Kariyer</Link>
            </li>
            <li>
              <Link to="/">Haberler</Link>
            </li>
            <li>
              <Link to="/">Business</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#83bcff] text-2xl font-semibold lg:pb-3 lg:mt-0 mt-8">
            Sosyal Medya
          </h3>
          <ul className="flex lg:justify-between lg:gap-0 gap-6">
            <li className="text-3xl">
              <Link to="/">
                <FaInstagram />
              </Link>
            </li>
            <li className="text-3xl">
              <Link to="/">
                <FaFacebook />
              </Link>
            </li>
            <li className="text-3xl">
              <Link to="/">
                <FaTwitter />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
