import Link from 'next/link'
import { FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa'

const Footer = () => {
  const socialLinks = [
    { href: 'https://www.linkedin.com/in/abbas-asad', icon: <FaLinkedin />, alt: 'LinkedIn' },
    { href: 'https://www.linkedin.com/in/abbas-asad', icon: <FaFacebook />, alt: 'Facebook' },
    { href: 'https://github.com/abbas-asad', icon: <FaGithub />, alt: 'GitHub' }
  ]

  return (
    <footer className="footer">
      <p className="footer__title">Abbas</p>
      <div className="footer__social">
        {socialLinks.map((link, index) => (
          <Link key={index} href={link.href} passHref>
            <div className="footer__icon" aria-label={link.alt}>
              {link.icon}
            </div>
          </Link>
        ))}
      </div>
      <p className="footer__copy">&#169; 2024 Abbas Asad Portfolio. All rights reserved</p>
    </footer>
  )
}

export default Footer
