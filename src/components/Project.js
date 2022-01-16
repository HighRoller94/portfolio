import React from 'react'

import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';

function Project({ title, image, desc }) {
    return (
        <div className="project">
            <img src={image} alt="" />
            <h1>{title}</h1>
            <p>{desc}</p>
            <div className="project__buttons">

            </div>
        </div>
    )
}

export default Project
