import Appbar from "@/components/Appbar";
import { Outlet } from "react-router-dom";
import "@/Main.css";
import Footer from "@/components/Footer";

const RootLayout = () => {
	return (
		<>
			<header>
				<Appbar />
			</header>

			<main>
				<Outlet />
			</main>

			<footer>
				<Footer />
			</footer>
		</>
	);
};
export default RootLayout;
