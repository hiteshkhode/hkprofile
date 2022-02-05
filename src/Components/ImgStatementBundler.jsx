import ProfileImage from "./ProfileImage";
import ProfileStatement from "./ProfileStatment";
import Statementclass from "./Statementclass.jsx";

function ImgStatementBundler() {
    return (
        <div className="img-statement-bundler rounded-2xl mt-40 mx-40 flex items-center justify-center">
            <ProfileImage />
            <Statementclass />
        </div>
    )
}

export default ImgStatementBundler