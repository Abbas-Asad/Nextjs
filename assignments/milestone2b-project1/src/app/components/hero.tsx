"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import Typed from "typed.js";

export default function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["W3 Developer", "UI/UX Designer", "Tech Mentor"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    // Cleanup function to destroy Typed instance
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="section hero__section">
      <div className="hero">
        <div className="left">
          Hi! <br />
          I&apos;m Abbas Asad <br />
          {/* Reserving space for the typing effect */}
          <span
            ref={el}
            style={{
              display: "inline-block",
              minHeight: "auto",
            }}
          />
          <p>
            Building Modern, Fast and Scalable Websites for Business Solutions
          </p>
          <Link href={"https://www.linkedin.com/in/abbas-asad"}>
            <button
              className="hero__contact__button button"
              style={{ fontWeight: "500" }}
            >
              Contact
            </button>
          </Link>
        </div>
        <div className="right">
          <Image
            width={900}
            height={900}
            src="/assets/heroimg.png"
            alt="hero__img"
            className="hero__img"
          />
        </div>
      </div>
    </section>
  );
}
