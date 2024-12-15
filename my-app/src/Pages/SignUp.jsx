import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <>
            <div className="containerOfSignUp">
                <div className="formOfSignUp">
                    <input type="email" name="" id="" />    
                    <input type="password" name="" id="" />
                    <input type="button" value="Log In" />
                    <Link>
                        <p>Don't have an accout? Create one!</p>
                    </Link>
                </div>    
            </div>  
        </>
    );
}

export default SignUp;
