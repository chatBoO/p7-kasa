import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import About from "./pages/About";
import Accommodation from "./pages/Accommodation";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AccommodationsList from "./data/logements.json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Header />
		<Routes>
			<Route>
				<Route
					path="/"
					element={<Home accommodations={AccommodationsList} />}
				/>
				<Route path="/about" element={<About />} />
				<Route
					path="/fiche-logement/:id"
					element={
						<Accommodation accommodations={AccommodationsList} />
					}
				/>
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
		<Footer />
	</BrowserRouter>
);
