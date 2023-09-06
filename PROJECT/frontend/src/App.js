import "bulma/css/bulma.min.css";

import {BrowserRouter}from 'react-router-dom';


import 'react-toastify/dist/ReactToastify.css'

import Navigation from "./components/Online-shopping-components/Navigation";
import ThemeProvider from './components/Online-shopping-components/theme';
import Onlineshop_routes from "./routes/Onlineshop_routes";
import Footer from "./components/Online-shopping-components/Footer";

import ScrollToTop from './components/Online-shopping-components/components/scroll-to-top';
import Router from './components/Online-shopping-components/routes'
import { useContext } from "react";
import { Store } from "./components/Online-shopping-components/Store";
import Home from "./pages/Home";

function App() {
  //header
  const { state, dispatch: ctxDispatch } = useContext(Store);
   

 
return(
    <BrowserRouter>
  
      
    
   <Navigation/>
   <Router/>
  <Home/>





 
  
   
    


   </BrowserRouter>
  
  
)

}

export default App;
