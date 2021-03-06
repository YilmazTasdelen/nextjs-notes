import Link from 'next/link'
/***
 * SSG: static site generated.
 * dev notes. example of SSG with dynamic parameter.
 * 
 * 
 */
function PostList({ posts }) {
  return (
    <>
      <h1>List of Posts</h1>
      {posts.map(post => {
        return (
          <div key={post.id}>
            <Link href={`posts/${post.id}`}>
              <h2>
                {post.id} {post.title}
              </h2>
            </Link>
            <hr />
          </div>
        )
      })}
    </>
  )
}

export default PostList

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()

  return {
    props: {
      posts: data.slice(0, 3)
    }
  }
}

/***
 * dev notes: 
 * we might not always need to pre render the data
 * ex: user dashboard page 
 * its private and behind the ogin screen
 * highly user spesific and seo is not required 
 * no need the pre render data 
 * 
 * so we can rely on client side data fetching 
 * 
 * 
 */