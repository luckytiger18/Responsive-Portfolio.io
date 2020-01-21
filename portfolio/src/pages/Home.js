import React from 'react';
import Projects from './Projects';
import About from './About';
import Contact from './Contact'
import ScrollIntoView from 'react-scroll-into-view';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Home () {
    return (
        <div id="onePage" >
            {Navbar()}
            <About />
            <Projects />
            <Contact />
        </div>
    )
}

function Navbar () {
  return (
    <Jumbotron id="jumbotronHome">
        <Container id="containerHomeDiv">
            <h1>Annie Luc</h1>
             

    {/* About Me Button will scroll down to the About Me section from About.js */}
      <div id="aboutMe">
      <ScrollIntoView selector="#aboutDiv" >
           <Button variant="outline-success">About me</Button>
      </ScrollIntoView>
      </div>

      </Container>
    </Jumbotron>
  )
}

export default Home