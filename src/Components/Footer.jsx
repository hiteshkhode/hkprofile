function Footer(){
return(
    // div containing footer
    <div className="footer flex flex-col items-center justify-center w-full h-full">
        {/* div containing a message*/}
        <div className="footermsg flex flex-col items-center justify-center w-full h-full text-3xl pb-5">
            Stay in touch
        </div>
        <div className="socialoptions flex ">
            <div className="flex l-0">
                <div className="flex items-center mx-5 w-10">
                    <img className="w-20 b-0" src="../../png/mail.png" alt="" />
                </div>
                <div className="flex items-center mx-5 w-10">
                    <img className="w-20" src="../../png/linkedin.png" alt="" />
                </div>
                <div className="flex items-center mx-5 w-10">
                    <img className="w-20" src="../../png/twitter.png" alt="" />
                </div>
            </div>
        </div>
        <div className="grassfloor flex mr-auto ml-auto">
            <img src="../../png/grassoutline.png" className="w-20" alt="" />
            <img src="../../png/grassoutline.png" className="w-20" alt="" />
            <img src="../../png/grassoutline.png" className="w-20" alt="" />
        </div>
    </div>
    )}

export default Footer