import React from 'react';
import '../Constants'
import { primaryColor, secondaryColor, thirdColor } from '../Constants';
const Footer = () => {
    return (
        <div>
            <div style={{display:'flex',flexWrap: 'wrap' ,justifyContent: 'start', backgroundColor: primaryColor,width: '100%'}}>
                <div style={{width: '100%', display: 'flex', flex : 1, alignItems: 'start', justifyContent:'start', flexDirection: 'column', backgroundColor: primaryColor}}>
                    <p style={{color: thirdColor, fontSize: '24px', fontWeight: '700', margin: '10px 0px 0px 10px'}}>Contact Us</p>
                    <p style={{color: secondaryColor, fontWeight: '800', fontSize: '20px', margin: '20px 0px 20px 10px'}}>Number: +20 01011823873</p>
                    <p style={{margin: '0px 0px 10px 10px'}}><a href="#" style={{textDecoration: 'none', color: secondaryColor, fontWeight: '800', fontSize: '20px'}}>Email: zizoaym639@gmail.com</a></p>
                </div>
                <div style={{width: '100%', display: 'flex', flex: 1, justifyContent: 'start', backgroundColor: primaryColor, flexDirection: 'column'}}>
                    <p style={{color: thirdColor, fontSize: '24px', fontWeight: '700', margin: '10px 0px 0px 0px'}}>Follow Us From</p>
                    <p style={{margin: '20px 0px 0px 0px'}}><a style={{textDecoration: 'none', color: secondaryColor, fontWeight: '800', fontSize: '20px'}} href="#">Instgram</a></p>
                    <p style={{margin: '20px 0px'}}><a style={{textDecoration: 'none', color: secondaryColor, fontWeight: '800', fontSize: '20px'}} href="#">Facebook</a></p>
                    <p style={{margin: '0px 0px 10px 0px'}}><a style={{textDecoration: 'none', color: secondaryColor, fontWeight: '800', fontSize: '20px'}} href="#">Twitter</a></p>
                </div>
                <div style={{width: '100%', display: 'flex', flex: 1, alignItems: 'start', backgroundColor: primaryColor, flexDirection: 'column'}}>
                    <p style={{color: thirdColor, fontSize: '24px', fontWeight: '700'}}>About Us</p>
                    <p style={{textDecoration: 'none', color: secondaryColor, fontWeight: '800', fontSize: '20px'}}>We are a very famous movies' websites which loves to show you every new in cinema world</p>    
                </div>
            </div>
        </div>
    );
}

export default Footer;
