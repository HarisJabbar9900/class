import React, { useState } from 'react'
import { Form, Input, message } from 'antd'
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';


const Login = () => {
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      setLoading(true)
      const { data } = axios('/users/login',values)
      setLoading(false)
      message.success('login Successfully')
      localStorage.setItem('user', JSON.stringify({ ...data, password: '' }))
      navigate('/')
    } catch (error) {
      setLoading(false)
      message.error('Something went Wrong')
    }

  }

  return (
    <>
      <div className="register-page">
        {loading && <Spinner />}

        <Form layout='vertical' onFinish={handleSubmit}>
          <h1>Login Form</h1>


          <Form.Item label='Email' name='email'>
            <Input />
          </Form.Item>

          <Form.Item label='Password' name='password'>
            <Input />
          </Form.Item>
          <div className="d-flex justify-content-center align-items-center gap-3">
            <Link to='/register'>New user??Click here to Register</Link>
            <button className='btn btn-primary'>Login</button>
          </div>

        </Form>
      </div>
    </>
  )
}

export default Login
