import NavBar from "./Components/NavBar";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from "./Components/Home/Home"
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup"
import Bus from "./Components/Bus/Bus";
function App() {
  return (
    <BrowserRouter>
    <NavBar/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/register" element={<Signup/>}/>
       <Route path="/search" element={<Bus/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
