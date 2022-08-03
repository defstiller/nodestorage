import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {COOKIE_NAME} from "../../config";
function HomePage() {
	const navigate = useNavigate();
	useEffect(() => {
		const cookies = document.cookie.split(';');
		const cookie = cookies.find(cookie => cookie.split('=')[0].trim() === COOKIE_NAME);
		cookie || navigate('/auth');
	}, []);
	function handleSignOutClick() {
		document.cookie = `${COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/`;
		navigate('/auth');
	}
	return (
		<div>
			<h1>Home Page</h1>
			<button onClick={handleSignOutClick}>Sign out</button>
			<main>
				<form>
					<label htmlFor="name">Name</label>
					<input type="text" id="name" />
					<label htmlFor="description">Description</label>
					<textarea id="description"></textarea>
					<input 
						type="file" 
						id="file" 
						accept="image/*"
						/>
					<button type="submit">Submit</button>
				</form>
			</main>
		</div>
	);
}

export default HomePage;