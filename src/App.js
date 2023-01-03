import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Accommodation from "./pages/Accommodation";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AccommodationsList from "./data/logements.json";
import Header from "./components/Header";

const App = () => {
	return (
		<BrowserRouter>
		<Header />
			<Routes>
				<Route>
					<Route path="/" element={<Home accommodations={AccommodationsList} />} />
					<Route path="/about" element={<About />} />
					<Route
						path="/fiche-logement/:id"
						element={<Accommodation accommodations={AccommodationsList} />}
					/>
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
