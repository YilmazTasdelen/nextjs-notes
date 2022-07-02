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

export default LinkComponent;

/***
 * dev notes; 
 * 
 * any <Link/> component in the viewport(initially or through scroll) will be 
 * prefeched by default (including the corresponding data) for pages using static Generation
 * its mean for this page there are two link and when we open this page hen browser will also 
 * preload NestedRoute page emd preload static data and FullyDynamicRoutepage and its own data
 * 
 * 
 * 
 * 
 */