import './App.css'
import {primaryColor} from './Constants'
import Navbar from './Components/Navbar';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ListOfLaptops from './Pages/ListOfLaptops';
import ListOfOrders from './Pages/ListOfOrders';
import ListOfUsers from './Pages/ListOfUsers';
import Profile from './Pages/Profile';
import Footer from './Components/Footer';
import { sideAdminBarData } from './Components/SidebarData';
import MyCart from './Pages/MyCart';
import UserProfile from './Pages/UserProfile';
import ListOfUserLaptops from './Pages/ListOfUserLaptops';
function App() {
  return (
    <>
      <Router>
        <Navbar sideBarData={sideAdminBarData}/>
        <Routes>
          <Route path='/profile' Component={Profile}/>
          <Route path='/listOfLaptops' Component={ListOfLaptops}/>
          <Route path='/listOfUsers' Component={ListOfUsers}/>
          <Route path='/listOfOrders' Component={ListOfOrders}/>
          <Route path='/userProfile' Component={UserProfile}/>
          <Route path='/myCart' Component={MyCart}/> 
          <Route path='/listOfUserLaptops' Component={ListOfUserLaptops}/>  
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
