"use client"
import Image from "next/image"
import Link from "next/link"
import { Typewriter } from 'react-simple-typewriter'
import Section from "./layout/section";


export default function Hero() {
  const text = Typewriter({

    words: ['Web Developer', 'Next.js Developer', 'UI/UX Designer', 'Programming Mentor'],
    loop: true,
  });
  return (
    <Section id="hero">

      <div className="grid items-center gap-28 lg:grid-cols-2">
        <div className="space-y-6 ">
          <div className="space-y-1">
            <h2 className="text-4xl font-bold text-white">
              Hello, It&apos;s Me
            </h2>
            <h1 className="text-[2.9rem] leading-[3.90rem] font-bold text-[#00ffff]">
              Abbas Asad
            </h1>
            <div className="flex items-center gap-2">
              <p className="text-2xl font-bold text-white">
                And I&apos;m a <span className="text-[#00ffff]">{text}</span> |
              </p>
            </div>
          </div>

          <p className="text-lg font-medium text-white leading-relaxed">
            Hello! I&apos;m <span className="text-[#00ffff]">Abbas</span> Asad, an aspiring Information Technology Engineer based in
            Pakistan. I am currently pursuing my degree from GIAIC, Karachi, with a passion for the
            ever-evolving world of technology. My focus is on mastering diverse IT domains,
            including coding, software development, and emerging tech trends.
          </p>

          <div className="flex space-x-4">
            <Link href="https://github.com/abbas-asad" className="rounded-full border-2 border-[#00ffff] p-2 transition-colors hover:bg-[#00ffff]/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00ffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </Link>
            <Link href="#" className="rounded-full border-2 border-[#00ffff] p-2 transition-colors hover:bg-[#00ffff]/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00ffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </Link>
            <Link href="#" className="rounded-full border-2 border-[#00ffff] p-2 transition-colors hover:bg-[#00ffff]/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00ffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </Link>
            <Link href="https://www.linkedin.com/in/abbas-asad" className="rounded-full border-2 border-[#00ffff] p-2 transition-colors hover:bg-[#00ffff]/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00ffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </Link>
          </div>

          <button className="rounded-full bg-[#00ffff] px-8 py-3 font-bold text-black hover:bg-[#00ffff]/90 transition-colors">
            Download CV
          </button>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <Image
              src="/profile.png"
              alt="Abbas Avatar"
              width={'4000'}
              height={'4000'}
              className="relative z-10 w-full h-full"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}

