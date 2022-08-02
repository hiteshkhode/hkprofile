import React from "react";
import ProfileImage from "./ProfileImage";
import ProfileStatement from "./ProfileStatment";
import Statementclass from "./Statementclass.jsx";

function ImgStatementBundler() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="img-statement-bundler rounded-2xl mt-40 mx-40 flex items-center justify-center">
                <ProfileImage />
                <Statementclass />
            </div>
            <div className="w-1/2">
                <img src="../png/divider.png" alt="" />
            </div>
        </div>
    )
}

export default ImgStatementBundler