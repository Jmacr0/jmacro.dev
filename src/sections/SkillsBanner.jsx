import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import "./styles/skills-banner.css";

import react from "../assets/images/react-png.png";
import ts from "../assets/images/ts-png.png";
import js from "../assets/images/js-png.png";
import electron from "../assets/images/electron-svg.svg";
import node from "../assets/images/node-png.png";
import powershell from "../assets/images/powershell-png.png";
import sqlanywhere from "../assets/images/sql-anywhere-png.png";
import sass from "../assets/images/sass-png.png";
import webpack from "../assets/images/webpack-png.png";
import babel from "../assets/images/babel-png.png";
import html from "../assets/images/html-png.png";
import css from "../assets/images/css-png.png";
import sql from "../assets/images/sql-png.png";
import heroku from "../assets/images/heroku-png.png";
import sequelize from "../assets/images/sequelize-png.png";
import mysql from "../assets/images/mysql-png.png";
import mongodb from "../assets/images/mongodb-png.png";
import mui from "../assets/images/mui-png.png";
import postgresql from "../assets/images/postgresql-svg.svg";

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
			<Paper square={true} className="skills-banner">
				<img src={react} alt="react-logo" className="skill-image" />
				<img src={ts} alt="ts-logo" className="skill-image" />
				<img src={js} alt="js-logo" className="skill-image" />
				<img
					src={electron}
					alt="electron-logo"
					className="skill-image"
				/>
				<img src={node} alt="node-logo" className="skill-image" />
				<img
					src={powershell}
					alt="powershell-logo"
					className="skill-image"
				/>
				<img
					src={sqlanywhere}
					alt="sql-anywhere-logo"
					className="skill-image"
				/>
				<img src={sass} alt="sass-logo" className="skill-image" />
				<img src={webpack} alt="webpack-logo" className="skill-image" />
				<img src={babel} alt="babel-logo" className="skill-image" />
				<img src={html} alt="html-logo" className="skill-image" />
				<img src={css} alt="css-logo" className="skill-image" />
				<img src={sql} alt="sql-logo" className="skill-image" />
				<img src={heroku} alt="heroku-logo" className="skill-image" />
				<img
					src={sequelize}
					alt="sequelize-logo"
					className="skill-image"
				/>
				<img src={mysql} alt="mysql-logo" className="skill-image" />
				<img
					src={postgresql}
					alt="postgresql-logo"
					className="skill-image"
				/>
				<img src={mongodb} alt="mongodb-logo" className="skill-image" />
				<img src={mui} alt="mui-logo" className="skill-image" />
			</Paper>
		</Box>
	);
};

export default SkillsBanner;
