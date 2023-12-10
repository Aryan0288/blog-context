import React from 'react'
import { NavLink } from 'react-router-dom'

export default function BlogDeatil({ post }) {
    console.log("categories "+post.category.replaceAll(" ","-"));
    return (
        <div className='w-6/12 mx-auto mb-10 '>
            <div key={post.id} className='flex flex-col gap-2'>
                <NavLink to={`/blog/${post.id}`} className='font-bold text-xl hover:underline transition-all duration-200 hover:scale-[1.005]'>{post.title}</NavLink>
                <div>
                    <p>
                        By <span>{post.author}</span> on
                        <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
                            &nbsp;
                            <span className='underline font-semibold'>{post.category}</span>
                        </NavLink>
                    </p>
                    <p>Posted on {post.date}</p>
                </div>
                <p>{post.content}</p>
                <div>
                    {
                        post.tags.map((tag, index) => (
                            <NavLink to={`/tags/${tag.replaceAll(" ", "-")}`}>
                                <span className='pr-2 text-blue-700 font-semibold text-[14px] underline cursor-pointer hover:scale-[1.5]' key={index}>{`${tag}`}</span>
                            </NavLink>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
