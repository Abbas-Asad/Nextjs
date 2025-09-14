import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from 'lucide-react';
import Image from "next/image";
import Link from 'next/link';

export default function Header() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-[rgb(18,19,35)] fixed w-full z-40">
      <div className="container mx-auto flex justify-between items-center py-6 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="Abbas Logo"
            width={'300'}
            height={'300'}
            className="h-10 w-10 rounded-full"
          />
          <span className="text-white text-2xl font-bold hover:text-cyan transition duration-300">
            Abbas
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-[#00ffff] transition duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="text-white scale-125" />
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col mt-6 gap-11">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white hover:text-[#00ffff] transition duration-300 text-center"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
