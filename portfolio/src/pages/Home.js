import React from 'react';
import Projects from './Projects';
import About from './About';
import Contact from './Contact'
import ScrollIntoView from 'react-scroll-into-view'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

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
    <Jumbotron id="jumbotron1">
        <Container id="containerAboutDiv">
            <h1>Annie Luc</h1>
                <button>GitHub</button>
                <button>Email</button>
                <button>LinkedIn</button>

    {/* About Me Button will scroll down to the About Me section from About.js */}
      <div id='aboutDiv'>
      <ScrollIntoView selector="#aboutDiv" >
           <Button variant="outline-success">About me</Button>
      </ScrollIntoView>
      </div>

      </Container>
    </Jumbotron>
  )
}

export default Home