function GithubProfile(){
    return (
        <div className="flex-col items-center justify-center">
            <div className="githubimgouter flex items-center">
                <a href="http://khodehitesh.live">
                    <div className="githubimg">
                        <img className="githubsc w-4/5 mr-auto ml-auto mt-10" src="/photos/githubprofile.png" alt="github profile" />
                    </div>
                </a>
            </div>
            <div className="flex justify-center mt-20">
                <img className="arrowDivider w-1/2" src="/png/arrowDivider.png" alt="" id="projects"/>
            </div>
        </div>        
    )
}

export default GithubProfile