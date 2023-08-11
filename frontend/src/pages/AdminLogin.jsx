import axios from "axios";
import path from "../utils/path";
import FormInput from "../components/FormInput";
import { useState } from "react";
import FormBtn from "../components/FormBtn";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${path}/admin/login`,{email,password});
      const admin = res.data
      navigate(`/admin/${admin._id}`)
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
        <h1>admin login </h1>
      <form onSubmit={handleSubmit}>
        <FormInput
            type={'text'}
            labelFor={'email'}
            lableName={'email'}
            onchange={e=> setEmail(e.target.value)}
         />
        <FormInput
            type={'password'}
            labelFor={'password'}
            lableName={'password'}
            onchange={e=> setPassword(e.target.value)}
         />
         <FormBtn text={'login'} />
      </form>
    </div>
  );
};

export default AdminLogin;
