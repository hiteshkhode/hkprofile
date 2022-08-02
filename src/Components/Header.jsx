function Header(){
    return (
        <div className="header flex py-10">
            <div className="signaturediv grow">
                <a href="#profileStatement"><div className="ml-10 customizedfont text-white" onClick={() => {window. scroll({
                                                top: 0,
                                                left: 0,
                                                behavior: 'smooth'
                                                })}}>Hitesh Khode
                                            </div>
                </a>    
            </div>
            <div className="optionsdiv grow flex mx-20">
                <div className="grow headeroptions mx-5 rounded-full items-center justify-center flex text-white "><a href="#projects">Projects</a></div>
                <div className="grow headeroptions mx-5 rounded-full items-center justify-center flex text-white "><a href="https://drive.google.com/file/d/1J2xSVECyDFjg7bk5YYNqzmhPklb3tEz2/view?usp=sharing" target="_blank">Resume</a> </div>
                <div className="grow headeroptions mx-5 rounded-full items-center justify-center flex text-white "><a href="https://github.com/hiteshkhode" target="_blank">Github</a></div>
                <div className="grow headeroptions mx-5 rounded-full items-center justify-center flex text-white "><a href="#footer">Contact</a></div>
            </div>
        </div>
    )
}

export default Header