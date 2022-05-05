import './sidebar.css';
import { LineStyle, TrendingUp, Timeline } from "@material-ui/icons";

export default function Sidebar() {
    return (
            <div className="sidebar">
                <div className="sidebarWrapper">
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">Dashboard</h3>
                        <ul className="sidebarList">
                            <li className="sidebarListItem active" >
                                < LineStyle className='sidebarIcon'/>
                                Home
                            </li>
                            <li className="sidebarListItem">
                                < Timeline className='sidebarIcon' />
                                Analytics
                            </li>
                            <li className="sidebarListItem">
                                < TrendingUp className='sidebarIcon'/>
                                Sales
                            </li>
                        </ul>
                    </div>
                
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">Quick Menu</h3>
                        <ul className="sidebarList">
                            <li className="sidebarListItem active" >
                                < LineStyle className='sidebarIcon'/>
                                Users
                            </li>
                            <li className="sidebarListItem">
                                < Timeline className='sidebarIcon' />
                                Posts
                            </li>
                            <li className="sidebarListItem">
                                < TrendingUp className='sidebarIcon'/>
                                Reports
                            </li>
                        </ul>
                    </div>
                
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">Notifications</h3>
                        <ul className="sidebarList">
                            <li className="sidebarListItem active" >
                                < LineStyle className='sidebarIcon'/>
                                Feedback
                            </li>
                            <li className="sidebarListItem">
                                < Timeline className='sidebarIcon' />
                                Messages
                            </li>
                            <li className="sidebarListItem">
                                < TrendingUp className='sidebarIcon'/>
                                Mail
                            </li>
                        </ul>
                    </div>

                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">Staff</h3>
                        <ul className="sidebarList">
                            <li className="sidebarListItem active" >
                                < LineStyle className='sidebarIcon'/>
                                Manage
                            </li>
                            <li className="sidebarListItem">
                                < Timeline className='sidebarIcon' />
                                Analytics
                            </li>
                            <li className="sidebarListItem">
                                < TrendingUp className='sidebarIcon'/>
                                Reports
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
    )
}