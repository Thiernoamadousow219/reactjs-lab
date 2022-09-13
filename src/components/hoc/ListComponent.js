import React from 'react'
import DataSource from './DataSource'

function ListComponent({techs}) {
    
  return (
     <div>
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Tech</th>
                    <th>Stars (%)</th>
                </tr>
            </thead>

            <tbody>
                {techs && techs.map((tech, key)=>(
                    <tr key={key}>
                        <td>
                            <img src={tech.image} alt={tech.name} width="20" height="20" />
                        </td>
                        <td>{tech.name}</td>
                        <td>{tech.stars}</td>
                    </tr>
                ))}
            </tbody>
            
        </table>
     </div>
  )
}

export default DataSource(ListComponent);