import React from 'react'
import DataSource from './DataSource'
import './style.css'


function CardComponent({techs}) {
    return (
        <div className='container'>
           {techs && techs.map((tech, key)=>(
                <div className='card' key={key}>
                    <img src={tech.image} alt="Vue" className='card-img' /> 
                    <div className='info'>
                        <p>Name: { tech.name }</p>
                        <p>Start: { tech.stars }</p>
                    </div>            
                </div>
           ))}
        </div>
     )
}

export default DataSource(CardComponent)