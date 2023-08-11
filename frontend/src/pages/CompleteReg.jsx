import React, { useState } from 'react'
import FormInput from '../components/FormInput'
import FormBtn from '../components/FormBtn'
import axios from 'axios'
import path from '../utils/path'
import { useParams } from 'react-router-dom'

export const CompleteReg = () => {
    const [NIN, setNIN] = useState('')
    const [stateOfOrigin, setStateOfOrigin] = useState('')
    const [lga, setLga] = useState('')
    const [homeTown, setHomeTown] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [gender, setGender] = useState('')
    const [maritalStatus, setMaritalStatus] = useState('')
    const [religion, setReligion] = useState('')
    const [err, setErr] = useState('')

    const {id} = useParams()

    const handleSubmit = async(e) =>{
        e.preventDefault()
        if(!NIN || !stateOfOrigin || !lga || !homeTown || !dateOfBirth || !gender || !maritalStatus || !religion){
            setErr("fill all the fields ")
            return
        }
        try{
            const res = await axios.patch(`${path}/user/update-user/${id}`,{
                NIN,stateOfOrigin,lga,homeTown,dateOfBirth,gender,maritalStatus,religion
            })
            console.log(res.data);
        }catch(err){
            console.log(err)
        }
    }

  return (
    <div>
        <div>
            <form onSubmit={handleSubmit}>
                {err && <p>{err}</p>}
                <FormInput
                type={'text'}
                name={"NIN"}
                labelFor={'NIN'}
                lableName={"NIN"}
                onchange={e => setNIN(e.target.value)}
                />
                <FormInput
                type={'text'}
                name={'stateOfOrigin'}
                labelFor={'stateOforigin'}
                lableName={'stateOfOrigin'}
                onchange={e => setStateOfOrigin(e.target.value)}
                />
                <FormInput
                type={'text'}
                name={'lga'}
                labelFor={'lga'}
                lableName={'local government'}
                onchange={e => setLga(e.target.value)}
                />
                <FormInput
                type={'text'}
                name={'homeTown'}
                labelFor={'homeTown'}
                lableName={'home Town'}
                onchange={e => setHomeTown(e.target.value)}
                />

                <FormInput
                type={'date'}
                name={'dateOfBirth'}
                labelFor={'dateOfBirth'}
                lableName={'date of birth'}
                onchange={e => setDateOfBirth(e.target.value)}
                />

                <div>
                    <label htmlFor="gender">gender</label>
                    <div className='flex gap-2 capitalize items-center'>
                    <label htmlFor="male">male</label>
                    <input type="radio" value='male' name='gender'  onChange={e=> setGender(e.target.value)} />
                    </div>
                    <div className='flex gap-2 capitalize items-center'>
                    <label htmlFor="female">female</label>
                    <input type="radio" value='female' name='gender' onChange={e=> setGender(e.target.value)} />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="maritalStatus">marital status</label>
                <select className='border-2 border-green-600' name="maritalStatus" id="maritalStatus" onChange={e=> setMaritalStatus(e.target.value)}>
                    <option value="single">single</option>
                    <option value="married">married</option>
                    <option value="divorced">divorced</option>
                    <option value="widow">widow</option>
                </select>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="religion">religion</label>
                <select className='border-2 border-green-600' name="religion" id="religion" onChange={e => setReligion(e.target.value)}>
                    <option value="muslim">muslim</option>
                    <option value="christian">christian</option>
                    <option value="jew">jew</option>
                </select>
                </div>
                <FormBtn text={'submit'} />
            </form>
        </div>
    </div>
  )
}
