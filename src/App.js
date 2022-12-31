import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
