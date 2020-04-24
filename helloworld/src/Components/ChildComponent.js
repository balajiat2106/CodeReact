import React from 'react'

export default function ChildComponent(props) {
    return (
        <div>
            <button onClick={()=>props.greet("Child")}>Click Me, This is child</button>
        </div>
    )
}
