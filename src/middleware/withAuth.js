import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const withAuth = (Component) => {
    const WithAuthComponent = (props) => {
        const [authenticated, setAuthenticated] = useState(false);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const checkToken = async () => {
                const token = localStorage.getItem('token');
                if (!token) {
                    setLoading(false);
                    return;
                }
                
                try {
                    const response = await fetch('http://127.0.0.1:3200/api/validate-token', {
                        method: 'GET',
                        headers: {
                            'x-access-token': token
                        }
                    });

                    if (response.ok) {
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