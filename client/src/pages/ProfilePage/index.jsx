import React from 'react'
import { useSelector } from 'react-redux'


const ProfilePage = () => {
    const users = useSelector((state) => state.users);
    console.log(users)
  return (
    <div>
      <div className='side-bar'>

      </div>
      <div className='profie-pg'>
        
      </div>
    </div>
  )
}

export default ProfilePage
