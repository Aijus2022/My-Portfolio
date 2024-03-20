import React, { useState, useEffect } from 'react';
import projectsData from '../projects.json'; // Adjust the path as necessary
import Modal from '../components/Modal'; // Adjust the path as necessary

function ProjectsPage() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        try {
            // Log projectsData to check if it's loading correctly
            console.log(projectsData);
            setProjects(projectsData);
        } catch (error) {
            console.error('Error loading projects:', error);
        }
    }, []);

    const handleOpenModal = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    const projectCardStyle = {
        border: '2px solid #ccc',
        borderRadius: '8px',
        padding: '10px',
        position: 'relative',
        backgroundColor: '#333', // Dark gray for contrast
        color: 'white', // Light text for readability
    };

    return (
        <div style={{ backgroundColor: '#000', color: 'white', padding: '20px' }}>
            <h1>Projects</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                {projects.map((project) => (
                    <div key={project.id} style={{ width: '300px' }}>
                        <div style={projectCardStyle}>
                            <img src={`/images/${project.image}`} alt={project.title} style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
                            <p>{project.title}</p>
                            <a href={project.deployedLink} target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginBottom: '10px', color: '#007bff' }}>View Project</a>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginBottom: '10px', color: '#007bff' }}>View on GitHub</a>
                            <button onClick={() => handleOpenModal(project)} style={{ position: 'absolute', bottom: '10px', right: '10px', color: '#000', backgroundColor: '#fff' }}>🔍</button>
                            <p style={{ fontSize: '12px', textAlign: 'center', color: 'lightgray' }}>Tap the 🔍 to see a bigger picture!</p>
                        </div>
                    </div>
                ))}
            </div>
            {selectedProject && (
                <Modal isOpen={!!selectedProject} onClose={handleCloseModal}>
                    <img src={`/images/${selectedProject.image}`} alt={selectedProject.title} style={{ width: '80%', height: 'auto' }} />
                    <p style={{ color: 'white' }}>{selectedProject.description}</p>
                    {/* Ensure the modal content also fits the dark theme */}
                    <a href={selectedProject.deployedLink} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff' }}>View Project</a>
                    <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff' }}>View on GitHub</a>
                </Modal>
            )}
        </div>
    );
}

export default ProjectsPage;



  
  

  


