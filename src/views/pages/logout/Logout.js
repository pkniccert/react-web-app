import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    CCol,
    CContainer,
    CRow,
} from '@coreui/react';
import { logout } from '../../../services/apiServices/fetchService';

const Logout = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const handleLogout = async () => {
            try {
                const data = await logout();
                if (data.status === 'success') {
                    localStorage.removeItem('token');
                    // Redirect to login page after successful logout
                    navigate('/login');
                } else {
                    setError(data.message);
                }
            } catch (err) {
                setError('An error occurred');
            }
        };

        handleLogout();
    }, [navigate]);

    return (
        <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
            <CContainer>
                <CRow className="justify-content-center">
                    <CCol md={8}>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    );
};

export default Logout
