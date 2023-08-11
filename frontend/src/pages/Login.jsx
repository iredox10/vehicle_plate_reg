import React, { useState } from 'react'
import FormInput from '../components/FormInput'
import FormBtn from '../components/FormBtn'
import path from '../utils/path'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
    const [err,setErr] = useState()
  const navigate = useNavigate()
    const handleSubmit = async (e)=>{
      e.preventDefault()
      if(!email || !password){
        setErr('all field are required')
      }
      try {
        const res = await axios.post(`${path}/user/login`,{email,password})
        const user = res.data
        navigate(`/user/${user._id}`)
      } catch (error) {
        console.log(error.response.data);        
      }
    }

  return (
    <div>
       <form onSubmit={handleSubmit}>
                {err && <p>{err}</p>}
                <h1 className='bg-green-700 p-2 text-white font-bold text-2xl'>Register</h1>
                <FormInput
                type='email'
                labelFor='email'
                lableName='email'
                onchange={e => setEmail(e.target.value)}
                />
                <FormInput
                type='password'
                labelFor='password'
                lableName='password'
                onchange={e => setPassword(e.target.value)}
                />
                <FormBtn text='login' />
          </form>
    </div>
  )
}

export default Login