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
    fallback: true
  }
}