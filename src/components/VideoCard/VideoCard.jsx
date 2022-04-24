import { Avatar } from "@material-ui/core";
import React from "react";
import "./VideoCard.scss";

const VideoCard = () => {
    return (
        <div className="videothumb">
            <img
                src="https://i.ytimg.com/vi/JUh4koZ8Uqw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJ6cyIhI2Pmn7crSf8iEVR52uEkA"
                alt="thumbnail"
                className="videothumb__thumbnail"
            />
            <div className="videothumb__details">
                <Avatar />

                <div className="videothumb__channel">
                    <h1 className="videothumb__title">Youtube clone</h1>
                    <div className="videothumb__texts">
                        <p className="videothumb__text">Nerdyspook</p>
                        <p className="videothumb__text">
                            3,448 views • 2 hours ago
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
