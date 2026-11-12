import '../styles/Projects.css';
import ApiGatewayProject from "../projects/ApiGatewayProject";
import UrlShortenerProject from "../projects/UrlShortenerProject.jsx";
import EcommerceProject from "../projects/EcommerceProject.jsx";
import PathfindingProject from "../projects/PathfindingProject.jsx";
import NotificationSystemProject from "../projects/NotificationSystemProject.jsx";
import InventoryManagementProject from "../projects/InventoryManagementProject.jsx";

function Projects() {
    return (
        <section id="projects" className="projects">
            <h2 className="section-title">Featured Projects</h2>

            <div className="projects-grid">
                <InventoryManagementProject/>
                <NotificationSystemProject/>
                <ApiGatewayProject />
                <EcommerceProject />
                <UrlShortenerProject />
                <PathfindingProject />
            </div>
        </section>
    );
}

export default Projects;
