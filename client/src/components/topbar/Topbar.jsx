import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import pic from "../../images/avatar.jpg";

export default function TopBar() { 
    return (
        <div>
            <div className="topbar">
                <div className="topbarWrapper">
                    <div className="topLeft">
                        <span className="logo"> admin </span>
                    </div>
                    <div className="topRight">
                        <div className="topbarIconContainer">
                            <NotificationsNone />
                            <span className="topIconBadge"> 2</span>
                        </div>
                        <div className="topbarIconContainer">
                            <Language/>
                            <span className="topIconBadge"> 2</span>
                        </div>
                        <div className="topbarIconContainer">
                            <Settings />
                        </div>
                        <img src={pic} alt="" className="topAvatar" />
                    </div>
                    
                </div>

            </div>
        </div>
    )
}