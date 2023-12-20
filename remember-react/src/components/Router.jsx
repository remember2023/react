import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Sign from "./Sign";
import Search from "./Search";
import Login from "./Login";
import Store from "./Store";
import About from "./About";
import AddPage from "./AddPage";
import ResponsiveAppBar from "./ResponsiveAppBar";




export default function Router(){
    return(
    
        <Routes>
              <Route path='/' Component={Home}/>
              <Route path='/login' Component={Login}/>
              <Route path="/sign" element={<Sign/>}/>
              <Route path="/search" element={<Search/>}/>
              <Route path="/store" element={<Store/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/add" element={<AddPage/>}/>
              <Route path="*"Component={Home} />

              
        </Routes>
      
    )
}