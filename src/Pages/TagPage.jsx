import React from "react";
import Header from "../Components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Blog from "../Components/Blog";
import Pagination from "../Components/Pagination";

export default function TagPage(){

    const navigation =useNavigate();
    const location=useLocation();
    const tag=location.pathname.split("/").at(-1); 
    return(
        <div className="">
            <Header/>
            <div className="flex w-6/12 mx-auto gap-3 mt-[6rem] -mb-[3rem] items-center">
                <button className="border-2 border-slate-300 px-5 py-1 font-medium rounded-md" onClick={()=>navigation(-1)}>
                    Back
                </button>
                <h2 className="font-semibold text-xl">
                    Blogs Tagged <span className="text-blue-500">#{tag}</span>
                </h2>
            </div>
            <Blog/>
            <Pagination/> 
        </div>
    )
}