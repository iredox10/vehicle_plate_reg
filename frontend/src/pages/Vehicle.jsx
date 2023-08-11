import React, { useState } from 'react'
import { Form, useParams } from 'react-router-dom'
import UseFetch from '../hooks/UseFetch'
import path from '../utils/path'
import FormBtn from '../components/FormBtn'
import axios from 'axios'

const Vehicle = () => {
    const {id} = useParams()
    const {data:vehicle,error,loading} = UseFetch(`${path}/user/get-vehicle/${id}`)
    console.log(vehicle)

    const [apply, setApply] = useState(false)
    // const [applied, setApplied] = useState(false)
    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            const res = await axios.post(`${path}/user/apply-plate/${id}`,{apply})
            console.log(res.data);
        } catch (err) {
            console.log(err)
        }
    }
  return (
    <div>
        {vehicle && 
        <div>
            <h1>vehicle detail</h1>
            <div>
                <p><span>vehicle name:</span> {vehicle.vehicle.vcType}</p>
            </div>

        </div>
        }
        {vehicle && vehicle.vehicle.appliedForPlate ==false ? <div className='bg-green-700 shadow-lg shadow-green-500 md:mx-10 m-2'>
            <form onSubmit={handleSubmit}>
                <h1>apply for plate number</h1>
                <div>
                    <div>
                    <label htmlFor="apply">yes</label>
                    <input type="radio" name="apply" id="apply" onChange={e=> setApply(true)} />
                    </div>
                    <div>
                    <label htmlFor="apply">no</label>
                    <input type="radio" name="apply" id="apply" onChange={e => setApply(false)} />
                    </div>
                </div>
                <FormBtn text={'apply'} />
            </form>
        </div>: 'you already apply for this vehicle'}
    </div>
  )
}

export default Vehicle