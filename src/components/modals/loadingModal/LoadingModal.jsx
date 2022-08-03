import React from "react";
import PropTypes from "prop-types";
import LoadingSvg from "../../../assets/loadingSvg/LoadingSvg";

function LoadingModal(props) {
	const {loading} = props;
	if(loading) {
		return (
			<main >
				<LoadingSvg alt="loading"/>
			</main>
		);
	}

}
LoadingModal.propTypes = {
	styles: PropTypes.any,
	loading: PropTypes.bool
};
export default LoadingModal;