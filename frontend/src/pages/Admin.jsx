import axios from "axios"
import path from "../utils/path"
import { useParams } from "react-router-dom"
import UseFetch from "../hooks/UseFetch"
import { useState } from "react"
import Btn from "../components/Btn"
import FormInput from "../components/FormInput"
import FormBtn from "../components/FormBtn"

const Admin = () =>{
    const {id} =useParams()
    const {data:admin,error,loading} = UseFetch(`${path}/admin/get-admin/${id}`)
    const [showModel, setShowModel] = useState(false)
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState('')

    console.log(admin)
    const handleSubmit = async(e)=>{
        e.preventDefault()
        if(!fullName || !email || !password){
            setErr('please fill all the fields')
            console.log(err);
            return
        }
        try {
            const res = await axios.post(`${path}/admin/add-issuer/${id}`,{fullName,email,password})
            console.log(res.data);
            setShowModel(!showModel)
        } catch (err) {
            console.log(err)
        }
    }

    return(

        <div>
            {admin && 
            <div>
                <div>
            {admin.fullName}
            {admin.email}
            <Btn text={'add issuer'} onclick={() => setShowModel(!showModel)} />
            </div>
            <div>
                {admin && 
                <div>
                    {admin.admin.issuers.map(issuer =>(
                        <div key={issuer._id}>
                            <p><span>full name:</span>{issuer.fullName}</p>
                        </div>
                    ))}
                </div>
                }
            </div>
            </div>
            }

            {showModel && <div className="md:w-[50%] mx-auto bg-green-400 p-2 shadow-lg shadow-green-600">
                <form onSubmit={handleSubmit}>
                <div className="flex items-center justify-between">
                <h1>add issuer</h1>
                <button onClick={() => setShowModel(!showModel)}>close</button>
                </div>
                {err && <p>{err}</p>}
                <FormInput
                type={'text'}
                labelFor={'fullName'}
                lableName={'fullName'}
                onchange={e => setFullName(e.target.value)}
                 />
                <FormInput
                type={'email'}
                labelFor={'email'}
                lableName={'email'}
                onchange={e => setEmail(e.target.value)}
                 />
                <FormInput
                type={'password'}
                labelFor={'password'}
                lableName={'password'}
                onchange={e => setPassword(e.target.value)}
                 />
                <FormBtn text={'add'} />
                </form>
                </div>}
        </div>
    )
}

export default Admin