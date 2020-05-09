import React from 'react'

function RegComp({name}) {
    console.log("Regular, but memo")
    return (
        <div>
            Regular, but memo
            {name}
        </div>
    )
}

export default React.memo(RegComp)






