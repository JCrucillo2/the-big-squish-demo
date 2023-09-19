import "bootstrap/dist/css/bootstrap.min.css";

// react router
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// layouts
import RootLayout from "./layouts/RootLayout";

// pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Items from "@/pages/Items";
import Locations from "./pages/Locations";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="contact" element={<Contact />} />
			<Route path="items" element={<Items />} />
			<Route path="locations" element={<Locations />} />
		</Route>
	)
);

const App = () => {
	return <RouterProvider router={router} />;
};
export default App;
