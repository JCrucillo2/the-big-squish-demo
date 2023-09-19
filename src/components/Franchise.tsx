import { Link } from "react-router-dom";

const Franchise = () => {
	return (
		<div className="main-gradient p-4 text-center">
			<h2 className="text-light">Franchise Opportunity</h2>
			<p className="text-light my-4">Love bubble teas and lemonade? Start your Low start-up cost franchise in the City! Our team will be happy to assist you. All agreements are executed legally by a specialized franchise lawyer! Contact us for more information!</p>
			<div>
				<Link to="contact" className="btn btn-light">
					Contact Us
				</Link>
			</div>
		</div>
	);
};
export default Franchise;
