import React from 'react';

const Character = ({ img, name }) => {
  return (
    <div className="character-box">
    <p>Your character this round is:</p>
      <img src={img} />
      <h3 className="character-name">
        {name}
      </h3>
    </div>
  )
}

export default Character;