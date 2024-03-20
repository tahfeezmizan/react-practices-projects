<<<<<<< HEAD
import './PostStyle.css'

export default function Post({post}){
    const {title, id, userId, body} = post;
    return (
        <div className="post">
            <h4>Title: {title}</h4>
            <p>Body: {body}</p>
            <p><small>userId: {userId}</small></p>
            <p><small>postId: {id}</small></p>
        </div>
    )
=======
import './PostStyle.css'

export default function Post({post}){
    const {title, id, userId, body} = post;
    return (
        <div className="post">
            <h4>Title: {title}</h4>
            <p>Body: {body}</p>
            <p><small>userId: {userId}</small></p>
            <p><small>postId: {id}</small></p>
        </div>
    )
>>>>>>> 9e4d9e18500da1ade9ee68580d4d81b3dedb6b7e
}