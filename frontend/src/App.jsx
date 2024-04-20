import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import TopNav from "./components/topNav/TopNav"
import Layout from "./pages/layout/Layout"
import Footer from "./components/footer/Footer"
import BlogPage from "./pages/blogPage/BlogPage"
import SinglePost from "./pages/singlePost/SinglePost";
import CreatePost from "./pages/createPost/CreatePost";
import CreateProject from "./pages/createProject/CreateProject";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Contact from "./pages/contact/Contact";
import Profile from "./pages/profile/Profile";
import UpdatePost from "./pages/updatePost/UpdatePost";
import SingleProject from "./pages/singleProject/SingleProject";

function App() {

  return (
    <Router>
      <TopNav />

      <Routes>
        <Route path='/' element={<Layout/> } />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/blog/:id' element={<SinglePost />} />
        <Route path='/create-post' element={<CreatePost />} />
        <Route path='/create-project' element={<CreateProject />} />
        <Route path='/signup' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/profile/:name' element={<Profile/>}/>
        <Route path='/posts/update/:id' element={<UpdatePost/>}/>
        <Route path='/project/:id' element={<SingleProject/>}/>
        
      </Routes>
      <Footer />
      <ToastContainer/>
    </Router>
  )
}

export default App
