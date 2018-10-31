import React from 'react';

var Header = ({ data }) => {
  var style = {display: data.superStatus ? '' : 'none'};

  return (
    <div>
      <div className='synopsis'>PRIVATE ROOM IN APARTMENT</div>
      <div className='summary-container'>
        <div className='info-container'>
          <div className='title'>{data.title}</div>
          <div className='city'>{data.city}</div>
        </div>
        <div className='host-container'>
          <div className='avatar-container'>
            <img className='avatar' src={data.avatar}/>
            <img className='badge' style={style} src='https://bestairbnbhostingtips.com/wp-content/uploads/2017/03/Superhost-Profile-Badge.png'/>
          </div>
          <div className='host-name'>{data.name}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;