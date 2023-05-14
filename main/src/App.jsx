
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import IndexPage from './Pages/IndexPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
// import CreatePost from './Pages/CreatePost'

import { UserContextProvider } from './UserContext';
import PostPage from './Pages/PostPage';
// import EditPost from './Pages/EditPost';
import RecentBlog from './Pages/RecentBlog';
// import Test from './Test';
import HomePage from './Pages/HomePage';
import CreateBlog from './Pages/CreateBlog';

function App() {
  

  return (
    <UserContextProvider>
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route index element={<IndexPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      {/* <Route path='/create' element={<CreatePost/>} /> */}
      <Route path='/post/:id' element={<PostPage/>} />
      <Route path='/recent' element={<RecentBlog/>} /> 
      <Route path='/createblog' element={<CreateBlog/>} />
      <Route path='/homepage' element={<HomePage/>} />
    </Routes>
  </UserContextProvider>
  )
}

export default App
