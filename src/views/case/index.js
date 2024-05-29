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

const CaseForm = () => {
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
                                <CFormLabel htmlFor="title">Title</CFormLabel>
                                <CFormInput
                                    type="text"
                                    id="title"
                                    placeholder=""
                                />
                            </div>
                            <div className="mb-3">
                                <CFormLabel htmlFor="endpoint">Endpoint(IP Address)</CFormLabel>
                                <CFormInput
                                    type="text"
                                    id="endpoint"
                                    placeholder="127.0.0.1"
                                />
                            </div>
                            <div className="mb-3">
                                <CFormLabel htmlFor="domain">Domain</CFormLabel>
                                <CFormInput
                                    type="text"
                                    id="domain"
                                    placeholder="example.com"
                                />
                            </div>
                            <div className="mb-3">
                                <CFormLabel htmlFor="url">URL</CFormLabel>
                                <CFormInput
                                    type="text"
                                    id="url"
                                    placeholder="https://example.com/test"
                                />
                            </div>
                            <div className="mb-3">
                                <CFormLabel htmlFor="email">Email Address</CFormLabel>
                                <CFormInput
                                    type="email"
                                    id="email"
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div className='mb-3'>
                                <CFormLabel htmlFor="severity">Severity</CFormLabel>
                                <CFormSelect aria-label="Default select">
                                    <option hidden>Open this select Severity</option>
                                    <option value="Low">Low</option>
                                    <option value="Moderate">Moderate</option>
                                    <option value="High">High</option>
                                    <option value="Critical">Critical</option>
                                </CFormSelect>
                            </div>
                            <div className="mb-3">
                                <CFormLabel htmlFor="message">message</CFormLabel>
                                <CFormTextarea id="message" rows={3}></CFormTextarea>
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

export default CaseForm
