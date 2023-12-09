import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

export default function Pagination() {
    const { page, totalPages, HandlePageChange } = useContext(AppContext);

    // setPage(5);
    console.log("Pagination page " + page);
    return (
        <div className='border-t-2 border-slate-300 shadow-md fixed bottom-0 left-0 right-0 bg-white'>
            <div className='w-6/12 flex justify-between mx-auto py-3 uppercase'>

            <div className='text-[17px] flex gap-2'>
                <div className=''>
                    {page > 1 && (<button className='border-2 border-slate-300 px-5 py-1 font-medium rounded-md' onClick={() => HandlePageChange(page - 1)}>Previous</button>)}
                </div>
                <div>
                    {page != totalPages && (<button className='border-2 border-slate-300 px-5 py-1 font-medium rounded-md' onClick={() => HandlePageChange(page + 1)}>Next</button>)}
                </div>
            </div>

            <div className='font-[600]'>
                <p>Page {page} of {totalPages}</p>
            </div>
            </div>
        </div>
    )
}
