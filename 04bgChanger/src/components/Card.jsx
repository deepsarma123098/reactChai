
import { useState } from 'react'



function Card() {

    const [bgColor, setBgColor] = useState('Olive')
  return (
    <div>
      <button onClick={()=> setBgColor({children})} 
        className='px-6 py-2 rounded-2xl'
        style = {{backgroundColor: bgColor}}
        >Green</button>
    </div>
  )
}

export default Card
