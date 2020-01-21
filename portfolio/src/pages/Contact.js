import React from "react"

function Contact(props) {
    return (
        <div id="contactDiv">
            <h1>Contact</h1>

            <button id="gitHubButton">GitHub</button>
                {/* <FontAwesomeIcon icon={['fab', 'apple']} /> */}
                <button id="emailButton">Email</button>
                
                <button id="LinkedInButton">LinkedIn</button>
        </div>
    )
}

export default Contact;