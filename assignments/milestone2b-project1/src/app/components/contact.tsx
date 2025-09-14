const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>

      <div className="contact__container bd-grid">
        <form action="" className="contact__form">
          <input type="text" placeholder="Name" className="contact__input" />
          <input type="email" placeholder="Email" className="contact__input" />
          <textarea name="message" id="message" cols={30} rows={10} className="contact__input"></textarea>
          <button type="submit" className="contact__button button">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
