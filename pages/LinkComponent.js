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
 * 1: any <Link/> component in the viewport(initially or through scroll) will be 
 * prefeched by default (including the corresponding data) for pages using static Generation
 * its mean for this page there are two link and when we open this page hen browser will also 
 * preload NestedRoute page emd preload static data and FullyDynamicRoutepage and its own data
 * 
 * 2: When a page with get staticprops is pre-render at build time, in addition to page html file
 * next.js generates a json file holding the result of runnig getStaticprops
 *  
 * 3: The json file will be used in client-side routing through next/link or next/router
 * 
 * 4: last but not least cilient-side page transitions will not call getstaticprops as only the exported json is used.
 * 
 */