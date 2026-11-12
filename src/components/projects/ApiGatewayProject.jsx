function ApiGatewayProject() {
    return (
        <div className="project-card">

            <h3>API Gateway & Rate Limiter</h3>

            <p className="project-description">
                Built an API Gateway with Rate Limiting using Spring Boot to understand
                how modern applications protect backend services from excessive traffic
                while monitoring system health and performance.
            </p>

            <div className="project-section">
                <h4>✨ Features Implemented</h4>

                <ul>
                    <li>API Key Authentication</li>
                    <li>Fixed Window Rate Limiting</li>
                    <li>Request Logging using Spring Filters</li>
                    <li>Response Time Tracking</li>
                    <li>Real-Time Metrics Collection</li>
                    <li>Gateway Health Monitoring</li>
                    <li>Interactive Monitoring Dashboard</li>
                </ul>
            </div>

            <div className="project-section">
                <h4>📚 Backend Concepts Explored</h4>

                <ul>
                    <li>API Gateway Design</li>
                    <li>Request Interception using Filters</li>
                    <li>Fixed Window Rate Limiting Algorithm</li>
                    <li>Thread-Safe Metrics Collection</li>
                    <li>Response Time Monitoring</li>
                    <li>Traffic Throttling</li>
                    <li>System Observability</li>
                    <li>Real-Time Dashboard Monitoring</li>
                </ul>
            </div>

            <div className="project-section">
                <h4>⚙️ Tech Stack</h4>

                <div className="project-tags">
                    <span>Java 21</span>
                    <span>Spring Boot</span>
                    <span>Spring MVC</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>Java Concurrency</span>
                    <span>Monitoring</span>
                </div>
            </div>

            <div className="project-section">
                <h4>💡 What I Learned</h4>

                <ul>
                    <li>
                        Implemented API Key Authentication and request filtering
                        using Spring Filters.
                    </li>

                    <li>
                        Built a Fixed Window Rate Limiting mechanism to control
                        API traffic and prevent excessive requests.
                    </li>

                    <li>
                        Collected and monitored application metrics using
                        thread-safe techniques.
                    </li>

                    <li>
                        Developed real-time monitoring capabilities through
                        response time tracking and observability practices.
                    </li>

                    <li>
                        Gained practical understanding of API Gateway patterns
                        used in distributed systems and microservice architectures.
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default ApiGatewayProject;