import { navLinksArray } from "@/const/const";

const Navbar = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between">
      {/* Logo and Site Name */}
      <div className="flex items-center gap-2">
        <img src="/logo_processed.svg" alt="Logo" className="w-10" />
        <h3 className="text-2xl font-bold">MurdoCodes</h3>
      </div>

      {/* Navigation Links */}
      <div className="flex">
        <ul className="flex gap-4">
          {navLinksArray.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="hover:text-gray-300 text-2xl"
            >
              {link.name}
            </a>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
