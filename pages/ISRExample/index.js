function ISRExample({ products }) {
    return (
      <>
        <h1>List of products</h1>
        {products.map(product => {
          return (
            <div key={product.id}>
              <h2>
                {product.id} {product.title} {product.price}
              </h2>
              <hr />
            </div>
          )
        })}
      </>
    )
  }
  
  export default ISRExample
  
  export async function getStaticProps() {
    console.log('Generating / Regenerating ProductList')
    const response = await fetch('http://localhost:4000/products')
    const data = await response.json()
  
    return {
      props: {
        products: data
      },
      revalidate: 30
    }
  }

  /***
   * 
   * this is the example of ISR (incremental static regeneration)
   */