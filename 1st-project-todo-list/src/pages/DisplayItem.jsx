

import React, { useState } from 'react'
import { data } from '../server/server'

export const DisplayItem = () => {
  
  const [dataItem, setData] = useState([])

       
  
    return (

    
    <div>
        {data.map((item, id)=> (
            <div key={id}>
                <h1>{item.title}</h1>
                  <h1>{item.discription}</h1>
            </div>
        ))}
    </div>
  )
}
