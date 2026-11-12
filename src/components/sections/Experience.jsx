import '../styles/Experience.css';

function Experience() {
    return (
        <section className="experience">
            <h2 className="section-title">Work Experience</h2>

            <div className="experience-card">
                <h3>Expeditors</h3>

                <div className="roles">
                    <p>
                        <strong>Engineer I (Promoted)</strong>
                        <span> | Aug 2026 – Present</span>
                    </p>

                    <p>
                        <strong>Associate Developer</strong>
                        <span> | Dec 2023 – Jul 2026</span>
                    </p>
                </div>

                <ul>
                    <li>
                        Developed and maintained enterprise backend applications
                        and RESTful APIs using Java, Spring Boot, Spring MVC,
                        Spring Data JPA, and Hibernate for booking and shipment
                        workflows.
                    </li>

                    <li>
                        Contributed to the transition from monolithic
                        architecture toward microservices, developing backend
                        services while supporting existing production systems.
                    </li>

                    <li>
                        Developed Kafka-based asynchronous event publishing for
                        booking workflows, enabling downstream communication and
                        event-driven system integration.
                    </li>

                    <li>
                        Designed PostgreSQL database schemas, JPA entity
                        mappings, SQL queries, and secured backend APIs using
                        Spring Security and JWT-based authentication.
                    </li>

                    <li>
                        Investigated and resolved production issues through
                        application log analysis, IBM DB2 query optimization,
                        and root-cause analysis, improving application
                        reliability and performance.
                    </li>

                    <li>
                        Contributed to automated testing, CI/CD pipelines,
                        and production releases using JUnit, Mockito, Git,
                        Maven, and Jenkins within Agile development.
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Experience;