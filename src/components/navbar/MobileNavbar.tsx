import React, {useState} from 'react';
import {ChevronRightSvg, DarkLogo, UserSvg} from "src/icon-pack/icons";
import {Link} from "react-router";
import {links} from "src/components/constant";

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="absolute px-3 py-1 bg-black md:bg-[#1C2526] h-navbarHeight text-white flex items-center justify-between sticky top-0 z-50">
      <Link to={'/'} className={'h-full'}>
        <ChevronRightSvg className={'h-full w-full'}/>
      </Link>
      <Link to="/" className={'h-full'}>
        <DarkLogo className={'h-full w-full '}/>
      </Link>
      {/* Hamburger btn */}
      <div className="relative md:hidden h-full">
        <button
          type={'button'}
          onClick={toggleMenu}
          onBlur={toggleMenu}
          className="text-white w-full h-full focus:outline-none">
          <UserSvg className={'w-full h-full'}/>
        </button>

        <ul
          className={`${isMenuOpen ? 'min-w-[100px] top-0 left-0 block bg-black absolute top-navbarHeight' : 'hidden'} `}
          id="mobile-menu">
          {links.map(node =>
            <li>
              <Link
                to={node.to}
                className="text-sm block hover:bg-gray-700 p-2 whitespace-nowrap">{node.label}</Link>
            </li>
          )}

        </ul>
      </div>


    </nav>
  );
};

export default MobileNavbar;
