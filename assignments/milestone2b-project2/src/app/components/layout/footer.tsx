import '@fortawesome/fontawesome-free/css/all.css';
import Link from 'next/link';

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/abbas-asad/',
    iconClass: 'fab fa-linkedin',
    hoverClass: 'hover:text-blue-500',
  },
  {
    href: '#',
    iconClass: 'fab fa-facebook',
    hoverClass: 'hover:text-blue-500',
  },
  {
    href: 'https://www.youtube.com/@abbastech07/',
    iconClass: 'fab fa-youtube',
    hoverClass: 'hover:text-red-500',
  },
  {
    href: '#',
    iconClass: 'fab fa-instagram',
    hoverClass: 'hover:text-pink-500',
  },
  {
    href: 'https://github.com/abbas-asad/',
    iconClass: 'fab fa-github',
    hoverClass: 'hover:text-gray-100',
  },
  {
    href: '#',
    iconClass: 'fab fa-skype',
    hoverClass: 'hover:text-blue-400',
  },
];

const Footer = () => {
  return (
    <footer className="bg-[rgb(18,19,35)] slate900tha text-gray-400 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link
          href="/"
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-200"
        >
          <span className="ml-3 text-xl">Abbas Asad Portfolio</span>
        </Link>
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4 border-l-2 border-gray-600">
          &copy; 2024 Abbas Asad. All rights reserved.
        </p>
        <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00ffff] mx-3"
            >
              <i className={`${link.iconClass} fa-lg`}></i>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
