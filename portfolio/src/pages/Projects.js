import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGlasses } from '@fortawesome/free-solid-svg-icons'

import '../App'

function Projects (props) {
    return (
        <div id="projectDiv">
            <h1>Projects
            <FontAwesomeIcon icon={faGlasses}/>
            </h1>
          
        </div>
    )
}

export default Projects;