import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Contact = () => {
	return (
		<div>
			<Container className="my-4">
				<h2 className="my-4 text-center">Contact</h2>
				<p className="my-4 text-center fs-5">Want to ask questions, recommend new product ideas, or want to start a franchise? Contact us now and our team will be happy to assist you.</p>

				<Form className="contact-form m-auto">
					<Form.Group className="mb-3" controlId="controlFullName">
						<Form.Label className="fw-bold">Full Name</Form.Label>
						<Form.Control type="text" placeholder="Full Name" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="controlEmail">
						<Form.Label className="fw-bold">Email Address</Form.Label>
						<Form.Control type="email" placeholder="name@example.com" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="controlPhone">
						<Form.Label className="fw-bold">Phone Number</Form.Label>
						<Form.Control type="number" placeholder="555555555" min="10" max="10" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="controlMessage">
						<Form.Label className="fw-bold">Message</Form.Label>
						<Form.Control as="textarea" placeholder="Leave a comment here" className="contact-textarea-control" />
					</Form.Group>
					<div className="text-center my-4">
						<Button variant="warning" type="submit" className="w-100">
							Submit
						</Button>
					</div>
				</Form>
			</Container>
		</div>
	);
};
export default Contact;
