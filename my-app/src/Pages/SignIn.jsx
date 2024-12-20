import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import laptop1 from '../Resources/laptop1.png'
import laptop2 from '../Resources/laptop2.png'
import laptop3 from '../Resources/laptop3.png'
import laptop4 from '../Resources/laptop4.png'
import '../Constants'
import '../Pages/SignIn.css'
import { primaryColor, secondaryColor, thirdColor } from '../Constants';
const SignIn = () => {
    const [error, setError] = useState("");
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [image, setImage] = useState('');
    const [phone, setPhone] = useState('');
    const laptops = [laptop1, laptop2, laptop3, laptop4];
    const [background, setBackground] = useState(laptop1);
    var [i, setI] = useState(0);
    const handleSubmit = (event) => {
        event.preventDefault();
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    
        if (!emailRegex.test(email)) {
          setError('Invalid email address');
          return;
        }
    
        if (!passwordRegex.test(password)) {
          setError('Password must be at least 8 characters long and contain both letters and numbers');
          return;
        }
    
        setError('');
        // Proceed with form submission
      };
    useEffect(() => {
        const interval = setInterval(() => {
            setBackground(laptops[i]);
            if(i >= 3){
                i = 0;
            }else{
                setI(i++)
            }
        }, 3000);
    
        // Cleanup interval on component unmount
        return () => clearInterval(interval);
      }, []);

    return (
        <>
            <div className="containerOfSignIn" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundColor: 'rgba(255, 255, 255, 0)', backgroundBlendMode: 'overlay'}}>
                <form className="formOfSignIn" onSubmit={handleSubmit}>
                    <div>
                        <p id='welcoming' style={{marginTop: '30px', fontWeight: 'bold', fontSize: '22px'}}>Welcome</p>
                    </div>
                    <div className='inputFieldContainer'>
                        <label className='label'>FirstName:</label>
                        <input
                        type="text"
                        style={{height: '30px', borderRadius: '4px'}}
                        value={firstName}
                        placeholder='Enter your firstname'
                        className='inputField'
                        onChange={(e) => setFirstName(e.target.value)}
                        />   
                    </div>
                    <div className='inputFieldContainer'>
                        <label className='label'>LastName:</label>
                        <input
                        type="text"
                        style={{height: '30px', borderRadius: '4px'}}
                        value={lastName}
                        placeholder='Enter your lastname'
                        className='inputField'
                        onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className='inputFieldContainer'>
                        <label className='label'>Phone:</label>
                        <input
                        type="tel"
                        style={{height: '30px', borderRadius: '4px'}}
                        value={phone}
                        placeholder='Enter your phone number'
                        className='inputField'
                        onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className='inputFieldContainer'>
                        <label className='label'>Address:</label>
                        <input
                        type="text"
                        style={{height: '30px', borderRadius: '4px'}}
                        value={address}
                        placeholder='Enter your address'
                        className='inputField'
                        onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div className='inputFieldContainer' style={{display: 'flex', justifyContent: 'center'}}>
                        <label className='label'>Image:</label>
                        <input type="file" id="fileInput" accept="image/*" style={{ borderRadius: '4px', backgroundColor: `${thirdColor}`, margin: '10px 40px 10px 40px'}}/>
                    </div>
                    <div className='inputFieldContainer'>
                        <label className='label'>Email:</label>
                        <input
                        type="email"
                        style={{height: '30px', borderRadius: '4px'}}
                        value={password}
                        placeholder='Enter your email'
                        className='inputField'
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='inputFieldContainer'>
                        <label className='label'>Password:</label>
                        <input
                        type="password"
                        style={{height: '30px', borderRadius: '4px'}}
                        value={password}
                        placeholder='Enter your password'
                        className='inputField'
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <input type="Submit" value="Log In" className='submitButton' />
                    </div>
                    <div>
                        {error && <p style={{ color: 'red', fontSize: '14px'}}>{error}</p>}
                    </div>
                    <Link to={'/signUp'}>
                        <p className='signInLink'>Already have an account? Signup!</p>
                    </Link>
                </form>    
            </div>  
        </>
    );
}

export default SignIn;
