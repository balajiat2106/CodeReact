import React from 'react'

const ChildInputComp=React.forwardRef((props,ref)=> {
    return (
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
})

export default ChildInputComp

