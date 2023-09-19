import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image1 from "@assets/screenshot.png";
import Container from "react-bootstrap/Container";

const HeroBranding = () => {
	return (
		<Container>
			<Row className="align-items-center flex-md-row my-5">
				<Col md={6}>
					<h1>The Big Squish Lemonade</h1>
					<p>Freshly squeezed lemonade and simply delicious bubble tea, smoothies, milk/fruit teas, & more!</p>
				</Col>
				<Col md={6}>
					<Image src={Image1} className="hero-image" alt="the big squish logo" />
				</Col>
			</Row>
		</Container>
	);
};
export default HeroBranding;
