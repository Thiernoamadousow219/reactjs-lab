import React, { useMemo, useState } from 'react'

const MouseMove = ({render, logo})=>{
    
    const [position, setPosition] = useState({x: 0, y:0}); 

    const mouseMove = (event)=>{
        setPosition({x: event.clientX, y: event.clientY});
    }

    const value = useMemo(()=>{
        return {x : position.x, y: position.y};
    }, [position]);

    return (
        <div className='page' onMouseMove={mouseMove}>
            {render(value, logo)}            
        </div>
    )
}

export default MouseMove