import React from "react";
import img from "../../assets/channelArt.jpg";
import { Avatar, Button } from "@material-ui/core";
import "./PreviewChannel.scss";
import VideoSmall from "../VideoSmall/VideoSmall";

const PreviewChannel = () => {
    return (
        <div className="channel">
            <img src={img} alt="" className="channel__art" />

            <div className="channel__details">
                <div className="channel__detailsWrap">
                    <div className="channel__avatarWrap">
                        <Avatar className="channel__avatar" />

                        <div className="videothumb__channel">
                            <h1 className="videothumb__title channel__title">
                                NerdySpook
                            </h1>

                            <p className="videothumb__text watch__subCount">
                                1M subscribers
                            </p>
                        </div>
                    </div>

                    <Button
                        className="watch__subBtn channel__subBtn"
                        color="primary"
                        variant="contained"
                    >
                        Subscribe
                    </Button>
                </div>

                <div className="channel__links">
                    <div className="channel__link">
                        <p>Home</p>
                    </div>

                    <div className="channel__link channel__link--active">
                        <p>Videos</p>
                        <div className="channel__link__border"></div>
                    </div>

                    <div className="channel__link">
                        <p>About</p>
                    </div>

                    <div className="channel__link">
                        <p>Playlist</p>
                    </div>

                    <div className="channel__link">
                        <p>About</p>
                    </div>
                </div>
            </div>

            <div className="channel__content">
                <div className="channel__contentWrapper">
                    <VideoSmall channelView />
                    <VideoSmall channelView />
                    <VideoSmall channelView />
                    <VideoSmall channelView />
                    <VideoSmall channelView />
                    <VideoSmall channelView />
                </div>
            </div>
        </div>
    );
};

export default PreviewChannel;
