import React from 'react';
import {Link} from "react-router";
import {Logo} from "src/icon-pack/icons";
import {links} from "src/components/constant";

const DesktopNavbar = () => {
  return (
    <nav
      className="bg-[#1C2526] h-navbarHeight text-white flex items-center sticky top-0 z-50">
      <Link to="/" className={'h-full'}>
        <Logo className={'h-full w-full'}/>
      </Link>
      <div className={'px-4 hidden md:inline-flex'}>
        <ul
          className={`md:flex gap-x-6  text-sm font-medium static`}>
          {links.map((node, index) =>
            <li key={`desktop-link-${index}`}>
              <Link
                to={node.to}
                className={'text-sm px-2'}
              >{node.label}</Link>
            </li>
          )}
        </ul>
      </div>


    </nav>
  );
};

export default DesktopNavbar;
