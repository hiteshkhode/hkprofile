import ProfileImage from "./ProfileImage";
import ProfileStatement from "./ProfileStatment";

function ImgStatementBundler() {
    return (
        <div className="img-statement-bundler pt-40 flex text-white items-center justify-center">
            <ProfileImage />
            <ProfileStatement />

        </div>
    )
}

export default ImgStatementBundler