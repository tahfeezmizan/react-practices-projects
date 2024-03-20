<<<<<<< HEAD
import { useEffect, useState } from "react"

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h3>User: {users.length}</h3>
        </div>
    )
=======
import { useEffect, useState } from "react"

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h3>User: {users.length}</h3>
        </div>
    )
>>>>>>> 9e4d9e18500da1ade9ee68580d4d81b3dedb6b7e
}