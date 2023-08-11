import axios from 'axios'
import FormInput from '../components/FormInput'
import Header from '../components/Header'
import { useState } from 'react'
import FormBtn from '../components/FormBtn'
import { useNavigate } from 'react-router-dom'
import path from '../utils/path'

const Register = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [middleName, setMiddleName] = useState()
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [occupation, setOccupation] = useState('')
    const [err,setErr] = useState()
    const navigate = useNavigate()

    const handleSubmit = async (e) =>{
        e.preventDefault()
        if(password !== confirmPassword){
            setErr('password do not match')
            return
        }
        if(!firstName || !lastName || !email || !address || !phoneNumber || !password || !confirmPassword || !occupation){
            setErr('all fields are required')
            return
        }
        
        try {
            const res = await axios.post(`${path}/user/register`,{firstName,lastName,middleName,email,phoneNumber,occupation,password,address})
            const user = res.data
            navigate(`/user/${user._id}`)
        } catch (err) {
            console.log(err);
            // setErr(err)
        }
    } 
  return (
    <div>
        <Header />
        <div className='md:w-[50%] mx-auto my-5 border-2 border-green-700 p-2'>
            <form onSubmit={handleSubmit}>
                {err && <p>{err}</p>}
                <h1 className='bg-green-700 p-2 text-white font-bold text-2xl'>Register</h1>
                <div className='flex gap-2'>
                <FormInput
                type={'text'}
                labelFor={'firstName'}
                lableName={'First Name'}
                onchange={e=> setFirstName(e.target.value)}
                name={'firstName'}
                />
                <FormInput
                type={'text'}
                labelFor={'lastName'}
                lableName={'last Name'}
                onchange={e => setLastName(e.target.value)}
                name={'lastName'}
                />
                </div>
                <FormInput
                type={'text'}
                labelFor={'middleName'}
                lableName={'middle Name'}
                onchange={e => setMiddleName(e.target.value)}
                name={'middleName'}
                />
                <FormInput
                type={'email'}
                labelFor={'email'}
                lableName={'email'}
                onchange={e => setEmail(e.target.value)}
                name={'email'}
                />
                <FormInput
                type={'occupation'}
                labelFor={'occupation'}
                lableName={'occupation'}
                onchange={e => setOccupation(e.target.value)}
                name={'occupation'}
                />
                <FormInput
                type={'text'}
                labelFor={'phoneNumeber'}
                lableName={'phone Numeber'}
                onchange={e => setPhoneNumber(e.target.value)}
                name={'phoneNumeber'}
                />
                <FormInput
                type={'text'}
                labelFor={'address'}
                lableName={'address'}
                onchange={e => setAddress(e.target.value)}
                name={'address'}
                />
                <FormInput
                type={'password'}
                labelFor={'password'}
                lableName={'password'}
                onchange={e => setPassword(e.target.value)}
                name={'password'}
                />
                <FormInput
                type={'password'}
                labelFor={'confirmPassword'}
                lableName={'confirmPassword'}
                onchange={e => setConfirmPassword(e.target.value)}
                name={'confirmPassword'}
                />
                <FormBtn text={'submit'} />
            </form>
        </div>
    </div>
  )
}

export default Register