import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Image from 'react-bootstrap/Image';






function About(props) {
    return (
        <Jumbotron id="jumbotronAbout">
        <div id="aboutDiv">
            <h1>About Me</h1>
    <link rel="picture" href="%PUBLIC_URL%/Annie Luc 10.jpg" />
     <img src={process.env.PUBLIC_URL + '/images/Annie Luc 10.jpg'} />
     <h4>Hello, my name is Annie Luc. A past Behavioral Interventionist with a passion for helping the world, one bug fix at a time.</h4>

        </div>
        </Jumbotron>
    )
}

export default About;