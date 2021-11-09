import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axiosWithAuth from '../Utility/axiosWithAuth';

const Logout = ()=> {
    const {push} = useHistory();

    useEffect(()=> {
        axiosWithAuth()
            .post('http:localhost:5000/api/logout')
            .then(resp => {
                localStorage.removeItem('token');
                push('/login');
            });
    }, []);
    
    return(<div></div>);
}

export default Logout;