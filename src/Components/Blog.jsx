import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from './Spinner';
import BlogDeatil from '../Pages/BlogDeatil';

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
                                <BlogDeatil post={post}/>
                            )))
                    )
            }
        </div>
    )
}
