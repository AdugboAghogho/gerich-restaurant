import React from 'react';
 
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import './Intro.css';
import { meal } from '../../constants';

const Intro = () => {

  return (
    <div className="app__video">
      <video
        src={meal}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
      />
    </div>
  )
};

export default Intro;