import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import { baseUrl } from '../baseUrl';
import Header from '../Components/Header';
import Spinner from '../Components/Spinner';
import BlogDeatil from './BlogDeatil';

export default function BlogPage() {

  const newUrl = "https://codehelp-apis.vercel.app/api/";
  const [blog, setBlog] = useState(null);
  const [relatedblog, setRelatedBlog] = useState([]);

  const location = useLocation();
  const navigation = useNavigate();
  const { loading, setLoading } = useContext(AppContext);

  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newUrl}get-blog?blogId=${blogId}`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      setBlog(data.blog);
      setRelatedBlog(data.relatedBlogs);
      console.log("indide blog  " + relatedblog);
    }
    catch (err) {
      <h1>Error occur due to fetch Data</h1>
    }

    setLoading(false);
  }


  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname])


  console.log("related blog" + relatedblog);
  return (
    <div className=''>
      <Header />
      <div className='my-[6rem]'>
        <div className='w-6/12 mx-auto mb-2'>
          <button className='border-2 border-slate-300 px-5 py-1 font-medium rounded-md' onClick={() => navigation(-1)}>
            Back
          </button>
        </div>
        {
          loading ?
            (<Spinner />) :
            blog ?
              (
                <div>
                  <BlogDeatil post={blog} />
                  <div className='w-6/12 mx-auto'>
                    <h2>Related Blogs</h2>
                  </div>

                  {
                    relatedblog.map((post) => (
                      <div key={post.id}>
                        <BlogDeatil post={post} />
                      </div>
                    ))
                  }
                </div>
              )
              :
              (<h2>No Blog Found</h2>)
        }
      </div>
    </div>
  )
}
