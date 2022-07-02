import { useRouter } from 'next/router'

function Post({ post }) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
    </>
  )
}

export default Post

export async function getStaticProps(context) {// contex is the parameter came fornm ruoter link. in this example it came from index.js under the post folder.
  const { params } = context
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  )
  const data = await response.json()

  if (!data.id) {
    return {
      notFound: true
    }
  }

  console.log(`Generating page for /posts/${params.postId}`)
  return {
    props: {
      post: data 
    }
  }
}

export async function getStaticPaths() { // this method created post pages based on id. So we have different page and data for each post.  thats how next js pre render dynamic pages
  // const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  // const data = await response.json()
  // const paths = data.map(post => {
  //   return {
  //     params: { postId: `${post.id}` }
  //   }
  // })

  return {
    paths: [
      { params: { postId: '1' } },
      { params: { postId: '2' } },
      { params: { postId: '3' } }
    ],
    fallback: true // it could be false,true,block
  }
}

/**
 * fallback dev notes.
 * 
 * 1- fallback: false the path returned from getStaticPaths will be rendered to html 
 * at build time by getStaticProps.
 * 
 * fallback is set to false, then any paths not returned ny get staticPaths
 * will result 404 page
 * 
 * it is very suitable if we have an aplication with small number of paths to prerender.
 * and new pages are not added often.
 * 
 * 
 * 2-:falback: true
 * the paths returned from getstaticpaths will be rendered to html at build time
 * getstaticprops. its same as false value.
 * 
 * the paths that not been generated at build time will not result in 404 page.
 * Insted next.js will serve "fallback" version ofthe page on the first request
 * to such a path.
 * 
 * In the back ground next.js will statically generate the requested path HTML and json.
 * this includes running getStaticprops.
 * 
 * when the use fallback :true
 * 
 * its very suitable if you are using very large number of static pages that depend on data.
 * like large ecommerce site.
 * 
 * you vant all the product pages to be pre-render but if you have a few thousand products,
 * build can take a really long time.
 * 
 * you may statically generate small subset number of products that are popular and use fallback:true for the rest.
 * 
 * when someone request a page thats not generated yet, user will see the page with the loading indicator.
 * shortly after, get staticprops finishes and the page will be rendered with the requested data.
 * 
 * the ensure that users always  have a fast experience while preserving fast builds and the benefits of static generation.
 * 
 * 3- fallback : blocking
 *   
 * the paths returned from getstaticpaths will be rendered to html at build time
 * getstaticprops. its same as false value.
 *  
 * the paths that not been generated at build time will not result in 404 page.
 * Insted, on the firts request next.js will render the "page" on the server and return generated html.
 * 
 * when its done, browser receives the html for generated path. 
 * for the user perspecive it will transition from "the browser is requesting the page" to 
 * "the full page is loaded." 
 * There is no flash of loading/fallback state.
 * 
 * At the same time, next.js keeps tranck of the new list of pre-renders page. 
 * Subsequent to the same path will serve the generated page, just like other pages
 * pre-render at build time.
 * 
 * when the use fallback: bolocking
 * 
 * on ux level, sometimes, people prefer the page to be  loaded witout a loading indicator if the wait is a few milli seconds.
 * This helps avoid the layout shifts.
 * 
 * some crawlers did not support JS. The loading page would be rendered and then the full page
 * would be loaded which was causing problem.
 * 
 * Issues :
 * 
 * build time. the more static prerendered file means more build time.  
 * changing the live data. For examples. when u changes product price on the eccommerce websie.
 * and this pages is already opened some users browser. These users will see the old prise.
 * 
 * There was a need to update only those pages which needed a change without having to rebuild the entire app.
 * for solve this propblem next.js have 
 * 
 * INCREMENTAL STATIC REGENERATION
 * whit ISR next js allows us to update static pages after we build our application.
 * 
 * HOw ?!!!
 * 
 * in the get staticProps function, apart from the props key, we can specify revalidate key
 * 
 * 
 */