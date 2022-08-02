import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
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
					<Typography
						variant="h3"
						style={{
							fontFamily: "Exo",
							fontWeight: "500",
							fontStyle: "italic",
						}}
					>
						Jon Macrohon
					</Typography>
					<hr style={{ border: "2px solid white" }} />
					<Typography
						variant="h3"
						style={{ fontFamily: "Exo", fontWeight: "bold" }}
					>
						Software Developer
					</Typography>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Title;
