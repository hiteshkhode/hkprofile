import React, { Component } from 'react';
import Project from './Project';
import projectsJSON from './versatileFiles/Projects';

function projects() {
    let count = 0;
    return (
        <div className="projects">
            <div className="projectsWrapper flex flex-col items-center">
                <div className='text-4xl flex justify-center style-bold'>
                    PROJECTS
                </div>
                <Project title = {projectsJSON[0].title} description = {projectsJSON[0].description} links = {projectsJSON[0].link} project="blockchainWordle"/>
                <Project title = {projectsJSON[1].title} description = {projectsJSON[1].description} links = {projectsJSON[1].link} project="crypTrade" />
                <Project title = {projectsJSON[2].title} description = {projectsJSON[2].description} links = {projectsJSON[2].link} project="horoscopeNFT" />
                <Project title = {projectsJSON[3].title} description = {projectsJSON[3].description} links = {projectsJSON[3].link} project="pablo-s-palette" />
                <Project title = {projectsJSON[4].title} description = {projectsJSON[4].description} links = {projectsJSON[4].link} project="polling-site" />
            </div>
        </div>
    )
}

export default projects;