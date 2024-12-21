import {useState} from 'react';
import './App.css'
import Navbar from './Components/Navbar';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ListOfLaptops from './Pages/ListOfLaptops';
import Profile from './Pages/Profile';
import AdminProfile from './Pages/Profile';
import Footer from './Components/Footer';
import { sideAdminBarData } from './Components/SidebarData';
import MyCart from './Pages/MyCart';
import UserProfile from './Pages/UserProfile';
import ListOfUserLaptops from './Pages/ListOfUserLaptops';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import Dashboard from './Pages/Dashboard';
import ListOfLaptopsPage from './Pages/ListOfLaptopsPage';
import DeleteLaptopPage from './Pages/DeleteLaptopPage';
import EditLaptopInfoPage from './Pages/EditLaptopInfoPage';
import AddLaptop from './Pages/AddLaptop';
import EditProfilePage from './Pages/EditProfilePage';
import EditProfile from './Pages/EditProfilePage';
import ViewLaptop from './Pages/ViewLaptop';
import Home from './Pages/Home';
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
        <Navbar sideBarData={sideAdminBarData} isAdmin={true}/>
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
          <Route path='/listOfLaptops' Component={ListOfLaptops}/>
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
      <Route 
        path='/adminProfile' 
        element={
          <AdminProfile 
            firstname={firstname} 
            lastname={lastname}
            email={email} 
            phone={phone}
            id={id} 
            location={location} 
            balance={balance}
          >
            
          </AdminProfile>
        } 
      />
          <Route path='/dashboard' Component={Dashboard}/>
          <Route path='/myCart' Component={MyCart}/> 
          <Route path='/listOfUserLaptops' Component={ListOfUserLaptops}/>  
          <Route path='/signUp' Component={SignUp}/>
          <Route path='/signIn' Component={SignIn}/>
          <Route path='/laptop' Component={ListOfLaptopsPage}/>
          <Route path='/laptop/getLaptopById/:id' Component={DeleteLaptopPage}/>
          <Route path='/laptop/editLaptopPage/:id' Component={EditLaptopInfoPage}/>
          <Route path='listOfUserLaptops/:id' Component={ViewLaptop}/>
          <Route path='/addLaptopPage' Component={AddLaptop}/>
          <Route path='/editUserProfile' Component={EditProfile}/>
          <Route path='/editAdminProfile' Component={EditProfilePage}/>
          <Route path='/home' Component={Home}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
