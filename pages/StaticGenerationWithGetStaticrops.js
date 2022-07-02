import User from '../components/user'

function UserList({ users }) {
  return (
    <>
      <h1>List of users</h1>
      {users.map(user => {
        return (
          <div key={user.id}>
            <User user={user} />
          </div>
        )
      })}
    </>
  )
}

export default UserList

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  //   console.log(data)

  return {
    props: {
      users: data
    }
  }
}
/***
 * 1: getStaticProps runs only on the Server side.
 * 
 * the function never run client side .
 * 
 * the code we write inside getStaticprops wont even
 *  be included in js bundle that sent to the browser.
 * 
 * 2: you can write server-side code directly in get staticrops
 * accesing the file system using fs module or quering a database 
 * can be done inside getStaticprops
 * 
 *  we dont have to wory about including API keys in getstaticProps as that
 * wont make it to the browser
 * 
 * 3: getStaticProps is allowed only in a page and connot be run 
 * from a reqular component file its used only for prerendering and not client-side data fetching
 * 
 * 4: getStaticProps should be return an object and should contain a props key wich is an object
 * In our example we retun object & the object contained a props key which  was an object as well. 
 * 
 * 5: getStaticProps will run at build time 
 * During development getStaticProps runs on every request. Not production build. 
 * bacause every time developer make changes onthe code, next js makes render twice(onluy in dev builds).
*/