import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { cn } from "@/lib/utils"
import Section from './layout/section';

const Contact = () => {
  return (
    <Section id="contact" className="text-gray-100">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Get in Touch</h2>
        <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          We&apos;d love to hear from you! Reach out using the form below or through our contact information.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="flex items-center space-x-4">
            <MapPin className="w-6 h-6 text-teal-400" />
            <span>Nazimabad no 1, Karachi, Pakistan</span>
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="w-6 h-6 text-teal-400" />
            <a href="mailto:youremail@example.com" className="hover:text-teal-400 transition-colors">
              abbas07tech@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="w-6 h-6 text-teal-400" />
            <span>+ 92-311-2540080</span>
          </div>
          <div className="relative w-full h-64 rounded-xl overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Block%201%20Nazimabad%20Karachi%20Karachi%20City%20Sindh%2074600&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.7)" }}
            ></iframe>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent"></div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className={cn(
                "w-full bg-slate-800 rounded-md border-gray-700 text-gray-100",
                "focus:ring-2 focus:ring-teal-500 focus:border-transparent",
                "transition duration-200 ease-in-out"
              )}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className={cn(
                "w-full bg-slate-800 rounded-md border-gray-700 text-gray-100",
                "focus:ring-2 focus:ring-teal-500 focus:border-transparent",
                "transition duration-200 ease-in-out"
              )}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className={cn(
                "w-full bg-slate-800 rounded-md border-gray-700 text-gray-100",
                "focus:ring-2 focus:ring-teal-500 focus:border-transparent",
                "transition duration-200 ease-in-out",
                "resize-none"
              )}
            ></textarea>
          </div>
          <button
            className={cn(
              "w-full text-white bg-gradient-to-r from-teal-400 to-blue-500",
              "hover:from-teal-500 hover:to-blue-600",
              "py-2 px-6 rounded-md text-lg font-medium",
              "transition-all duration-200 ease-in-out",
              "focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-slate-900",
              "shadow-lg hover:shadow-teal-500/50"
            )}
          >
            <Send className="w-5 h-5 inline-block mr-2" />
            Send Message
          </button>
          <p className="text-sm text-gray-400 mt-3">
            We appreciate you taking the time to get in touch with us.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Contact;

