import Link from 'next/link';
import { Menu } from 'lucide-react';

const navlinks = [
  { id: 1, href: '/', label: 'Books' },
  { id: 2, href: '/', label: 'About' },
  { id: 3, href: '/', label: 'Contact' },
];

const Header = () => {
  return (
    <header className="bg-[#1C2128] text-white py-4 shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/">Potter Books</Link>
        </h1>
        <nav>
          <ul className="space-x-6 hidden md:flex">
            {navlinks.map((links) => (
              <li key={links.id}>
                <Link href={links.href} className="hover:text-[#FFD700]">{links.label}</Link>
              </li>
            ))}
          </ul>
          <Menu className="md:hidden flex cursor-pointer" />
        </nav>
      </div>
    </header>
  );
};

export default Header;

