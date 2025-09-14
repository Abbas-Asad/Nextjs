import { Briefcase, Image, Globe, ShoppingCart, Palette, PenTool, Search, FileEdit, Layout } from 'lucide-react'
import { cn } from "@/lib/utils"
import Section from './layout/section'

const services = [
  {
    icon: Image,
    title: "Photoshop Editing",
    description: "Delivering professional image enhancements and custom graphic designs."
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Building responsive, fast and modern websites to showcase your brand."
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Developing seamless online stores with fast, secure payment systems."
  },
  {
    icon: PenTool,
    title: "Logo Design",
    description: "Creating unique and memorable logos that capture your brand's identity."
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Crafting visually stunning designs for social media marketing and branding."
  },
  {
    icon: Briefcase,
    title: "Portfolio Website",
    description: "Building professional portfolio websites that highlight your expertise to land your dream job."
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Improving website rankings to drive more organic traffic."
  },
  {
    icon: FileEdit,
    title: "Content Writing",
    description: "Crafting engaging and high-quality content to elevate your brand and engage your audience."
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "Designing intuitive, beautiful and visually appealing user interfaces for clients."
  }
]

export default function Services() {
  return (

    <Section id="services">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Services</h2>
        <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Comprehensive digital solutions to help your business grow and thrive in the modern age.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl bg-slate-800 p-6 transition-all duration-300 ease-in-out hover:shadow-[0_0_40px_rgba(56,178,172,0.6)] hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-0 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-20" />
            <div className="relative z-10">
              <div className="flex items-center space-x-4">
                <div className={cn(
                  "inline-flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 ease-in-out",
                  "bg-primary/10 text-primary",
                  "text-white group-hover:bg-white group-hover:text-teal-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(56,178,172,0.7)]"
                )}>
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white transition-colors duration-300">{service.title}</h3>
              </div>
              <p className="mt-4 text-gray-300 group-hover:text-white/90 transition-colors duration-300">
                {service.description}
              </p>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-teal-300 shadow-[0_0_10px_rgba(56,178,172,0.7)] transition-all duration-300 group-hover:w-full" />
            <div className="absolute -bottom-2 -right-2 h-20 w-20 rounded-full bg-teal-500/20 blur-2xl transition-all duration-300 group-hover:scale-150 group-hover:opacity-100 opacity-0" />
          </div>
        ))}
      </div>
    </Section>
  )
}

