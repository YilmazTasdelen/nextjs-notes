import React from 'react';
import {useRouter} from 'next/router';

/***
 * Fully Dynamic Route example 
 * note that, param variable will be the array url parameters
 * http://localhost:3000/FullyDynamicRoute/anyparameter/2/anyparameter/423
 * 
 * 
 * 
 */
 function FullyDynamic() {
  const router = useRouter()
  const {params =[]} = router.query
  console.log(params); // output will be like this["param1","2","param2","2"]
    return (
    <div>
        Fuly DynamicRoute Route
        {JSON.stringify(params)}
    </div>
  )
}

export default FullyDynamic;
