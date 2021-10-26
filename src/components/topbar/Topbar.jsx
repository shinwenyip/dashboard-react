import React from 'react'
import { Notifications,Language,Settings } from '@material-ui/icons';
import "./topbar.css"

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Covid Stats</span>
                </div>
                <div className="topRight">
                    <div className="iconContainer">
                        <Notifications color="action"/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="iconContainer">
                        <Language color="action"/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="iconContainer">
                        <Settings color="action"/>
                    </div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyqk1TPBRMpKT-Drzld3sjWtERdiFL_Sq8Hkm4Pyn5J8Q-Q1YbDWOcRDTy3rCq7hviFKg&usqp=CAU" alt="" className="topProfile" />
                </div>
            </div>
        </div>
    )
}
