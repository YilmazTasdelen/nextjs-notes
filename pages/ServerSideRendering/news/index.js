function NewsArticleList({ articles }) {
    return (
      <>
        <h1>List of News Articles</h1>
        {articles.map(article => {
          return (
            <div key={article.id}>
              <h2>
                {article.id} {article.title} | {article.category}
              </h2>
              <hr />
            </div>
          )
        })}
      </>
    )
  }
  
  export default NewsArticleList
  
  export async function getServerSideProps() {
    console.log('Pre-rendering NewsArticleList')
    const response = await fetch('http://localhost:4000/news')
    const data = await response.json()
  
    return {
      props: {
        articles: data
      }
    }
  }

  /***
   * getServerSideProps;
   * -this method runs only on the server side 
   * -the function will never run clien-side 
   * -tihe code in that func. wont even included in js bundle that send to browser
   * -we can write server-side code directly in this method
   * for ex: accesing file system with fs module or querying database
   * -dont wory about putting api key in this method. 
   * ** getserversideprops is allowed only in age and connot be run
   * from a reqular component file.
   * ıts used only for pre-rendering and client-side data fetching
   * method return an object and object should contains a props key which is an object 
   * -get serversideprops will run at request time   
   * 
   * 
   */