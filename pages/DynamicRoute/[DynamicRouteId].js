import React from 'react'
import { useRouter } from 'next/router';
/***
 * dynamic route content page. 
 * route should be like http://localhost:3000/DynamicRoute/1,2,3,4,...
 * note that its under the DynamicRoute. 
 * put [] name under dynamic route folder. 
 */

const DynamicRouteContent = () => {
  const router = useRouter()
  const routerUrlParameter =router.query.DynamicRouteId;
  return (
    <div>DynamicRouteContent - query parameter- {routerUrlParameter}</div>
  )
}

export default DynamicRouteContent