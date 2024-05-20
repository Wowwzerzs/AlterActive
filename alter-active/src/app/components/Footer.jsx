import React, { useState, useEffect } from 'react';
import Link from "next/link";

function Footer() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(
        prevScrollPos < currentScrollPos ||
          currentScrollPos < 50 ||
          currentScrollPos === 0
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <footer
      className={`block py-4 fixed bottom-0 w-full bg-white transition-all duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-4">
        <hr className="mb-4 border-b-1 border-blueGray-200" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4">
            <div className="text-center mb-2 md:text-left md:mb-0">
              <span className="text-sm text-black font-semibold py-1 text-center md:text-left">
                Copyright © 2024 Alter Active
              </span>
            </div>
          </div>
          <div className="w-full md:w-8/12 px-4">
            <ul className="flex flex-wrap list-none md:justify-end justify-center">
              <li>
                <a
                  href="/contact"
                  target="_blank"
                  className="text-black hover:text-blueGray-900 text-sm font-semibold block py-1 px-3"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  target="_blank"
                  className="text-black hover:text-blueGray-900 text-sm font-semibold block py-1 px-3"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  // href="https://www.creative-tim.com/license?ref=npr-footeradmin" Change this 
                  target="_blank"
                  className="text-black hover:text-blueGray-900 text-sm font-semibold block py-1 px-3"
                >
                  Licenses
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
