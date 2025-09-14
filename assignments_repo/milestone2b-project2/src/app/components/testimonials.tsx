import { Quote } from 'lucide-react'
import Image from 'next/image';
import Section from './layout/section';

const testimonials = [
  {
    imgSrc: "/client1.jpg",
    feedback:
      "Their creativity and attention to detail transformed my brand into a standout online presence. Highly recommend their services.",
    name: "Michael Johnson",
    role: "CEO, Tech Startup",
  },
  {
    imgSrc: "/client2.jpg",
    feedback:
      "Exceptional service! Delivered a stunning website that exceeded my expectations. Highly professional and reliable.",
    name: "John Smith",
    role: "Owner, Boutique Store",
  },
  {
    imgSrc: "/client3.jpg",
    feedback:
      "Delivered on time and on budget! Their expertise in web development is unmatched, and they made the whole process seamless.",
    name: "David Anderson",
    role: "Freelance Photographer",
  },
];

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
          Testimonials
        </h2>
        <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          What My Clients Have to Say About the Quality of My Work, Expertise, and Services Delivered.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl bg-slate-800 transition-all duration-300 ease-in-out hover:shadow-[0_0_40px_rgba(56,178,172,0.6)] hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-0 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-20" />
            <div className="relative z-10 p-6 flex flex-col items-center text-center">
              <div className="relative mb-6">
                <Image
                  src={testimonial.imgSrc}
                  alt={`testimonial-${index + 1}`}
                  width={'200'}
                  height={'200'}
                  className="w-20 h-20 rounded-full object-cover border-2 border-teal-400 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute -bottom-2 -right-2 bg-teal-400 rounded-full p-2">
                  <Quote className="w-4 h-4 text-slate-900" />
                </div>
              </div>
              <p className="text-gray-300 group-hover:text-white/90 transition-colors duration-300 mb-6">
                {testimonial.feedback}
              </p>
              <div className="mt-auto">
                <div className="h-px w-12 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto mb-4" />
                <h3 className="font-semibold text-white text-lg">
                  {testimonial.name}
                </h3>
                <p className="text-gray-400 group-hover:text-teal-300 transition-colors duration-300">
                  {testimonial.role}
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-teal-300 shadow-[0_0_10px_rgba(56,178,172,0.7)] transition-all duration-300 group-hover:w-full" />
            <div className="absolute -bottom-2 -right-2 h-20 w-20 rounded-full bg-teal-500/20 blur-2xl transition-all duration-300 group-hover:scale-150 group-hover:opacity-100 opacity-0" />
          </div>
        ))}
      </div>
    </Section>
  );
}

