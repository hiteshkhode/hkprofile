import React, { Component } from 'react';

class Statement extends Component{
    constructor(){
        super();
        this.state = {
            typedname : ""
        };
    }

    typeTheName(){
        let nametotype = "Hitesh";
        setTimeout(() => {
            for(let i=0; i<nametotype.length; i++){
                // setTimeout to wait for the time of typing
                setTimeout(() => {
                    // set the state of typedname
                    this.setState({typedname: nametotype.slice(0, i+1)})
                }, i*120) 
            }
        }, 1000)

    }

    componentDidMount(){
        this.typeTheName();
        var audio = new Audio("../../sounds/recorded.mp3");
        setTimeout(() => {
            audio.play();
            setTimeout(() => {
                audio.pause();
            }, 1000);
        }, 800);
    }

    render(){
        return (
            <div className="profile-statement rounded-2xl">
                <div className="p-20">
                    <div className="border-b-2 text-7xl" onLoad={() => {this.typeTheName()} }>
                        {this.state.typedname}<span className="text-red-500">.</span>
                    </div>
                    <div className="py-10 text-2xl">
                        Worked in web2 as a full stack developer for the longest <span className="text-blue-500 text-3xl">,</span> 
                        <br /> 
                        now working my way up through web3 and blockchain based dapps<span className="text-green-500 text-3xl">.</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Statement