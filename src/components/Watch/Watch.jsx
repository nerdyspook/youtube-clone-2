import React from "react";
import "./Watch.scss";
import videoURL from "../../assets/videos/video.mp4";
import { Avatar, Button } from "@material-ui/core";
import {
    MoreHorizRounded,
    PlaylistAdd,
    Reply,
    ThumbDownAlt,
    ThumbUpAlt,
} from "@material-ui/icons";
import { VideoSmall } from "..";
import { useNavigate } from "react-router-dom";

const Watch = () => {
    const navigate = useNavigate();
    const handleAvatarRedirect = () => {
        navigate("/previewchannel");
    };

    return (
        <div className="watch">
            <div className="watch__wrap">
                <div className="watch__left">
                    <video className="watch__video" autoplay controls>
                        <source src={videoURL} type="video/mp4" />
                    </video>

                    <div className="watch__leftBottom">
                        <h1 className="watch__title">Amazon Prime video</h1>

                        <div className="watch__videoInfo">
                            <div className="watch__videoInfoLeft">
                                <p className="watch__text">
                                    3,448 views • April 25, 2022
                                </p>
                            </div>

                            <div className="watch__videoInfoRight">
                                <div className="watch__likeContainer">
                                    <div className="watch__likeWrap">
                                        <div className="watch__likeBtnContainer color--gray">
                                            <ThumbUpAlt className="watch__icon" />
                                            <p>20K</p>
                                        </div>
                                        <div className="watch__likeBtnContainer color--gray">
                                            <ThumbDownAlt className="watch__icon" />
                                            <p>20</p>
                                        </div>
                                    </div>

                                    <div className="watch__likeDislikeRatio"></div>
                                </div>

                                <div className="watch__likeBtnContainer color--gray">
                                    <Reply className="watch__icon share-icon" />
                                    <p>Share</p>
                                </div>

                                <div className="watch__likeBtnContainer color--gray">
                                    <PlaylistAdd className="watch__icon play-addIcon" />
                                    <p>Save</p>
                                </div>

                                <div className="watch__likeBtnContainer color--gray">
                                    <MoreHorizRounded className="watch__icon " />
                                    <p>More</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="watch__details">
                        <div className="watch__detailsContainer">
                            <div className="videothumb__details watch__avatarWrap">
                                <Avatar
                                    className="watch__avatar"
                                    onClick={handleAvatarRedirect}
                                />

                                <div className="videothumb__channel">
                                    <h1 className="videothumb__title">
                                        Nerdyspook
                                    </h1>
                                    <p className="videothumb__text watch__subCount">
                                        1M Subscribers
                                    </p>
                                </div>
                            </div>

                            <Button
                                className="watch__subBtn"
                                color="#cc0000"
                                variant="contained"
                            >
                                SUBSCRIBE
                            </Button>
                        </div>

                        <div className="watch__description">
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Cum repellat doloremque eius
                                nulla ducimus delectus dolorem facilis. Et ad
                                inventore quidem quo, voluptatum perferendis
                                eaque suscipit deserunt doloremque at molestias.
                            </p>
                            <p className="watch__showMore">Show More</p>
                        </div>
                    </div>
                </div>

                <div className="watch__right">
                    <VideoSmall />
                    <VideoSmall />
                    <VideoSmall />
                    <VideoSmall />
                </div>
            </div>
        </div>
    );
};

export default Watch;
