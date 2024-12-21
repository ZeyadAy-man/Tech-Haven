import React, { useState, useEffect} from 'react';
import { Link, Navigate } from 'react-router-dom';
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
    const [image, setImage] = useState(null);
    const [phone, setPhone] = useState('');
    const laptops = [laptop1, laptop2, laptop3, laptop4];
    const [background, setBackground] = useState(laptop1);
    var [i, setI] = useState(0);
        const handleSubmit = async (e) => {
            e.preventDefault();
        
            const formData = new FormData();
            formData.append('email', email);
            formData.append('password', password);
            formData.append('FName', firstName);
            formData.append('LName', lastName);
            formData.append('phone', phone);
            formData.append('photo', image);
        
            const response = await fetch('https://labtop-store-backend-project.vercel.app/auth/register', {
              method: 'POST',
              body: formData,
            });
            const data = await response.json();
            Navigate('/signIn')
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
                        name='Fname'
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
                        name='Lname'
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
                        name='phone'
                        style={{height: '30px', borderRadius: '4px'}}
                        value={phone}
                        placeholder='Enter your phone number'
                        className='inputField'
                        onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className='inputFieldContainer' style={{display: 'flex', justifyContent: 'center'}}>
                        <label className='label'>Image:</label>
                        <input
                        type="file"
                        name='photo'
                        style={{ borderRadius: '4px', backgroundColor: `${thirdColor}`, margin: '10px 40px 10px 40px'}}
                        onChange={(e) => setImage(e.target.files[0])}
                        required
                        />
                        {/* <input type="file" id="fileInput" accept="image/*" style={{ borderRadius: '4px', backgroundColor: `${thirdColor}`, margin: '10px 40px 10px 40px'}}/> */}
                    </div>
                    <div className='inputFieldContainer'>
                        <label className='label'>Email:</label>
                        <input
                        type="email"
                        name='email'
                        style={{height: '30px', borderRadius: '4px'}}
                        value={email}
                        placeholder='Enter your email'
                        className='inputField'
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='inputFieldContainer'>
                        <label className='label'>Password:</label>
                        <input
                        type="password"
                        name='password'
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
