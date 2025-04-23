import DesktopNavbar from "src/components/navbar/DesktopNavbar";
import MobileNavbar from "src/components/navbar/MobileNavbar";
import {useEffect, useRef, useState} from "react";


const Navbar = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      setIsDesktop(window.innerWidth >= 768);
    });

    resizeObserver.observe(document.body);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div className="sticky top-0 z-50">
      {isDesktop ? <DesktopNavbar/> : <MobileNavbar/>}
    </div>

  );
};


export default Navbar;
