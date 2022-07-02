import { useRouter } from 'next/router'

function ISRExampleId({ product }) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <h2>
        {product.id} {product.title} {product.price}
      </h2>
      <p>{product.description}</p>
      <hr />
    </div>
  )
}

export default ISRExampleId

export async function getStaticProps(context) {
  const { params } = context
  const response = await fetch(
    `http://localhost:4000/products/${params.productId}`
  )
  const data = await response.json()
  console.log(`Generating page for /products/${params.productId}`)

  return {
    props: {
      product: data
    },
    revalidate: 10 // 10 seconds limit for refresh data
  }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { productId: '1' } }],
    fallback: true
  }
}

/***
 * Re-generation dev notes.
 * 
 * a re-generation is initialled only if users makes a request after the revalidate time
 * if a user visit our product details page but there is no other user hitting that page the entire day,
 * the regeneration does not happen
 * 
 * revalidate does not mean the page authomatically re-generate every 10 seconds
 * 
 * its simply denotes the time after which, if a user makes a request, a re generation has to be initialled
 * 
 * the re-generation can also fail and the previos cached html could be served till the subsequent 
 * re-generations succeed.
 * 
 * 
 * 
 * 
 * 
 */