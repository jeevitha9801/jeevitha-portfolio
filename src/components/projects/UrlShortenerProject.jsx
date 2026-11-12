function UrlShortenerProject() {
    return (
        <div className="project-card">

            <h3>URL Shortener Platform</h3>

            <p className="project-description">
                Built a URL Shortener using Java and Spring Boot to strengthen
                backend development and system design skills, focusing on URL
                mapping, HTTP redirection, analytics, expiration handling,
                and database persistence.
            </p>

            <div className="project-section">
                <h4>✨ Features Implemented</h4>

                <ul>
                    <li>Generate short URLs from long URLs</li>
                    <li>Custom Alias Support (e.g. /google, /github)</li>
                    <li>URL Redirection to Original Destination</li>
                    <li>Copy & Open Generated Links from UI</li>
                    <li>URL Expiration Handling</li>
                    <li>Duplicate URL Prevention</li>
                    <li>Persistent URL Storage</li>
                    <li>Top 3 Most-Visited URLs Dashboard</li>
                </ul>
            </div>

            <div className="project-section">
                <h4>📚 Backend Concepts Explored</h4>

                <ul>
                    <li>REST API Design</li>
                    <li>URL Mapping & Resolution</li>
                    <li>HTTP Redirection (302 Redirects)</li>
                    <li>Database Modeling & Persistence</li>
                    <li>Analytics & Click Tracking</li>
                    <li>URL Expiration & Validation</li>
                    <li>Duplicate Detection Strategy</li>
                    <li>Backend Design Beyond CRUD Operations</li>
                </ul>
            </div>

            <div className="project-section">
                <h4>⚙️ Tech Stack</h4>

                <div className="project-tags">
                    <span>Java</span>
                    <span>Spring Boot</span>
                    <span>Spring Data JPA</span>
                    <span>Hibernate</span>
                    <span>MySQL</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                </div>
            </div>

            <div className="project-section">
                <h4>💡 What I Learned</h4>

                <ul>
                    <li>
                        Designed REST APIs for URL shortening, redirection,
                        and analytics tracking.
                    </li>

                    <li>
                        Implemented URL mapping and HTTP redirection
                        functionalities.
                    </li>

                    <li>
                        Designed database models to store URL metadata,
                        click statistics, and expiration details.
                    </li>

                    <li>
                        Built analytics features such as click tracking and
                        top visited URL monitoring.
                    </li>

                    <li>
                        Explored practical backend design concepts beyond
                        traditional CRUD operations.
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default UrlShortenerProject;