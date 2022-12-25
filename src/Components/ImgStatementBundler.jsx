import React from "react";
import ProfileImage from "./ProfileImage";
import ProfileStatement from "./ProfileStatment";
import Statementclass from "./Statementclass.jsx";
import { Timeline } from 'react-twitter-widgets';

function ImgStatementBundler() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="img-statement-bundler rounded-2xl mt-40 mx-40 flex items-center justify-center">
                <ProfileImage />
                <Statementclass />
                {/* <div className="twitter">
                    <Timeline
                        dataSource={{
                            sourceType: 'profile',
                            screenName: 'khodehitesh'
                        }}
                        options={{
                            height: '400'
                        }}
                    />
                </div> */}
            </div>
            <div className="w-1/2">
                <img src="/png/divider.png" alt="" />
            </div>
        </div>
    )
}

export default ImgStatementBundler