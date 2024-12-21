import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import laptop1 from '../Resources/laptop1.png'
import laptop2 from '../Resources/laptop2.png'
import laptop3 from '../Resources/laptop3.png'
import laptop4 from '../Resources/laptop4.png'
import '../Pages/SignUp.css'
const SignUp = ({isAdmin}) => {
    const [error, setError] = useState("");
    const [email, setEmail] = useState('');
    const navigate = useNavigate()
    const [password, setPassword] = useState('');
    const [Fname, setFname] = useState('');
    const laptops = [laptop1, laptop2, laptop3, laptop4];
    const [background, setBackground] = useState(laptop1);
    const [formData, setFormData] = useState({
        Fname:'',
        Lname:'',
        phone:'',
        email:'',
        password:'',
        photo:null
    })
    var [i, setI] = useState(0);
    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    //     const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    //     if (!emailRegex.test(email)) {
    //       setError('Invalid email address');
    //       return;
    //     }
    
    //     if (!passwordRegex.test(password)) {
    //       setError('Password must be at least 8 characters long and contain both letters and numbers');
    //       return;
    //     }
    //     const response = await fetch('https://labtop-store-backend-project.vercel.app/auth/register', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ email, password }),
    //     });
    //     if(response.ok){
    //         alert("Login successfully")
    //         (isAdmin) ? navigate('/dashboard') : navigate('/listOfUserLaptops')
    //     }
    //     else{
    //         setError("This account doesn't exist")
    //     }
    //   };
    const handleInputChange = (e) => {
        const {name,value}=e.target;
        setFormData({...formData,[name]:value})
    }
    const handleFileChange = (e) =>{
        setFormData({...formData,photo:e.target.files[0]})
    }
    const handleSubmit1 = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('Fname',formData.Fname)
        data.append('Lname',formData.Lname)
        data.append('email',formData.email)
        data.append('password',formData.password)
        data.append('phone',formData.phone)
        if(formData.photo){
            data.append('photo',formData.photo);
        }
        try{
            const response = await fetch('https://labtop-store-backend-project.vercel.app/auth/register',
                {
                    method:'Post',
                    body:data
                }
            );
            const result = await response.json();
            if(response.ok){
                setFormData({
                    Fname:'',
                    Lname:'',
                    phone:'',
                    email:'',
                    password:'',
                    photo:null
                });
                navigate('/home')
            }
        }catch(error){
            console.error('Error',error)
        }
    }
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
            <div className="containerOfSignUp" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundColor: 'rgba(255, 255, 255, 0)', backgroundBlendMode: 'overlay'}}>
                <form className="formOfSignUp" onSubmit={handleSubmit1}>
                    <div>
                        <p id='welcoming' style={{marginTop: '40px', fontWeight: 'bold', fontSize: '22px'}}>Welcome to Tech-Haven</p>
                    </div>
                    <div className='inputFieldContainer'>
                        <p>
                            <label className='label'>First Name:</label>
                        </p>
                        <input
                        type="text"
                        name='Fname'
                        className='inputField'
                        placeholder='Enter your first name'
                        value={formData.Fname}
                        onChange={handleInputChange}
                        />   
                    </div>
                    <div className='inputFieldContainer'>
                        <p>
                            <label className='label'>Email:</label>
                        </p>
                        <input
                        type="email"
                        name='email'
                        className='inputField'
                        placeholder='Enter your email'
                        value={formData.email}
                        onChange={handleInputChange}
                        />   
                    </div>
                    <div className='inputFieldContainer'>
                        <label className='label'>Password:</label>
                        <input
                        type="password"
                        name='password'
                        placeholder='Enter your password'
                        className='inputField'
                        value={formData.password}
                        onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <input type="Submit" value="Sign Up" className='submitButton' />
                    </div>
                    <div>
                        {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}
                    </div>
                    <Link to='/signIn' style={{margin: '0px 20px'}}>
                        <p className='signInLink' style={{margin: '0px 20px'}}>Don't have an accout? Create one!</p>
                    </Link>
                </form>    
            </div>  
        </>
    );
}

export default SignUp;
