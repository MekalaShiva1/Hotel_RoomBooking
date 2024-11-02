import logo from './logo.svg';
import './App.css';
import Navbar from './Components/screens/Navbar/navbar';
// import { Carousel } from 'bootstrap'; 
import Carousel from './Components/pages/carousel';
import Rooms from './Components/pages/rooms';
import Aboutus from './Components/pages/aboutus';
import Servies from './Components/pages/servies';
import Tesitmonial from './Components/pages/tesitmonial'; 
import Footer from './Components/pages/Footer';
import Stuck from './Components/Navigation/stuck';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './Components/Home/HomePage';

function App() {
  return (
   
    <> 
     <div> 
   
       <Navbar/>  
       <Stuck/> 
      
    

    

     </div>
    </>
   

  );
}

export default App;
