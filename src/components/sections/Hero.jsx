import '../styles/Hero.css';

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <p className="badge">👋 Hello, I'm</p>

                <h1>Jeevitha Rahiman</h1>

                <h2>Software Engineer | Java Backend Developer</h2>

                <p className="description">
                    Building scalable backend systems using Java,
                    Spring Boot, Microservices, Kafka,
                    PostgreSQL and Cloud Technologies.
                </p>

                <div className="buttons">
                    <a
                        href="/resume/Jeevitha_Rahiman_Resume.pdf"
                        download
                        className="download-btn"
                    >
                        Download Resume
                    </a>
                    <button
                        className="secondary"
                        onClick={() =>
                            document
                                .getElementById("projects")
                                .scrollIntoView({ behavior: "smooth" })
                        }
                    >
                        View Projects
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Hero;