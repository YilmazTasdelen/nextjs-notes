import React from 'react'
import { useRouter } from 'next/router';

const DynamicRouteUnderNestedDynamicR = () => {
    const router = useRouter()
    const {DynamicRouteUnderNestedDynamicRId,NestedDynamicRoutteId} =router.query;
    return (
      <div>
        NestedDynamicRoutte parameter : NestedDynamicRoutteId {NestedDynamicRoutteId}<br/>
        
        DynamicRouteUnderNrstedDynamicRId - query parameter- {DynamicRouteUnderNestedDynamicRId}</div>
    )
}

export default DynamicRouteUnderNestedDynamicR