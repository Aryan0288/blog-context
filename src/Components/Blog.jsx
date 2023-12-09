import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from './Spinner';

export default function Blog() {
    const { posts, loading } = useContext(AppContext);
    return (
        <div className='my-[6rem]'>
            {
                loading ?
                    (<Spinner />) :
                    (
                        posts.length == 0 ?
                            (<div ><p className='font-bold text-center pt-[10rem] text-3xl'>No Posts Found
                                <div className='flex items-center justify-center mt-2'>
                                <iframe src="https://giphy.com/embed/7SF5scGB2AFrgsXP63" width="280" height="172" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/pokemon-anime-7SF5scGB2AFrgsXP63"></a></p>
                                </div>
                            </p></div>) :
                            (posts.map((post) => (
                                <div key={post.id} className='w-6/12 mx-auto mb-10 flex flex-col gap-2'>
                                    <p className='font-bold text-xl'>{post.title}</p>
                                    <div>
                                        <p>
                                            By <span>{post.author}</span> on <span className='underline font-semibold'>{post.category}</span>
                                        </p>
                                        <p>Posted on {post.date}</p>
                                    </div>
                                    <p>{post.content}</p>
                                    <div>
                                        {
                                            post.tags.map((tag, index) => {
                                                return <span className='pr-2 text-blue-700 font-semibold text-[14px] underline cursor-pointer' key={index}>{`#${tag}`}</span>
                                            })
                                        }
                                    </div>
                                </div>
                            )))
                    )
            }
        </div>
    )
}
