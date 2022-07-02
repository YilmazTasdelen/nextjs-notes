import React from 'react'
import { useRouter } from 'next/router';
/***
 * nested dynamic route content page. 
 * route should be likehttp://localhost:3000/NestedDynamicRoutte/11,2,3,4,...
 * note that its under the DynamicRoute. 
 * put [] name under dynamic route folder. 
 */

const NestedDynamicRoutte = () => {
  const router = useRouter()
  const routerUrlParameter =router.query.NestedDynamicRoutteId;
  return (
    <div>NestedDynamicRoutte - query parameter- {routerUrlParameter}</div>
  )
}

export default NestedDynamicRoutte