import React, { Component } from 'react';
import projects from './versatileFiles/projects';

function project(props) {
    let count = 0;
    return (
        <div className="project w-1/2 flex justify-center">
            <div className='w-128 h-128 flex justify-center'>
                <svg     src={"../../png/" + props.project + ".svg"} alt="" />
            </div>
            <div>
                <div className="projecttitle">
                    <div className="projecttitletext text-3xl"> {props.title}</div>
                </div>
                <div className="projectdescription">
                    <div className="projectdescriptiontext text-xl">{props.description} </div>
                </div>
                <div className="projectlinks">
                    <div className="projectlink">{props.links} </div>
                </div>
            </div>
        </div>
    )
}

export default project;