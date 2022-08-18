import { useState } from "react";
import MediaQuery from "react-responsive";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import react from "../assets/images/react-png.png";
import ts from "../assets/images/ts-png.png";
import sass from "../assets/images/sass-png.png";
import webpack from "../assets/images/webpack-png.png";
import babel from "../assets/images/babel-png.png";
import mysql from "../assets/images/mysql-png.png";
import heroku from "../assets/images/heroku-png.png";

import CPMobile from "../assets/images/crypto-pairs-mobile.png";
import CPDesktop from "../assets/images/crypto-pairs-desktop.png";

import eigoMobile from "../assets/images/eigo-mobile.png";
import eigoDesktop from "../assets/images/eigo-desktop.png";

import WebIcon from "@mui/icons-material/Web";
import GitHubIcon from "@mui/icons-material/GitHub";

const Projects = () => {
	const [expanded, setExpanded] = useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<Box id="projects">
			<Grid container className="section--intro">
				<Grid className="z1" item style={{ width: "100%" }}>
					<Paper
						className="z1 b-sh-0"
						square={true}
						style={{
							height: "100%",
							padding: "2rem",
							paddingBottom: 0,
						}}
					>
						<Typography
							variant="h4"
							style={{
								fontFamily: "Exo",
								fontStyle: "italic",
								marginBottom: "2rem",
							}}
							sx={{
								margin: "auto",
								width: {
									lg: "75%",
									xl: "50%"
								}
							}}
						>
							Projects
						</Typography>
						{projects.map((p, i) => (
							<Accordion
								key={i}
								expanded={expanded === p.name}
								onChange={handleChange(p.name)}
								sx={{
									margin: "auto!important",
									width: {
										lg: "75%",
										xl: "50%"
									}
								}}
							>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls={`${p.name}-content`}
									id={`${p.name}-header`}
								>
									<Typography
										variant="h5"
										sx={{
											width: ["100%", "33%"],
											flexShrink: 0,
											fontFamily: "Exo",
										}}
									>
										{p.name}
									</Typography>
									<Typography>
										<MediaQuery minWidth={600}>
											{p.tech.map((t, i) => (
												<img
													key={i}
													src={t.img}
													alt={t.name}
													style={{ height: "2rem" }}
												></img>
											))}
										</MediaQuery>
									</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<MediaQuery maxWidth={600}>
										{p.tech.map((t, i) => (
											<img
												key={i}
												src={t.img}
												alt={t.name}
												style={{
													height: "1.5rem",
													marginBottom: "1rem",
												}}
											></img>
										))}
									</MediaQuery>
									<Typography
										style={{
											fontFamily: "Exo",
											marginBottom: "2rem",
										}}
									>
										{p.desc}
									</Typography>
									<Grid item style={{ marginBottom: "2rem" }}>
										<MediaQuery maxWidth={600}>
											<img
												src={p.img.mob}
												alt=""
												style={{
													display: "block",
													margin: "auto",
													height: "auto",
													maxHeight: "40rem",
													width: "auto",
													maxWidth: "100%",
													boxShadow:
														"0px 0px 17px -3px rgba(0,0,0,0.75)",
												}}
											/>
										</MediaQuery>
										<MediaQuery minWidth={600}>
											<img
												src={p.img.desk}
												alt=""
												style={{
													display: "block",
													margin: "auto",
													height: "auto",
													maxHeight: "30rem",
													width: "auto",
													maxWidth: "100%",
													boxShadow:
														"0px 0px 17px -3px rgba(0,0,0,0.75)",
												}}
											/>
										</MediaQuery>
									</Grid>
									<Typography
										style={{
											fontFamily: "Exo",
											marginBottom: "1rem",
										}}
									>
										<Button
											href={p.live}
											target="_blank"
											variant="ghost"
											startIcon={<WebIcon />}
										>
											Live Version
										</Button>
									</Typography>
									<Typography
										style={{
											fontFamily: "Exo",
											marginBottom: "2rem",
										}}
									>
										<Button
											href={p.repo}
											target="_blank"
											variant="ghost"
											startIcon={<GitHubIcon />}
										>
											Repo
										</Button>
									</Typography>
								</AccordionDetails>
							</Accordion>
						))}
					</Paper>
				</Grid>
			</Grid>
		</Box>
	);
};

// techname with image url.
const t = {
	react: { name: "react", img: react },
	webpack: { name: "webpack", img: webpack },
	babel: { name: "babel", img: babel },
	sass: { name: "sass", img: sass },
	ts: { name: "typescript", img: ts },
	mysql: { name: "mysql", img: mysql },
	heroku: { name: "heroku", img: heroku },
};

const projects = [
	{
		name: "Crypto Pairs",
		tech: [t.react, t.webpack, t.babel, t.sass],
		desc: "A progressive web app that let's user check crypto pair values. Installable to homescreen, this app is built without create-react-app and instead configured webpack manually, with babel for compatibility with older browsers, and plugins to bundle static assets.",
		img: {
			mob: CPMobile,
			desk: CPDesktop,
		},
		live: "https://jmacr0.github.io/crypto-pairs/",
		repo: "https://github.com/Jmacr0/crypto-pairs",
	},
	{
		name: "Eigo",
		tech: [t.react, t.ts, t.sass, t.mysql, t.heroku],
		desc: "A Japanese learning progressive web app with activities to facilitate understanding.",
		img: {
			mob: eigoMobile,
			desk: eigoDesktop,
		},
		live: "https://eigo-japanese-app.herokuapp.com/",
		repo: "https://github.com/Jmacr0/eigo",
	},
];

export default Projects;
