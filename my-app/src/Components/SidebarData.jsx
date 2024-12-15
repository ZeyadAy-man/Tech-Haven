import React from "react";
import * as Falcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const sideAdminBarData = [
    {
        title: 'Profile',
        path: '/profile',
        icon: <AiIcons.AiFillHome/>,
        cName: 'navText'
    },
    {
        title: 'Laptops',
        path: '/listOfLaptops',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'navText'
    },
    {
        title: 'Orders',
        path: '/listOfOrders',
        icon: <Falcons.FaCartPlus/>,
        cName: 'navText'
    },
    {
        title: 'Users',
        path: '/listOfUsers',
        icon: <Falcons.FaEnvelopeOpenText/>,
        cName: 'navText'
    }
]
export const sideUserBarData = [
    {
        title: 'Profile',
        path: '/userProfile',
        icon: <AiIcons.AiFillHome/>,
        cName: 'navText'
    },
    {
        title: 'Laptops',
        path: '/listOfUserLaptops',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'navText'
    },
    {
        title: 'Cart',
        path: '/myCart',
        icon: <Falcons.FaCartPlus/>,
        cName: 'navText'
    }
]