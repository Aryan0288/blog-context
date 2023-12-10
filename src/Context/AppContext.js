import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";

export const AppContext=createContext();

function AppContextProvider({children}){
    const [loading,setLoading]=useState(false);
    const [posts,setPosts]=useState([]);
    const [page,setPage]=useState(1);
    const [totalPages,setTotalPages]=useState(null);

    const navigate =useNavigate();
    // data filling

    async function fetchBlog(page,tag=null,category){
        setLoading(true);
        let url=`${baseUrl}?page=${page}`;
        if(tag){
            url+=`&tag=${tag}`;
        }
        if(category){
            url+= `&category=${category}`;
            console.log("app context category "+url);
        }
        try{
            const result=await fetch(url);
            const data=await result.json();
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
            console.log(data);
        }catch(err){
            console.log("Error found in fetching data");
        }
        setLoading(false);
    }

    function HandlePageChange(page){
        navigate({search:`?page=${page}`});
        setPage(page);

    }


    const value={
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage, 
        totalPages,
        setTotalPages,
        HandlePageChange,
        fetchBlog
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider;