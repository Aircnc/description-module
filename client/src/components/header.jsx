import React from 'react';

var Header = ({ data }) => {
  console.log(data);
  return (
  	<div>
      <div className='synopsis'>PRIVATE ROOM IN APARTMENT</div>
      <div className='summary-container'>
        <div className='title'>{data.title}</div>
        <div className='city'>{data.city}</div>
        <div className='avatar'>
          <a href={data.avatar}/>
        </div>
      </div>
    </div>
  )
}

export default Header;