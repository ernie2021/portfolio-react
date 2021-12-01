import React from 'react'
import me from "../mememe.png"

export const AboutMe = () => {
    return (
        <div className="header-wrapper-aboutme">
            <div className="main-info-aboutme">
                <h2 className="aboutmename">About Me</h2>
                <img id="imageme" src={me}></img>
                <p className="intro">Full Stack Web Developer (MERN) with field experience in front end. Learning everyday and everyday I'm getting better with all languages I use. Fanatic of technology and I thrive to be not just a developer, but an outstanding and creative one.</p>
            </div>
        </div>
    )
}

export default AboutMe;