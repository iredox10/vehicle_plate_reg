import React from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import UseFetch from '../hooks/UseFetch'
import path from '../utils/path'
import Header from '../components/Header'
import Btn from '../components/Btn'

const User = () => {
    const {id} = useParams()
    const {data:user,error,loading} = UseFetch(`${path}/user/get-user/${id}`)
    console.log(user);
  return (
    <div>
      <Header />
    <div className='flex justify-between md:w-[80%] mx-auto'>
      <div>
        {user && 
        <div>
        <h1>welcom {user.user.firstName} {user.user.lastName}</h1>
        <div className='my-3'>
        <p><span>email:</span>{user.user.email}</p>
        <p><span>address:</span>{user.user.address}</p>
        </div>
        </div>
        
}
  <NavLink className='bg-white p-2 my-2 b' to={`/complete-registration/${id}`}>complete registration</NavLink>
  </div>
<div>
  <NavLink to={`/register-vehicle/${id}`}>register vehicle</NavLink>
  <div>
    {user && <div>
      {user.vehicles.map(vehicle =>(
        <div key={vehicle._id}>
          <NavLink to={`/vehicle/${vehicle._id}`}>
          <p><span>vehicle name:</span>{vehicle.vcType}</p>
          </NavLink>
        </div>
      ))}
      </div>}
  </div>
  </div>
      </div>
    </div>
  )
}

export default User