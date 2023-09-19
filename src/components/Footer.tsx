import Container from "react-bootstrap/Container";
import Image1 from "@assets/screenshot.png";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div>
			<Container>
				<div className="text-center">
					<Image src={Image1} className="my-3 footer-img-control" alt="the big squish logo" />
					<h3>The Big Squish Lemonade & Bubble Tea</h3>
				</div>

				<div className="my-4 d-flex flex-column text-center">
					<Link to="/" className="link-dark fs-4">
						Home
					</Link>
					<Link to="about" className="link-dark fs-4">
						About
					</Link>
					<Link to="items" className="link-dark fs-4">
						Items
					</Link>
					<Link to="contact" className="link-dark fs-4">
						Contact
					</Link>
				</div>

				<div className="border-top border-dark-subtle py-4">&copy; {new Date().getFullYear()} The Big Squish Lemonade & Bubble Tea. All rights reserved.</div>
			</Container>
		</div>
	);
};
export default Footer;
