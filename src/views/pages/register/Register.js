import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { signup, validateToken } from '../../../services/apiServices/fetchService'

const Register = () => {
 
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
        const data = await validateToken();
        if (data.status == 'success') {
          navigate('/dashboard');
        } else {
          navigate('/register');
        }
      }else{
        navigate('/register');
      }
      } catch (error) {
        navigate('/register');
      }
    }
    checkAuth();
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const data = await signup(firstName, lastName, email, password);
      if (data.status == 'success') {
        localStorage.setItem('token', data.user.token);
        navigate('/dashboard'); // Redirect to dashboard after successful login
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('An error occurred');
    }

  };

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={handleRegister}>
                  <h1>Register</h1>
                  <p className="text-body-secondary">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput value={firstName} onChange={(e) => setFirstName(e.target.value)} autoComplete="firstName" placeholder='First Name' required />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput value={lastName} onChange={(e) => setLastName(e.target.value)} autoComplete="lastName" placeholder='Last Name' required />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" placeholder='Email Address' required />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
                  </CInputGroup>
                  {error && <p style={{ color: 'red' }}>{error}</p>}
                  <div className="d-grid">
                    <CButton color="success" type="submit">Create Account</CButton>
                  </div>
                </CForm>
                <div>
                  <br></br>
                    <p>
                      Already have an account ? <Link to="/login"><CButton color="primary" active tabIndex={-1}>Login!</CButton></Link>
                    </p>
                    
                  </div>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
