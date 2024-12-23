const About = () => {
  const paragraphs = [
    "I am Abbas Asad, a dedicated Front-End Developer specializing in TypeScript, Next.js, and cutting-edge web technologies. My mission is to craft responsive, visually appealing, and user-centric web applications that help businesses thrive in the digital landscape. By combining sleek design with robust functionality, I create fast-loading, SEO-optimized, and scalable solutions tailored to meet your unique business objectives. Leveraging server-side rendering (SSR) and static site generation (SSG), I ensure your web presence stands out and delivers results.Collaboration is at the core of my approach. I work closely with clients, designers, and teams to transform ideas into impactful digital experiences. Clear communication and attention to detail ensure every project achieves its vision and delivers exceptional value. From conceptualization to deployment, I maintain a strong focus on user experience and modern design trends. With a passion for innovation, I continuously explore new technologies to enhance performance and scalability."
  ];

  return (
    <section className="about section" id="about">
      <h2 className="section-title" style={{ marginBottom: "1.8rem" }}>About Me</h2>

      <div className="about__container bd-grid">
        <div className="about__all">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="about__text">{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;