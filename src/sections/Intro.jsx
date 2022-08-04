import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Avatar from "@mui/material/Avatar";
import profile from "../assets/images/me-boat.jpg";

import Typography from "@mui/material/Typography";

import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

import "./styles/intro.css";

const Intro = () => {
	return (
		<Box id="about">
			<Grid container className="section--intro">
				<Grid className="z1" item sm={6} style={{ width: "100%" }}>
					<Paper
						className="z1 b-sh-0"
						square={true}
						style={{
							height: "100%",
							padding: "2rem",
							paddingBottom: 0,
						}}
					>
						<Avatar
							src={profile}
							alt="Jon Macrohon"
							sx={{
								width: "10rem",
								height: "10rem",
								margin: "auto",
								marginBottom: "2rem",
							}}
						/>
						<Typography variant="h4" style={{ fontFamily: "Exo" }}>
							Jon
						</Typography>
						<Typography
							variant="body1"
							style={{ fontFamily: "Exo" }}
						>
							<i>Software Developer</i> providing{" "}
							<b>web & software solutions.</b>
						</Typography>
					</Paper>
				</Grid>
				<Grid className="z1" item sm={6} style={{ width: "100%" }}>
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
							fontStyle="italic"
							fontWeight="bold"
							style={{
								fontFamily: "Exo",
								fontWeight: 400,
								color: "steelblue",
							}}
						>
							Solutions
						</Typography>
						<List dense={true}>
							{solutions.map((bullet, index) => (
								<ListItem key={index}>
									<ListItemIcon>
										<DoubleArrowIcon
											sx={{ color: "purple" }}
										/>
									</ListItemIcon>
									<ListItemText
										primary={bullet}
										primaryTypographyProps={{
											variant: "h6",
											fontFamily: "Exo",
										}}
										secondary={null}
									/>
								</ListItem>
							))}
						</List>
					</Paper>
				</Grid>
			</Grid>
		</Box>
	);
};

const solutions = [
	"Web Applications.",
	"RESTful API.",
	"Node server.",
	"Native Desktop Apps.",
	"Automation scripts.",
];

export default Intro;
