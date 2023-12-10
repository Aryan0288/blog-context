import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Blog from './Components/Blog'
import Pagination from './Components/Pagination'
import { useContext, useEffect } from 'react';
import { AppContext } from './Context/AppContext';
import { Route,Routes, useLocation, useSearchParams } from 'react-router-dom';
import Home from './Pages/Home';
import BlogPage from './Pages/BlogPage';
import TagPage from './Pages/TagPage';
import Categorypage from './Pages/Categorypage';
function App() {

  const {fetchBlog}=useContext(AppContext);

  const [search,setSearch]=useSearchParams();
  const location =useLocation();

  useEffect(()=>{
    // fetchBlog();
    const page=search.get("page") ?? 1;

    if(location.pathname.includes("tags")){
      const tag=location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlog(Number(page),tag)
    }
    else if(location.pathname.includes("categories")){
      const category=location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlog(Number(page),null,category);
    }
    else{
      fetchBlog(Number(page));
    }
    
  },[location.pathname,location.search]);

  // console.log();
  return (
    <div>
      

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blog/:bolgId" element={<BlogPage/>}/>
        <Route path="/tags/:tag" element={<TagPage/>}/>
        <Route path="/categories/:category" element={<Categorypage/>}/>
      </Routes>
    </div>
  );
}

export default App;
