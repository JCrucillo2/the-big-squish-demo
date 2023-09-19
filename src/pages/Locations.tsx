import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Locations = () => {
	return (
		<div>
			<Container className="my-4 text-center">
				<div>
					<h2 className="my-4">Locations</h2>
					<p className="fs-5 my-4">Here are some of our current locations and store hours.</p>
				</div>

				<Row>
					<Col>
						<h3>Downtown</h3>
						<div className="fs-6">
							<p className="m-0 fw-bold">Monday</p>
							<p>2:00 p.m - 8:00 p.m.</p>
						</div>
						<div className="fs-6">
							<p className="m-0 fw-bold">Tuesday</p>
							<p>1:00 p.m - 10:00 p.m.</p>
						</div>
						<div className="fs-6">
							<p className="m-0 fw-bold">Wednesday</p>
							<p>1:00 p.m - 10:00 p.m.</p>
						</div>
						<div className="fs-6">
							<p className="m-0 fw-bold">Thursday</p>
							<p>1:00 p.m - 10:00 p.m.</p>
						</div>
						<div className="fs-6">
							<p className="m-0 fw-bold">Friday</p>
							<p>1:00 p.m - 10:00 p.m.</p>
						</div>
						<div className="fs-6">
							<p className="m-0 fw-bold">Saturday</p>
							<p>1:00 p.m - 10:00 p.m.</p>
						</div>
						<div className="fs-6">
							<p className="m-0 fw-bold">Sunday</p>
							<p>2:00 p.m - 8:00 p.m.</p>
						</div>
					</Col>

					<Col>
						<h3>Bonnie Doon</h3>
						<div className="fs-6">
							<p className="m-0 fw-bold">Monday</p>
							<p>10:00 a.m - 6:00 p.m.</p>
						</div>
						<div className="fs-6">
							<p className="m-0 fw-bold">Tuesday</p>
							<p>10:00 a.m - 6:00 p.m.</p>
						</div>
						<div className="fs-6">
							<p className="m-0 fw-bold">Wednesday</p>
							<p>10:00 a.m - 6:00 p.m.</p>
						</div>
						<div className="fs-6">
							<p className="m-0 fw-bold">Thursday</p>
							<p>10:00 a.m - 8:00 p.m.</p>
						</div>
						<div className="fs-6">
							<p className="m-0 fw-bold">Friday</p>
							<p>10:00 a.m - 8:00 p.m.</p>
						</div>
						<div className="fs-6">
							<p className="m-0 fw-bold">Saturday</p>
							<p>10:00 a.m - 5:00 p.m.</p>
						</div>
						<div className="fs-6">
							<p className="m-0 fw-bold">Saturday</p>
							<p>12:00 p.m - 5:00 p.m.</p>
						</div>
					</Col>

					<Col>
						<h3>Sherwood Park</h3>
						<div className="fs-6">
							<p className="m-0 fw-bold">Monday</p>
							<p>10:00 a.m - 8:00 p.m.</p>
						</div>
						<div className="fs-6">
							<p className="m-0 fw-bold">Tuesday</p>
							<p>10:00 a.m - 8:00 p.m.</p>
						</div>
						<div className="fs-6">
							<p className="m-0 fw-bold">Wednesday</p>
							<p>10:00 a.m - 8:00 p.m.</p>
						</div>
						<div className="fs-6">
							<p className="m-0 fw-bold">Thursday</p>
							<p>10:00 a.m - 8:00 p.m.</p>
						</div>
						<div className="fs-6">
							<p className="m-0 fw-bold">Friday</p>
							<p>10:00 a.m - 8:00 p.m.</p>
						</div>
						<div className="fs-6">
							<p className="m-0 fw-bold">Saturday</p>
							<p>10:00 a.m - 6:00 p.m.</p>
						</div>
						<div className="fs-6">
							<p className="m-0 fw-bold">Saturday</p>
							<p>11:00 a.m - 5:00 p.m.</p>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
export default Locations;
