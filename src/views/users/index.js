import React, { useState, useEffect } from 'react'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CTable,
    CTableBody,
    CTableCaption,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from '@coreui/react'
import { getUsersData } from '../../services/apiServices/fetchService';

const UserManage = () => {

    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const checkUsersData = async () => {
            try {
                const data = await getUsersData();
                if (data.status == 'success') {
                    setUsers(data.users);
                } else {
                    setError('Invalid credentials');
                }
            } catch (err) {
                setError('An error occurred');
            }

        };
        checkUsersData();
    }, []);
    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Manage</strong> <small>Case</small>
                    </CCardHeader>
                    <CCardBody>
                        <CTable>
                            <CTableHead>
                                <CTableRow>
                                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">First Name</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Last Name</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                {error && <p style={{ color: 'red' }}>{error}</p>}
                                {users.map((item, index) => (
                                    <CTableRow key={item._id}>
                                        <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                                        <CTableDataCell>{item.first_name}</CTableDataCell>
                                        <CTableDataCell>{item.last_name}</CTableDataCell>
                                        <CTableDataCell>{item.email}</CTableDataCell>
                                    </CTableRow>
                                ))}
                            </CTableBody>
                        </CTable>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default UserManage
