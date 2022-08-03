import React, {useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import Login from './login/Login';
import Signup from './signup/Signup';
import LoadingModal from "../../components/modals/loadingModal/LoadingModal";
import Modal from "../../components/modals/Modal";
import useAxios from '../../helpers/useAxios';
import {COOKIE_NAME} from "../../config";
function Auth() {
	const { response, loading, error, fetchData, setError, setResponse } = useAxios();
	const navigate = useNavigate();
	useEffect(() => {
		const cookies = document.cookie.split(';');
		const cookie = cookies.find(cookie => cookie.split('=')[0].trim() === COOKIE_NAME);
		cookie && navigate('/');
	}, []);
	useEffect(() => {
		if (response) {
			const expires = new Date(new Date().getTime() + response.expiresIn * 1000);
			document.cookie = `${COOKIE_NAME}=${response.token}; expires=${expires.toGMTString()}; path=/`;
			setTimeout(() => {
				navigate("/");
			} , 2000);
		}
	}, [response]);
	return <>
		<Modal 
			response={response?.message} 
			error={error} 
			setError={setError} 
			setResponse={setResponse} />
		<LoadingModal loading={loading}/>
		<Login 
			loading={loading} 
			fetchData={fetchData}/>
		<Signup 
			loading={loading} 
			fetchData={fetchData}/>
		</>
}

export default Auth;