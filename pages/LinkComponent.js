import React from 'react';
import Link from 'next/link';

const LinkComponent = () => {
  return (
    <>
    LinkComponent 
    <br/>
    <Link href='/NestedRoute'>
     <a>Go to Nested Route Page</a>
    </Link> <br/>
    <Link href='/FullyDynamicRoute/param1/2/param2/2'>
    <a>FullyDynamicRoute</a>
    </Link>
    </>
  )
}

export default LinkComponent