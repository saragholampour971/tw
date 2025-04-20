import DesktopNavbar from "src/components/navbar/DesktopNavbar";
import MobileNavbar from "src/components/navbar/MobileNavbar";


const Navbar = () => {

  return (
    <>
      <div className={'hidden md:block sticky top-0 z-50'}>
        <DesktopNavbar/>
      </div>
      <div className={'block md:hidden sticky sticky top-0 z-50'}>
        <MobileNavbar/>
      </div>
    </>
    
  );
};


export default Navbar;
