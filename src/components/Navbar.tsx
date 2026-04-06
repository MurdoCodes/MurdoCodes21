import { navLinksArray } from "@/const/const";

const Navbar = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between py-4">
      <div className="flex items-center justify-between space-x-20 text-2xl font-bold">
        <img src="/logo_processed.svg" alt="Logo" className="w-25 h-25" />
        <h3 className="text-4xl">MurdoCodes</h3>
      </div>
      <ul className="flex space-x-6">
        {navLinksArray.map((link) => (
          <li key={link.name}>
            <a href={link.href} className="hover:text-gray-300">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
