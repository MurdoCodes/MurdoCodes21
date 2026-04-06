import Logo from "./Logo";
import Navbar from "./Navbar";
import SocialLinks from "./SocialLinks";
import HireMeButton from "./HireMeButton";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <>
      {/** Header
       *  Logo/Site Nam
       *  Navigation
       * Social Links
       */}
      <header className="absolute w-full z-50 transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20 gap-5">
          {/* Logo and Site Name */}
          <Logo />

          {/* Navigation */}
          <Navbar />

          {/* Social Links */}
          <SocialLinks />

          {/* Hire Me Button */}
          <HireMeButton />

          {/* Mobile Menu - Visible on small screens */}
          <MobileMenu />
        </div>
      </header>
    </>
  );
};

export default Header;
