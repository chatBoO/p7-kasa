import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Accommodation from "./pages/Accommodation";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ListeLogements from "./data/logements.json";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route>
					<Route path="/" element={<Home logements={ListeLogements} />} />
					<Route path="/about" element={<About />} />
					<Route
						path="/fiche-logement/:id"
						element={<Accommodation logements={ListeLogements} />}
					/>
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
