import React from 'react'


/***
 * if we put file based routing under dynamic routing folder. 
 * it well work as file based router.
 * for ex: http://localhost:3000/DynamicRoute/1 is dynamşic route. 
 * under the same folder we can access NotDynamicRouteUnderDynamicRoute by 
 * http://localhost:3000/DynamicRoute/NotDynamicRouteUnderDynamicRoute
 * 
 */

const NotDynamicRouteUnderDynamicRoute = () => {
  return (
    <div>NotDynamicRouteUnderDynamicRoute</div>
  )
}

export default NotDynamicRouteUnderDynamicRoute