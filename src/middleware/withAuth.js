import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { validateToken } from '../services/apiServices/fetchService';

const withAuth = (Component) => {
    const WithAuthComponent = (props) => {
        const [authenticated, setAuthenticated] = useState(false);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const checkToken = async () => {
                try {
                    const data = await validateToken();
                    if (data.status == 'success') {
                        setAuthenticated(true);
                    } else {
                        setAuthenticated(false);
                    }
                } catch (error) {
                    console.error('Network error:', error);
                    setAuthenticated(false);
                } finally {
                    setLoading(false);
                }
            };

            checkToken();
        }, []);

        if (loading) {
            return <div>Loading...</div>;
        }

        if (!authenticated) {
            return <Navigate to="/login" />;
        }

        return <Component {...props} />;
    };

    return WithAuthComponent;
};

export default withAuth;