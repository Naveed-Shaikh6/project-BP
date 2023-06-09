
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import IndexPage from './Pages/IndexPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import { UserContextProvider } from './UserContext';
import PostPage from './Pages/PostPage';
import RecentBlog from './Pages/RecentBlog';
import CreateBlog from './Pages/CreateBlog';
import AboutPage from './Pages/AboutPage';


function App() {
  

  return (
    <UserContextProvider>
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route index element={<IndexPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/post/:id' element={<PostPage/>} />
      <Route path='/recent' element={<RecentBlog/>} /> 
      <Route path='/createblog' element={<CreateBlog/>} />
      <Route path='/about' element={<AboutPage/>} />
    </Routes>
  </UserContextProvider>
  )
}

export default App
