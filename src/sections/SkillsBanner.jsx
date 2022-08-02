import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

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

const SkillsBanner = () => {
	return (
		<Box
			sx={{
				display: "flex",
				"& > :not(style)": {
					width: "100%",
					height: "auto",
					zIndex: 1,
					boxShadow: "none",
					marginTop: "2rem",
					overflow: "hidden",
					padding: "3rem",
					backgroundColor: "rgb(0,0,0,0.8)",
				},
			}}
		>
			<Paper square={true}>
				<img src={react} alt="react-logo" height="50" />
				<img src={ts} alt="ts-logo" height="50" />
				<img src={js} alt="js-logo" height="50" />
				<img src={electron} alt="electron-logo" height="50" />
				<img src={node} alt="node-logo" height="50" />
				<img src={powershell} alt="powershell-logo" height="50" />
				<img src={sap} alt="sap-logo" height="50" />
				<img src={sass} alt="sass-logo" height="50" />
				<img src={webpack} alt="webpack-logo" height="50" />
				<img src={babel} alt="babel-logo" height="50" />
				<img src={html} alt="html-logo" height="50" />
				<img src={css} alt="css-logo" height="50" />
				<img src={sql} alt="sql-logo" height="50" />
			</Paper>
		</Box>
	);
};

export default SkillsBanner;
