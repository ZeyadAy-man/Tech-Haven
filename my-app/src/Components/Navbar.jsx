import React, { useState } from 'react';
import * as ReactIcons from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { sideAdminBarData, sideUserBarData } from './SidebarData';
import '../Components/Navbar.css'
import { IconContext } from 'react-icons';
import image from '../Resources/image.png'
const Navbar = (lol) => {
    const [sidebar, setSideBar] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const showSideBar = () => setSideBar(!sidebar);
    return (
        <>
            <IconContext.Provider value={{color: '0xfff'}}>
                <div className="navBar">
                    <Link to="#" className="menuBars">
                        <ReactIcons.FaBars className='navBarIcon' onClick={showSideBar}/>
                    </Link>
                </div>
                <nav className={sidebar ? 'navMenuActive' : 'navMenu'}>
                    <ul className='navMenuItems' onClick={showSideBar}>
                        <li className='navBarToggle'>
                            <Link to={'#'} className='menuBar'>
                                <AiOutlineClose className='closeMenuBarIcon'/>
                            </Link>
                        </li>
                        <li className='profileImageContainer'>
                           <img src={image} alt="lol" className='userImage'/> 
                        </li>
                        {(isAdmin) ? sideAdminBarData.map((item, index) => {
                            return(
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        }) : sideUserBarData.map((item, index) => {
                            return(
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>                        
                            )
                        })}
                        {/* {console.l} */}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;
