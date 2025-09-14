import { ReactNode } from "react";

interface Propsdata {
  id: string
  className?: string // Optional
  children?: ReactNode; // Add this to support nested elements
}

const Section = (props: Propsdata) => {
  return (
    <section id={props.id} className={`pt-48 pb-32 ${props.className || ''}`}>
      <div className="container px-4 md:px-6 mx-auto">
        {props.children} {/* Render children here */}
      </div>
    </section>
  );
};

export default Section;
