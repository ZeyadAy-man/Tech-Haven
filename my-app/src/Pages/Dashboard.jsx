import React from 'react';
import '../Pages/Dashboard.css'
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="containerOfDashboard">
                <input type="button" value="List Of Laptops" className='button' onClick={() => navigate('/listOfLaptops')}/>
                <input type="button" value="Profile" className='button' onClick={() => navigate('/profile')}/>
            </div>  
        </>
    );
}

export default Dashboard;
