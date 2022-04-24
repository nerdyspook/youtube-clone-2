import {
    Home,
    OndemandVideo,
    Restore,
    Subscriptions,
    ThumbUp,
    VideoLibrary,
    WatchLater,
    Whatshot,
} from "@material-ui/icons";
import React from "react";
import "./Sidebar.scss";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__buttons">
                <div className="sidebar__btn sidebar__btn--active">
                    <Home className="sidebar__icon" />
                    <p>Home</p>
                </div>

                <div className="sidebar__btn">
                    <Whatshot className="sidebar__icon" />
                    <p>Trending</p>
                </div>

                <div className="sidebar__btn">
                    <Subscriptions className="sidebar__icon" />
                    <p>Subscriptions</p>
                </div>
            </div>

            <div className="sidebar__buttons bottom">
                <div className="sidebar__btn ">
                    <VideoLibrary className="sidebar__icon" />
                    <p>Libraries</p>
                </div>

                <div className="sidebar__btn ">
                    <Restore className="sidebar__icon" />
                    <p>History</p>
                </div>

                <div className="sidebar__btn ">
                    <OndemandVideo className="sidebar__icon" />
                    <p>Your Videos</p>
                </div>

                <div className="sidebar__btn ">
                    <WatchLater className="sidebar__icon" />
                    <p>Watch Later</p>
                </div>

                <div className="sidebar__btn ">
                    <ThumbUp className="sidebar__icon" />
                    <p>Liked Videos</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
