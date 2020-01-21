import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  faGlasses } from '@fortawesome/free-solid-svg-icons';
import Jumbotron from 'react-bootstrap/Jumbotron';

import '../App'

function Projects (props) {
    return (
        <Jumbotron id="jumbotronProjects">
             <h1>Projects</h1>
             
        <div id="projectDiv">
            {/* <FontAwesomeIcon icon={faGlasses}/> */}
            <div id="Proj1" className="projectCard"></div>
            <div id="Proj2" className="projectCard"></div>
            <div id="Proj3" className="projectCard"></div>
            <div id="Proj4" className="projectCard"></div>
            <div id="Proj5" className="projectCard"></div>
            <div id="Proj6" className="projectCard"></div>
        </div>
    
        </Jumbotron>
    )
}

export default Projects;