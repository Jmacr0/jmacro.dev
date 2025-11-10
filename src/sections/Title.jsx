import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./styles/title.css";

const Title = () => {
	return (
		<Box
			sx={{
				display: "flex",
				"& > :not(style)": {
					width: "100%",
					zIndex: 1,
					marginTop: "2rem",
					overflow: "hidden",
					padding: "3rem",
					// background: "linear-gradient(#e66465, #9198e5)",
				},
			}}
		>
			<Grid container className="section--title">
				<Grid item className="z1">
					<h1 style={{
							fontFamily: "Exo",
							fontWeight: "500",
							fontStyle: "italic",
							fontSize: "3rem",
							color: "white"
						}}>Jon Macrohon</h1>
					<hr style={{ border: "2px solid white" }} />
					<h1 style={{
							fontFamily: "Exo",
							fontWeight: "bold",
							fontSize: "3rem",
							color: "white"
						}}>Software Developer</h1>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Title;