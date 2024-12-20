import React from 'react';
import '../Constants'
import { fourthColor, primaryColor, secondaryColor, thirdColor } from '../Constants';
import '../Components/Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div style={{display:'flex',flexWrap: 'wrap' ,justifyContent: 'start', backgroundColor: primaryColor,width: '100vw'}} className='footerContainer'>
                <div style={{width: '100%', display: 'flex', flex : 1, alignItems: 'start', justifyContent:'start', flexDirection: 'column', backgroundColor: primaryColor}}>
                    <p style={{color: thirdColor, fontSize: '24px', fontWeight: '700', margin: '10px 0px 0px 20px'}}>Contact Us</p>
                    <p style={{color: secondaryColor, fontWeight: '800', fontSize: '20px', margin: '20px 0px 20px 20px'}}>Number: +20 01011823873</p>
                    <p style={{margin: '0px 0px 10px 20px'}}><a href="#" style={{textDecoration: 'none', color: secondaryColor, fontWeight: '800', fontSize: '20px'}}>Email: zizoaym639@gmail.com</a></p>
                </div>
                <div style={{width: '100%', minWidth: '30%', display: 'flex', flex: 1, justifyContent: 'start', backgroundColor: primaryColor, flexDirection: 'column'}}>
                    <p style={{color: thirdColor, fontSize: '24px', fontWeight: '700', margin: '10px 0px 0px 20px'}}>Follow Us From</p>
                    <p style={{margin: '20px 10px 0px 20px'}}><a style={{textDecoration: 'none', color: secondaryColor, fontWeight: '800', fontSize: '20px'}} href="https://www.instagram.com/">Instgram</a></p>
                    <p style={{margin: '20px 0px 20px 20px'}}><a style={{textDecoration: 'none', color: secondaryColor, fontWeight: '800', fontSize: '20px'}} href="https://www.facebook.com/">Facebook <FaFacebook color={fourthColor} scale={50}/></a></p>
                    <p style={{margin: '0px 0px 10px 20px'}}><a style={{textDecoration: 'none', color: secondaryColor, fontWeight: '800', fontSize: '20px'}} href="https://x.com/">Twitter <FaInstagramSquare color='purple'/></a></p>
                </div>
                <div style={{width: '100%', display: 'flex', flex: 1, alignItems: 'start', backgroundColor: primaryColor, flexDirection: 'column'}}>
                    <p style={{color: thirdColor, fontSize: '24px', fontWeight: '700', margin: '10px 0px 0px 20px'}}>About Us</p>
                    <p style={{textDecoration: 'none', color: secondaryColor, fontWeight: '800', fontSize: '20px', margin: '10px 0px 20px 20px'}}>Welcome to our website Tech-Haven! We have all new in laptops field!</p>    
                </div>
            </div>
        </div>
    );
}

export default Footer;
