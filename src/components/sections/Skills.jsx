import '../styles/Skills.css';

function Skills() {

    const skillCategories = [
        {
            title: "Programming Languages",
            skills: ["Java", "SQL"]
        },
        {
            title: "Backend Development",
            skills: [
                "Spring Boot",
                "Spring MVC",
                "Spring Data JPA",
                "Hibernate",
                "REST APIs",
                "Microservices",
                "Apache Kafka",
                "Asynchronous Processing"
            ]
        },
        {
            title: "Security",
            skills: [
                "Spring Security",
                "OAuth2",
                "JWT Authentication",
                "Role-Based Authorization"

            ]
        },
        {
            title: "Databases",
            skills: [
                "PostgreSQL",
                "IBM DB2",
                "MySQL",
                "SQL Query Optimization",
                "Relational Database Design"
            ]
        },
        {
            title: "Testing",
            skills: [
                "JUnit",
                "Mockito",
                "Unit Testing",
                "Integration Testing",
                "API Testing"
            ]
        },
        {
            title: "Cloud & DevOps",
            skills: [
                "Git",
                "GitHub",
                "Maven",
                "Jenkins",
                "CI/CD",
                "Docker",
                "AWS",
                "Azure"
            ]
        },
        {
            title: "Engineering Tools & Support",
            skills: [
                "Kibana",
                "Postman",
                "Log Analysis",
                "Production Debugging",
                "Root Cause Analysis"
            ]
        },
        {
            title: "Computer Science Fundamentals",
            skills: [
                "OOP",
                "Collections",
                "DSA",
                "Multithreading",
                "Design Patterns",
                "Distributed Systems",

                "HLD/LLD Fundamentals"
            ]
        },
        {
            title: "Frontend",
            skills: [
                "ReactJS",
                "JavaScript",
                "HTML",
                "CSS"
            ]
        }
    ];

    return (
        <section className="skills-section">
            <h2 className="section-title">Technical Skills</h2>

            <div className="skills-grid">
                {skillCategories.map((category) => (
                    <div className="skill-card" key={category.title}>
                        <h3>{category.title}</h3>

                        <div className="skill-tags">
                            {category.skills.map((skill) => (
                                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;