<<<<<<< HEAD
import { useEffect, useState } from "react"
import Friend from "./Friend";

 
export default function Friends(){
    const [friends, setFriends] = useState([]);

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setFriends(data))
})

    return(
        <div>
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
=======
import { useEffect, useState } from "react"
import Friend from "./Friend";

 
export default function Friends(){
    const [friends, setFriends] = useState([]);

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setFriends(data))
})

    return(
        <div>
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
>>>>>>> 9e4d9e18500da1ade9ee68580d4d81b3dedb6b7e
}