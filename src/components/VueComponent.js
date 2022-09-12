import React, { useState } from 'react'
import reactLogo from '../images/vuejs.png';
import MouseMove from './MouseMove';
import './style.css'

function VueComponent() {

  return (
    <MouseMove logo={reactLogo} render={(position, logo)=>{
          return (
            <img className='logo' 
                style={{ left: position.x, top: position.y }}
                src={logo}  alt="logo" />
          );
        }}>
    </MouseMove>
)
}

export default VueComponent