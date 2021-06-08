import React from 'react'

import Astroid from './Astroid'
import Planets from './Planets'

const Space = ({ offsetX }) => {
    return (
        <div className="w-100 position-absolute">
            {/* <Astroid offsetX={offsetX}/> */}
            <Planets offsetX={offsetX}/>
        </div>
    )
}

export default Space
