<<<<<<< HEAD
import { useState } from "react"

export default function Counter() {
    const [ count, setCount ] = useState(0);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount)
        console.log(newCount)
    }
    return (
        <div style={{ marginBottom: '20px', padding: '20px', border: '2px solid black' }}>
            <h3>Count: {count}</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
=======
import { useState } from "react"

export default function Counter() {
    const [ count, setCount ] = useState(0);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount)
        console.log(newCount)
    }
    return (
        <div style={{ marginBottom: '20px', padding: '20px', border: '2px solid black' }}>
            <h3>Count: {count}</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
>>>>>>> 9e4d9e18500da1ade9ee68580d4d81b3dedb6b7e
}