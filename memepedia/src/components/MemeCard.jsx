import React, {useState} from 'react'
import PropTypes from 'prop-types'

function MemeCard({image, creator}) {

  const [likeCount, setLikeCount] = useState(0);  // set default like count here
  const [Liked, setLiked] = useState(false);

  const handleLike = (event) => {
    if (Liked === false){
      setLiked(true);
      setLikeCount(likeCount + 1);
      // fill color red
    } else {
      setLiked(false);
      setLikeCount(likeCount - 1);
      // remove color. 
    }

  }

  // AiOutlineHeart   -> heart icon. 

  return (
    <div className="memeCard" style= {{backgroundColor: 'rgba(0,0,0,0.4)'}}>
      <img src={image} style={{width: '70%', height: '70%'}}></img>
      <div className="cardInfo">  
        <div className="likeContainer">
          <button onClick={handleLike}style={{backgroundColor: Liked ? "#ff6766" : "white"}}>
            {/*Insert Icon here if needed*/}
          </button>
          <label> {likeCount} likes</label>
        </div>
        <label> {creator} </label>
        
      </div>

    </div>
  )
}

MemeCard.defaultProps = {
    //image: "NONE",
    creator: "Anonymous"
}

MemeCard.propTypes = {
    image: PropTypes.string,   // string of the image url. 
    creator: PropTypes.string
}

export default MemeCard