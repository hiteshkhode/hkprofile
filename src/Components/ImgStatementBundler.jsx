import ProfileImage from "./ProfileImage";
import ProfileStatement from "./ProfileStatment";

function ImgStatementBundler() {
    return (
        <div className="img-statement-bundler rounded-2xl mt-40 mx-40 flex items-center justify-center">
            <ProfileImage />
            <ProfileStatement />
        </div>
    )
}

export default ImgStatementBundler