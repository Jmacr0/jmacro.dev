import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Projects = () => {
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
						PROJECTS HERE
					</Paper>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Projects;
