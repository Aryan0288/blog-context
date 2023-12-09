import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Blog from './Components/Blog'
import Pagination from './Components/Pagination'
import { useContext, useEffect } from 'react';
import { AppContext } from './Context/AppContext';
function App() {

  const {fetchBlog}=useContext(AppContext);

  useEffect(()=>{
    fetchBlog();
  },[]);
  return (
    <div>
      <Header/>
      <Blog/>
      <Pagination/>
    </div>
  );
}

export default App;
