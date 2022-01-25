import React from 'react'
import ProfilePicture from '../Assets/john.jpg';
import  './profile.css';





const Profile = () => {
  return (

<div class="wrapper">
    <div class="left">
        <img src={ProfilePicture} alt="user" width="300" style={{borderRadius:'50%'}} />
        <h2>John batista</h2>
    </div>
    <div class="right">
        <div class="info">
            <h3 className='header'>Crypto's Tracker</h3>
            <div className="info_data">
                {/* table  */}
            </div>
        </div>
      
    </div>
</div>
  )
}

export default Profile
