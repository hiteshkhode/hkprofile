import React, { Component } from 'react';
import projects from './versatileFiles/projects';

function project(props) {
    let count = 0;
    return (
        <div className="project w-1/2 flex items-center justify-center">
            <div className='w-fit h-fit flex justify-center'>
                <img className='h-20px w-20px' src={"/png/" + props.project + ".png"} alt="" />
            </div>
            <div>
                <div className="projecttitle">
                    <div className="projecttitletext text-3xl"> {props.title}</div>
                </div>
                <div className="projectdescription">
                    <div className="projectdescriptiontext text-xl">{props.description} </div>
                </div>
                <div className="projectlinks">
                    <a className="projectlink" href={props.links} target="_blank">{props.links} </a>
                </div>
            </div>
        </div>
    )
}

export default project;