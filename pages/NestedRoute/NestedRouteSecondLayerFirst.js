import React from 'react'


/***
 * 
 * this is the second rouing type. 
 * There is a nestedroute.js under the pages. localhost:3000/NestedRoute
 * and there ara two file at NestedRoute file. these files is secon layer of routin.
 * for ex: localhost:3000/NestedRoute/NestedRouteSecondLayerFirst will render NestedRouteSecondLayerFirst page 
 *  ex: localhost:3000/NestedRoute/NestedRouteSecondLayerSecond will render NestedRouteSecondLayerSecond page 
 * 
 */
const NestedRouteSecondLayerFirst = () => {
  return (
    <div>NestedRouteSecondLayer</div>
  )
}

export default NestedRouteSecondLayerFirst