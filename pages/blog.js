import { getSession, useSession } from 'next-auth/client'

function Blog({ data }) {
  const [session] = useSession()
  console.log({ session })

  return <h1>Blog page - {data}</h1>
}

export default Blog

export async function getServerSideProps(context) {
  const session = await getSession(context)
  return {
    props: {
      data: session ? 'personalized':'not logined not free blogs'
    }
  }
}