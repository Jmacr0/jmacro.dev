import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

import "./styles/services.css";
import reactImage from "../assets/images/react-png.png";
import nodeImage from "../assets/images/node-png.png";
import mongoImage from "../assets/images/mongodb-png.png";
import mysqlImage from "../assets/images/mysql-png.png";
import postgresqlImage from "../assets/images/postgresql-svg.svg";
import herokuImage from "../assets/images/heroku-png.png";
import awsImage from "../assets/images/aws.svg";

const services = [
	{
		name: "Web Applications",
		desc: "We specialize in creating modern, fast, and scalable web applications using technologies like React, Node.js, and TypeScript. Our solutions are tailored to your needs, ensuring a responsive and seamless user experience.",
		images: [reactImage, nodeImage],
	},
	{
		name: "Server and Database",
		desc: "We offer robust server-side solutions and database management. Whether you need a relational database like PostgreSQL or MySQL, or a NoSQL solution like MongoDB, we've got you covered.",
		images: [mongoImage, mysqlImage, postgresqlImage],
	},
	{
		name: "Cloud Hosting",
		desc: "We can deploy and manage your application on various cloud platforms, including AWS and Heroku, ensuring high availability and scalability.",
		images: [herokuImage, awsImage],
	},
];

const Services = () => {
	return (
		<Box
			id="services"
			sx={{
				padding: "2rem",
				position: "relative",
				zIndex: 1,
				backgroundColor: "#00000000",
			}}
		>
			<Grid
				container
				className="section--intro"
				sx={{
					gap: "1rem",
					justifyContent: "center",
					backgroundColor: "#00000000",
				}}
			>
				<Typography
					variant="h4"
					sx={{
						width: "100%",
						textAlign: "center",
						fontFamily: "Exo",
						fontStyle: "italic",
						marginBottom: "2rem",
						paddingTop: "2rem",
						color: "white",
					}}
				>
					Services
				</Typography>
				{services.map((service, index) => (
					<Grid item xs={12} sm={8} md={8} lg={3} key={index}>
						<Card
							sx={{
								height: "100%",
								backgroundColor: "white",
							}}
						>
							<CardContent>
								<Typography
									variant="h6"
									sx={{
										fontFamily: "Exo",
										color: "black",
									}}
								>
									{service.name}
								</Typography>
								<Typography
									variant="body1"
									sx={{
										fontFamily: "Exo",
										color: "black",
									}}
								>
									{service.desc}
								</Typography>
								<Box sx={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
									{service.images.map((image, i) => (
										<img
											key={i}
											src={image}
											alt={service.name}
											style={{
												width: "50px",
												height: "50px",
												objectFit: "contain",
											}}
										/>
									))}
								</Box>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default Services;
