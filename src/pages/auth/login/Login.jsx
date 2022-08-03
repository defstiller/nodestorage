import React from 'react';
import useHandleInputChange from '../../../helpers/useHandleInputChange';
function Login({loading, fetchData}) {
	const {objectInput, input} = useHandleInputChange();
	function handleSubmitClick(event) {
		event.preventDefault();
		fetchData({
			method: 'POST',
			url: 'http://localhost:5700/auth/login',
			headers: {
			  accept: '*/*'
			},
			data: {
				email: input.email,
				password: input.password,
				name: input.name,
			},
		});
	}
	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={event => handleSubmitClick(event)}>
				<input 
					placeholder="Email" 
					type="email" 
					onChange={objectInput} 
					value={input.email || ""} 
					name="email" 
					autoComplete="email"
					className="current-email"
					required/>
				<input 
					placeholder="Password" 
					type="password" 
					onChange={objectInput} 
					value={input.password || ""} 
					name="password" 
					autoComplete="current-password"
					className="current-password"
					required/>
				<button type="submit" disabled={loading}>Submit</button>
			</form>
		</div>
	);
}

export default Login;