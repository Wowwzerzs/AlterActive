import React from 'react';

function Footer() {
  return (
    <div className="w-full">
      <footer className="block py-4">
        <div className="container mx-auto px-4">
          <hr className="mb-4 border-b-1 border-blueGray-200" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-center mb-2 md:text-left md:mb-0">
                <a
                  // href="https://www.creative-tim.com/?ref=npr-footeradmin" Change this
                  target="_blank"
                  className="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left"
                >
                  Copyright © 2024 Alter Active
                </a>
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end justify-center">
                <li>
                  <a
                    // href="https://www.creative-tim.com?ref=npr-footeradmin" Change this
                    target="_blank"
                    className="text-blueGray-700 hover:text-blueGray-900 text-sm font-semibold block py-1 px-3"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    // href="https://www.creative-tim.com/presentation?ref=npr-footeradmin" change this
                    target="_blank"
                    className="text-blueGray-700 hover:text-blueGray-900 text-sm font-semibold block py-1 px-3"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    // href="https://www.creative-tim.com/license?ref=npr-footeradmin" Change this 
                    target="_blank"
                    className="text-blueGray-700 hover:text-blueGray-900 text-sm font-semibold block py-1 px-3"
                  >
                    Licenses
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
