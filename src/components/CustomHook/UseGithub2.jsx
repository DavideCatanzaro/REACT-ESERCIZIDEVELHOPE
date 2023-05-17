import React, { useEffect, useState } from "react";

function useGithubUser2 (username){
    
    const [data, setData ] = useState(null)

    useEffect(()=>{
        fetch(`https://api.github.com/users/${username}`)
            .then((response)=>{
                return response.json()
            })
            .then ((json)=>{
                console.log(json)
                setData(json)
            })
            .catch ((error)=>{
                console.error(error)
            })
    },[username])
    
    return( 
            data 
       )
}

export default useGithubUser2