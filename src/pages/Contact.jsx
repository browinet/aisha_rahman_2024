import SiteLayout from "../layouts/SiteLayout";

function Contact() {
  return (
    <SiteLayout>
      <div className="contact-page">
        <h1>Contact & Info</h1>
        <p>
          Thank you for your interest in my work! If you have any questions or
          comments, feel free to get in touch with me!
        </p>
        <div className="contact-table">
          <div className="table-row">
            <a href="mailto:hi@aisharahman.com">
              <img
                className="contact-icon"
                src="imgs/Assest/email.png"
                alt=""
              />
            </a>
            <a href="mailto:hi@aisharahman.com">hello@aisharahman.com</a>
          </div>
          <div className="table-row">
            <a href="mailto:hi@aisharahman.com">
              <img
                className="contact-icon"
                src="imgs/Assest/linkedin.png"
                alt=""
              />
            </a>
            <a href="https://www.linkedin.com/in/aisha-o-rahman/">
              https://www.linkedin.com/in/aisha-o-rahman/
            </a>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}

export default Contact;
