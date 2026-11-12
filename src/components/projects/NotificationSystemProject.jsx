function NotificationSystemProject() {
    return (
        <div className="project-card">

            <h3>Scalable Event-Driven Notification System</h3>
            <p className="project-description">
                Built a Scalable Event-Driven Notification System using Java,
                Spring Boot, RabbitMQ, and PostgreSQL to explore how modern
                backend applications process notifications asynchronously,
                handle failures reliably, and scale message processing using
                event-driven architecture.
            </p>

            <div className="project-section">
                <h4>✨ Features Implemented</h4>

                <ul>
                    <li>REST API for Notification Requests</li>
                    <li>Asynchronous Notification Processing using RabbitMQ</li>
                    <li>Email, SMS, and Push Notification Channels</li>
                    <li>Retry Queue for Failed Messages</li>
                    <li>Dead Letter Queue (DLQ) Handling</li>
                    <li>Failure Recovery Mechanism</li>
                    <li>Multiple Consumers for Concurrent Processing</li>
                    <li>Load Testing and Consumer Scalability Validation</li>
                    <li>Notification History Tracking with Pagination</li>
                    <li>Real-Time Analytics Dashboard</li>
                    <li>Application, PostgreSQL, and RabbitMQ Health Monitoring</li>
                    <li>Docker Compose Based Environment Setup</li>
                </ul>
            </div>

            <div className="project-section">
                <h4>📚 Backend Concepts Explored</h4>

                <ul>
                    <li>Event-Driven Architecture</li>
                    <li>Producer-Consumer Pattern</li>
                    <li>Asynchronous Messaging</li>
                    <li>Queue-Based Communication</li>
                    <li>Strategy Design Pattern for Notification Channel Routing</li>
                    <li>Retry Queue & Dead Letter Queue Design Patterns</li>
                    <li>Concurrent Consumer Processing</li>
                    <li>Fault Tolerance & Failure Handling</li>
                    <li>System Monitoring & Observability</li>
                    <li>Dashboard API Development</li>
                </ul>
            </div>

            <div className="project-section">
                <h4>⚙️ Tech Stack</h4>

                <div className="project-tags">
                    <span>Java 21</span>
                    <span>Spring Boot</span>
                    <span>Spring Data JPA</span>
                    <span>RabbitMQ</span>
                    <span>PostgreSQL</span>
                    <span>Docker</span>
                    <span>Docker Compose</span>
                    <span>Spring Boot Actuator</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>Chart.js</span>
                </div>
            </div>

            <div className="project-section">
                <h4>💡 What I Learned</h4>

                <ul>
                    <li>Designed Event-Driven Workflows using RabbitMQ.</li>
                    <li>Implemented reliable message processing with Retry Queues and Dead Letter Queues.</li>
                    <li>Scaled notification processing using multiple concurrent consumers.</li>
                    <li>Improved system reliability through fault tolerance and failure recovery mechanisms.</li>
                    <li>Monitored application, database, and messaging infrastructure health using observability tools.</li>
                </ul>
            </div>

        </div>
    );
}

export default NotificationSystemProject;