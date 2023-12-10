import React from 'react'
import Header from '../Components/Header'
import Blog from '../Components/Blog'
import Pagination from '../Components/Pagination'

export default function Home() {
  return (
    <div>
      <Header/>
      <Blog/>
      <Pagination/> 
    </div>
  )
}
