import React, { useEffect, useState} from "react";
import PropTypes from "prop-types";

import styles from "./modal.module.css";
function Modal(props) {
	const [isModal, setIsModal] = useState(false);
	const {response, 
		delay = 3000, 
		customErrorDelay = 5000 /**error will default to 8 sec, and minimum of 3 sec. With custom delay of 2 sec, total will be delay 3sec + custom 2sec*/, 
		error, 
		setError, 
		setResponse} = props;
	/* open and close modal every time new response or error is received */
	useEffect(() => {
		if(response) {
			setIsModal(true);
			const timer = setTimeout(() => {
				setIsModal(false);
				setResponse && setResponse(null);
			}, delay);
			return () => clearTimeout(timer);
		}
		if(error) {
			setIsModal(true);
			const timer = setTimeout(() => {
				setIsModal(false);
				setError(null);
			}, delay + customErrorDelay);
			return () => clearTimeout(timer);
		}
		return;
	}, [response, error]);
	function handleCloseModalClick() {
		if(error) {
			setError(null);
		}
		if(response) {
			setResponse (null);}
			setIsModal(false);
	}
	if(isModal) {
		return (
			<main className={styles.modal}>
				<div>
					{response && <p data-testid="responseParagraph">{response}</p>}
					{error && 
					<div data-testid="errorDiv">
						<p data-testid="errorMessage">{error.message}</p>
						<p data-testid="errorCode">Error code: {error.code}</p>
					</div>
					}
				</div>
				<button onClick={handleCloseModalClick}>Close</button>
			</main>
		);
	}
}
Modal.propTypes = {
	props: PropTypes.any,
	response: PropTypes.any,
	delay: PropTypes.any,
	error: PropTypes.any,
	setError: PropTypes.any, 
	setResponse: PropTypes.any,
	customErrorDelay: PropTypes.any
};

export default Modal;