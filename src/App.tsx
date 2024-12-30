import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Blog } from './pages/Blog'
import { Blogs } from "./pages/Blogs";
import { Publish } from './pages/Publish';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/publish" element={<Publish />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

function Home(){
  const navigate = useNavigate();

  useEffect(()=>{
      const token = localStorage.getItem('token');
      if(!token || token.length == 0){
          navigate('/signup');
      }
      else{
        navigate('/blogs');
      }
  },[]);

  return (
    <div></div>
  );
}

export default App