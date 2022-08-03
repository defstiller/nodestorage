import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Auth from "../pages/auth/Auth";
import HomePage from "../pages/homePage/HomePage";
function AppRouter() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={
					<HomePage />
				} />	

				<Route exact path="/auth" element={
					<Auth />
				} />

				{/* <Route path="/tools/shop/:id" element={
					<ProductPageLayout />
				} /> */}
			</Routes>
		</Router>
	);
}

export default AppRouter;