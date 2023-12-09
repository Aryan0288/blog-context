import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext=createContext();

function AppContextProvider({children}){
    const [loading,setLoading]=useState(false);
    const [posts,setPosts]=useState([]);
    const [page,setPage]=useState(1);
    const [totalPages,setTotalPages]=useState(null);

    // data filling

    async function fetchBlog(page){
        setLoading(true);
        let url=`${baseUrl}?page=${page}`;
        try{
            const result=await fetch(url);
            const data=await result.json();
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        }catch(err){
            console.log("Error found in fetching data");
        }
        setLoading(false);
    }

    function HandlePageChange(page){
        setPage(page);
        fetchBlog(page);
    }

    console.log("This is Context file "+page);

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