import {
    Apps,
    Menu,
    Notifications,
    Search,
    VideoCall,
} from "@material-ui/icons";
import { Avatar, Button } from "@material-ui/core";
import logo from "../../assets/logo1.png";
import "./Header.scss";

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <Menu className="header__menuicon" />
                <img src={logo} alt="logo" className="header__logo" />
            </div>

            <form className="header__center">
                <input
                    type="text"
                    placeholder="Search here"
                    className="header__input"
                />
                <Button className="header__btn">
                    <Search className="header__searchicon" />
                </Button>
            </form>

            <div className="header__right">
                <VideoCall />
                <Apps />
                <Notifications />
                <Avatar />
            </div>
        </div>
    );
};

export default Header;
