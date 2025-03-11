import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/mainLayout.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import UserProfile from "./pages/userProfile.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<MainLayout />}>
        <Route path= "/" element={<Login/>}/>
        <Route path = "/" element={<Register/>}/>
        <Route path = "/" element ={<UserProfile/>}/>
        </Route>
      </Routes>
    </Router>
  );
}
    
export default App;
