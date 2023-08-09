import './App.css';
import { Container,Box } from '@mui/material';
import Homepage from './pages/Homepage';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Movies from "./pages/Movies";
import Subscriptions from "./pages/Subscriptions";
import ManageUsers from "./pages/ManageUsers";
import AddMovie from "./pages/AddMovie";
import EditMovie from "./pages/EditMovie";
import AddMember from "./pages/AddMember";
import EditMember from "./pages/EditMember";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import Login from "./pages/Login";
import Register from "./pages/Register";




function App() {
  return (
    <Container>
    <Routes>
        <Route path="/Movies" element={<Movies />} />
        <Route path="AddMovie" element={<AddMovie />} />
        <Route path="EditMovie/:id" element={<EditMovie />} />

        <Route path="/Subscriptions" element={<Subscriptions />} />
        <Route path="AddMember" element={<AddMember />} />
        <Route path="EditMember/:id" element={<EditMember />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/" element={<Login />} />


        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />

        <Route path="/ManageUsers" element={<ManageUsers />}/>
          <Route path="AddUser" element={<AddUser />} />
          <Route path="EditUser/:id" element={<EditUser />} />
        
      </Routes>
    </Container>
  );
}

export default App;
