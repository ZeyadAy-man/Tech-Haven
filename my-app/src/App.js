import {useState} from 'react';
import './App.css'
import Navbar from './Components/Navbar';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Profile from './Pages/Profile';
import Footer from './Components/Footer';
import { sideAdminBarData } from './Components/SidebarData';
import MyCart from './Pages/MyCart';
import UserProfile from './Pages/UserProfile';
import ListOfUserLaptops from './Pages/ListOfUserLaptops';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import EditProfilePage from './Pages/EditProfilePage';
import Dashboard from './Pages/Dashboard';
import EditLaptopInfoPage from './Pages/EditLaptopInfoPage';
import DeleteLaptopPage from './Pages/DeleteLaptopPage';
import { CrudLaptopContext } from './Context/CrudLaptopContext';
import AddLaptop from './Pages/AddLaptop';
import ListOfLaptopsPage from './Pages/ListOfLaptopsPage';

function App() {
  const [firstname, setFirstName] = useState('John');
  const [lastname, setLastName] = useState('Doe');
  const [email, setEmail] = useState(`${firstname+lastname}@gmail.com`) ;
  const [phone, setPhone] = useState('999-458-243');
  const [id, setId] = useState(255);
  const [location, setLocation] = useState('14th-st DownTown');
  const [balance, setBalance] = useState('$12976.43') ;



  return (
    <>
      <Router>
        <Navbar sideBarData={sideAdminBarData}/>
        <Routes>
          <Route path='/' element={<Navigate to='/signUp'/>}/>
          <Route path='/profile'  element={
          <Profile 
            firstname={firstname} 
            lastname={lastname}
            email={email} 
            phone={phone}
            
            location={location} 
            balance={balance}
          >
            
          </Profile>
        }/>

          <Route 
        path='/userProfile' 
        element={
          <UserProfile 
            firstname={firstname} 
            lastname={lastname}
            email={email} 
            phone={phone}
            id={id} 
            location={location} 
            balance={balance}
          >
            
          </UserProfile>
        } 
      />
          <Route path='/dashboard' Component={Dashboard}/>
          <Route path='/editUserProfilePage' Component={EditProfilePage}/>
          <Route path='/editAdminProfilePage' Component={EditProfilePage}/>
          <Route path='/myCart' Component={MyCart}/> 
          <Route path='/listOfUserLaptops' Component={ListOfUserLaptops}/>  
          <Route path='/listOfLaptops' Component={ListOfLaptopsPage}/>
          <Route path='/editLaptopPage' Component={EditLaptopInfoPage}/>  
          <Route path='/deleteLaptopPage' Component={DeleteLaptopPage}/> 
          <Route path='/addLaptopPage' Component={AddLaptop}/> 
          <Route path='/signUp' Component={SignUp}/>
          <Route path='/signIn' Component={SignIn}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
