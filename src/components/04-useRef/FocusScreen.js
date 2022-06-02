import React from 'react'

import '../02-useEffect/effects.css'

export const FocusScreen = () => {
  return (
    <div>
        <h1>Focus Screen</h1>
        <hr/>

        <input
        className='form-control'
        placeholder='Su nombre'
        />

        <button className='btn btn-outline-primary mt-5'>
            Focus
        </button>
    </div>
  )
}
