import React from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormInput,
    CFormLabel,
    CFormTextarea,
    CRow,
    CFormSelect,
} from '@coreui/react'

const UserCreate = () => {
    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Add New Case</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CForm>
                            <div className="mb-3">
                                <CFormLabel htmlFor="fname">First Name</CFormLabel>
                                <CFormInput
                                    type="text"
                                    id="fname"
                                    required />
                            </div>
                            <div className="mb-3">
                                <CFormLabel htmlFor="lname">Last Name</CFormLabel>
                                <CFormInput
                                    type="text"
                                    id="lname" />
                            </div>
                            <div className="mb-3">
                                <CFormLabel htmlFor="email">Email Address</CFormLabel>
                                <CFormInput
                                    type="email"
                                    id="email"
                                    placeholder="name@example.com"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <CFormLabel htmlFor="password">Password</CFormLabel>
                                <CFormInput
                                    type="password"
                                    id="password"
                                    required
                                />
                            </div>
                            <div className='mb-3 text-center'>
                            <CButton type="submit" color="dark">
                                Add Records
                            </CButton>
                            </div>
                        </CForm>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default UserCreate
