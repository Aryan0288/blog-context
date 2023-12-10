import React from 'react'
import Header from '../Components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blog from '../Components/Blog';
import Pagination from '../Components/Pagination';

export default function Categorypage() {
  const navigation = useNavigate();
  const location = useLocation();

  const category = location.pathname.split("/").at(-1);
  return (
    <div>
      <Header />
      <div className='my-[6rem] -mb-[5rem]'>
        <div className='w-6/12 mx-auto mb-2 flex gap-3 items-center'>
          <button className='border-2 border-slate-300 px-5 py-1 font-medium rounded-md' onClick={() => navigation(-1)}>
            Back
          </button>
          <h2 className='font-semibold text-xl'>
            Blogs on <span className='text-blue-500'>#{category}</span>
          </h2>
        </div>
      </div>
      <Blog />
      <Pagination />
    </div>
  )
}
