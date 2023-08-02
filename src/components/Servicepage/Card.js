import React from 'react'
import "./Card.css"

export default function Card({title, about}) {
  return (
    <div id='card'>
      {/* <div className='logo'>
      <img src="stylesheet" href="../Asserts/\lightbulb_circle_FILL0_wght400_GRAD0_opsz48(1).svg" />
      </div> */}
      <div className="card-content">
        <div className='circle'>circle</div>
      <h3 className='card-heading'>{title}</h3>
      <p className='card-para'>{about}</p>
      </div>
    </div>
  )
}
