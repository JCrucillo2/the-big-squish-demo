import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

const Appbar = () => {
	return (
		<>
			<Navbar collapseOnSelect expand="md" bg="dark" data-bs-theme="dark">
				<Container>
					<Navbar.Brand href="/">The Big Squish</Navbar.Brand>
					<Navbar.Toggle aria-controls="main-menu" />
					<Navbar.Collapse id="main-menu">
						<Nav className="ms-auto">
							<Nav.Item>
								<NavLink className="nav-link" to="/">
									Home
								</NavLink>
							</Nav.Item>
							<Nav.Item>
								<NavLink className="nav-link" to="items">
									Items
								</NavLink>
							</Nav.Item>
							<Nav.Item>
								<NavLink className="nav-link" to="about">
									About
								</NavLink>
							</Nav.Item>
							<Nav.Item>
								<NavLink className="nav-link" to="contact">
									Contact
								</NavLink>
							</Nav.Item>
							<Nav.Item>
								<NavLink className="nav-link" to="locations">
									Locations
								</NavLink>
							</Nav.Item>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};
export default Appbar;
