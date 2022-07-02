

function StaticGenerationWithGetStaticrops({ users }) {
    return (
        <>
            <h1>List of users</h1>
            {users.map(user => {
                return (
                    <div key={user.id}>
                        <p>
                            user= {user.name}
                        </p>
                    </div>
                )
            })}
        </>
    )
}

export default StaticGenerationWithGetStaticrops

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