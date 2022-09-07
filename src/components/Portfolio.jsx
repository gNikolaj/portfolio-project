import React from 'react';
import ProjectsCarousel from "./ProjectsCarousel";



const Portfolio = () => {
    return (
        <section className="portfolio">
            <div className="container">
                <h2 className="subheading">My Projects</h2>
                <ProjectsCarousel/>
            </div>
        </section>
    );
};

export default Portfolio;
