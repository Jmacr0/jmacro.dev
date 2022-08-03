import { useState } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import react from "../assets/images/react-png.png";
import ts from "../assets/images/ts-png.png";
import js from "../assets/images/js-png.png";
import electron from "../assets/images/electron-svg.svg";
import node from "../assets/images/node-png.png";
import powershell from "../assets/images/powershell-png.png";
import sap from "../assets/images/sap-png.png";
import sass from "../assets/images/sass-png.png";
import webpack from "../assets/images/webpack-png.png";
import babel from "../assets/images/babel-png.png";
import html from "../assets/images/html-png.png";
import css from "../assets/images/css-png.png";
import sql from "../assets/images/sql-png.png";

const Projects = () => {
	const [expanded, setExpanded] = useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<Box>
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
						>
							Projects
						</Typography>
						{projects.map((p, i) => (
							<Accordion
								expanded={expanded === p.name}
								onChange={handleChange(p.name)}
							>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls={`${p.name}-content`}
									id={`${p.name}-header`}
								>
									<Typography
										variant="h5"
										sx={{
											width: "33%",
											flexShrink: 0,
											fontFamily: "Exo",
										}}
									>
										{p.name}
									</Typography>
									<Typography
										sx={{ color: "text.secondary" }}
									>
										{p.tech.map((t, i) => (
											<img
												src={t.img}
												alt={t.name}
												style={{ height: "2rem" }}
											></img>
										))}
									</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography style={{ fontFamily: "Exo" }}>
										{p.desc}
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
};

const projects = [
	{
		name: "Crypto Pairs",
		tech: [t.react, t.webpack, t.babel, t.sass],
		desc: "A progressive web app that let's user check crypto pair values. Installable to homescreen, this app is built without create-react-app and instead configured webpack manually, with babel for compatibility with older browsers, and plugins to bundle static assets.",
	},
	{
		name: "Eigo",
		tech: [t.react, t.ts, t.sass],
		desc: "A Japanese learning progressive web app with activities to facilitate understanding.",
	},
];

export default Projects;
