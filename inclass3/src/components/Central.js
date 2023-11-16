import React, {useState} from 'react'
import './Central.css'

function Central () {
    const [click, setClicker] = useState(0);

    const addClick = () => {
        setClicker(click + 1);
    }

    const removeClick = () => {
        setClicker(click - 1);
    }


  return (
    <div className = 'appContainer'>
        <div className='counterContainer'>
            <p className='clickerValue'>{click}</p>
            <button className='remove' onClick={removeClick}>-</button>
            <button className='add' onClick={addClick}>+</button>
        </div>
    </div>
  )
}

export default Central