import React from 'react';
import './banner.css';

const Banner = (props)=>{
  return(
    <div 
      className="BannerForm"
      style={{
        backgroundImage: `url(${props.src})`
      }}
    >
      <h1>{ props.title }</h1>
    </div>
  )
}

export default Banner;