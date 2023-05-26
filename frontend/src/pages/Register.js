import React, { useState } from 'react'
import { Form, Input, message } from 'antd'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';
import Spinner from '../components/Spinner';
const Register = () => {

  const [loading, setLoading] = useState(false)
const navigate= useNavigate();
  const handleSubmit= async(values)=>{
    console.log(values)
try {
  setLoading(true)
const response = await axios.post('/users/register',values)
  console.log(response)
message.success('Registration Successfully')
setLoading(false)
navigate('/login')
} catch (error) {
  setLoading(false)
message.error('Something went Wrong!!')
}

  }
  return (
    <>
      <div className="register-page">
        {loading && <Spinner/>}
        <Form layout='vertical' onFinish={handleSubmit}>
          <h1>Register Form</h1>
          <Form.Item label='Name' name='name'>
            <Input />
          </Form.Item>

          <Form.Item label='Email' name='email'>
            <Input />
          </Form.Item>

          <Form.Item label='Password' name='password'>
            <Input />
          </Form.Item>
          <div className="d-flex justify-content-center align-items-center gap-3">
            <Link to='/login'>Already Register? click here to login</Link>
            <button className='btn btn-primary'>Register</button>
          </div>

        </Form>
      </div>
    </>
  )
}

export default Register
