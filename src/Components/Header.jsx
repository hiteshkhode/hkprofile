function Header(){
    return (
        <div className="header flex py-10 bg-black">
            <div className="signaturediv grow">
                <div className="ml-10 customizedfont text-white">Hitesh Khode</div>
            </div>
            <div className="optionsdiv grow flex">
                <div className="grow items-center justify-center flex text-white ">Home</div>
                <div className="grow items-center justify-center flex text-white ">Resume</div>
                <div className="grow items-center justify-center flex text-white ">About</div>
                <div className="grow items-center justify-center flex text-white ">Contact</div>
            </div>
        </div>
    )
}

export default Header