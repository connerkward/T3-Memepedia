import React from 'react'
import PropTypes from 'prop-types'

function Card({image}) {

  return (
    <div className="card" style= {{backgroundColor: 'rgba(0,0,0,0.4)'}}>
      <div className="cardImage">
        
        <img src={image} style={{width: '100%', height: '100%'}}></img>
      </div>
    </div>
  )
}

// Card.defaultProps = {
//     image: "IMAGE"
// }

Card.propTypes = {
    image: PropTypes.string   // string of the image url. 
}

export default Card