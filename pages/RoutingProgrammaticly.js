import React from 'react';
import { useRouter } from 'next/router';


const RoutingProgrammaticly = () => {
 const router = useRouter();
 
 const handleClick =()=>{
    console.log("routing to another page")
    router.push('/NestedRoute')
 }

 
    return (
    <>
    RoutingProgrammaticly
    <br/>
    <button onClick={handleClick}> Route Other Page</button>
    
    </>
  )
}

export default RoutingProgrammaticly