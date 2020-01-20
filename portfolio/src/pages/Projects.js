import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  faGlasses } from '@fortawesome/free-solid-svg-icons';
import Jumbotron from 'react-bootstrap/Jumbotron';

import '../App'

function Projects (props) {
    return (
        <Jumbotron id="jumbotronProjects">
        <div id="projectDiv">
            <h1>Projects
            {/* <FontAwesomeIcon icon={faGlasses}/> */}
            <div id="Proj1"></div>
            <div id="Proj2"></div>
            <div id="Proj3"></div>
            <div id="Proj4"></div>
            <div id="Proj5"></div>
            <div id="Proj6"></div>
            </h1>
        </div>
        </Jumbotron>
    )
}

export default Projects;