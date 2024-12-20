import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import laptop1 from '../Resources/laptop1.png'
import laptop2 from '../Resources/laptop2.png'
import laptop3 from '../Resources/laptop3.png'
import laptop4 from '../Resources/laptop4.png'
import '../Pages/SignUp.css'
const SignUp = () => {
    const [error, setError] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
            <div className="containerOfSignUp" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundColor: 'rgba(255, 255, 255, 0)', backgroundBlendMode: 'overlay'}}>
                <form className="formOfSignUp" onSubmit={handleSubmit}>
                    <div>
                        <p id='welcoming' style={{marginTop: '40px', fontWeight: 'bold', fontSize: '22px'}}>Welcome to Tech-Haven</p>
                    </div>
                    <div className='inputFieldContainer'>
                        <p>
                            <label className='label'>Email:</label>
                        </p>
                        <input
                        type="email"
                        className='inputField'
                        placeholder='Enter your email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />   
                    </div>
                    <div className='inputFieldContainer'>
                        <label className='label'>Password:</label>
                        <input
                        type="password"
                        placeholder='Enter your password'
                        className='inputField'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <input type="Submit" value="Log In" className='submitButton' />
                    </div>
                    <div>
                        {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}
                    </div>
                    <Link to={'/signIn'}>
                        <p className='signInLink'>Don't have an accout? Create one!</p>
                    </Link>
                </form>    
            </div>  
        </>
    );
}

export default SignUp;
