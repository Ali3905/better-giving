import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import PageState from './state/PageState';
import CreateTestimonial from './pages/CreateTestimonial';
import EditTestimonial from './pages/EditTestimonial';
import Signup from './pages/Signup';
import Login from './pages/Login';
import UserState from './state/UserState';
import WritePage from './pages/WriteBlog';
import Blog from './pages/Blog';
import Edit from './pages/EditBlog';
import axios from 'axios';


function App() {


  axios.defaults.baseURL = process.env.REACT_APP_API_HOST; 


  return (
    <PageState>
      <UserState>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/dashboard/create-testimonial' element={<CreateTestimonial/>} />
        {/* <Route path='/dashboard/create-blog' element={<CreateBlog/>} /> */}
        <Route path='/dashboard/edit-blog/:id' element={<Edit/>} />
        <Route path='/dashboard/edit-testimonial/:id' element={<EditTestimonial/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/writeBlog' element={<WritePage/>} />
        <Route path='/Blog/:id' element={<Blog/>} />
        
      </Routes>
    </Router>
    </UserState>
    </PageState>
  );
}

export default App;
