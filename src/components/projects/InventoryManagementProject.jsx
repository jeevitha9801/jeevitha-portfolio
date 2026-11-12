function InventoryManagementProject() {
    return (
        <div className="project-card">

            <h3>E-Commerce Inventory Management System</h3>

            <p className="project-description">
                Built an E-Commerce Inventory Management System using Spring Boot,
                PostgreSQL, JPA, Docker, Optimistic Locking, and Pessimistic Locking
                to understand how inventory systems handle concurrent order processing,
                prevent overselling, and maintain inventory consistency through
                transactions and locking mechanisms.
            </p>

            <div className="project-section">
                <h4>✨ Features Implemented</h4>

                <ul>
                    <li>Product Management & Inventory Tracking</li>
                    <li>Order Placement & Cancellation</li>
                    <li>Stock Restoration on Order Cancellation</li>
                    <li>Inventory Health Monitoring</li>
                    <li>Stock Distribution Analytics</li>
                    <li>Low Stock Product Monitoring</li>
                    <li>Product & Order Pagination</li>
                    <li>Global Exception Handling & Validation</li>
                    <li>Real-Time Interactive Dashboard</li>
                </ul>
            </div>

            <div className="project-section">
                <h4>📚 Backend Concepts Explored</h4>

                <ul>
                    <li>Transaction Management using @Transactional</li>
                    <li>Concurrent Inventory Update Handling</li>
                    <li>Optimistic Locking using Hibernate @Version</li>
                    <li>
                        Pessimistic Locking using
                        LockModeType.PESSIMISTIC_WRITE
                    </li>
                    <li>Conflict Detection & Version Tracking</li>
                    <li>Inventory Consistency Management</li>
                </ul>
            </div>

            <div className="project-section">
                <h4>⚙️ Tech Stack</h4>

                <div className="project-tags">
                    <span>Java 21</span>
                    <span>Spring Boot</span>
                    <span>Spring Data JPA</span>
                    <span>PostgreSQL</span>
                    <span>Hibernate</span>
                    <span>Docker</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>Chart.js</span>
                    <span>Optimistic Locking</span>
                    <span>Pessimistic Locking</span>
                </div>
            </div>

            <div className="project-section">
                <h4>💡 What I Learned</h4>

                <ul>
                    <li>
                        Implemented transaction management to ensure reliable
                        inventory updates during order processing.
                    </li>

                    <li>
                        Applied Optimistic Locking using Hibernate @Version for
                        conflict detection and version tracking.
                    </li>

                    <li>
                        Implemented Pessimistic Locking using LockModeType.PESSIMISTIC_WRITE
                        to ensure safe inventory updates during concurrent transactions.
                    </li>

                    <li>
                        Explored concurrency control techniques to maintain
                        inventory consistency during simultaneous order requests.
                    </li>

                    <li>
                        Prevented overselling scenarios by combining transactions
                        and locking mechanisms in critical inventory operations.
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default InventoryManagementProject;