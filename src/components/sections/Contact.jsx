import '../styles/Contact.css';

function Contact() {
    return (
        <section className="contact">
            <h2 className="section-title">Let's Connect</h2>

            <div className="contact-card">
                <p className="contact-description">
                    Software Engineer with 3+ years of experience in Java backend development, building scalable applications using Spring Boot, REST APIs, Microservices, Kafka, SQL, and modern backend technologies.
                    I'm always interested in connecting with fellow engineers, discussing backend technologies, and exploring software engineering opportunities.
                </p>

                <div className="contact-links">
                    <a
                        href="mailto:rahijee365@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        📧 Email
                    </a>

                    <a
                        href="https://www.linkedin.com/in/jeevitha9801/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        💼 LinkedIn
                    </a>

                    <a
                        href="https://github.com/jeevitha9801"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        💻 GitHub
                    </a>
                </div>

                <p className="contact-location">
                    📍 Chennai, India
                </p>
            </div>
        </section>
    );
}

export default Contact;