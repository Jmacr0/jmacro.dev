import { useState } from "react";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Grid from "@mui/material/Grid";

import IconButton from "@mui/material/IconButton";

import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Socials = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		if (!navigator.clipboard) {
			return;
		}
		navigator.clipboard.writeText("jonmacrohon@gmail.com").then(
			function () {
				setOpen(true);
			},
			function (err) {
				console.error("Async: Could not copy text: ", err);
			}
		);
	};

	const handleClose = (_event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpen(false);
	};

	return (
		<Box
			id="socials"
			sx={{
				display: "flex",
				"& > :not(style)": {
					width: "100%",
					height: "auto",
					minHeight: "10rem",
					zIndex: 1,
					boxShadow: "none",
					marginTop: "2rem",
					padding: "2rem",
					paddingTop: "4rem",
					overflow: "hidden",
					backgroundColor: "rgb(0,0,0,0.8)",
				},
			}}
		>
			<Paper square={true}>
				<Typography
					variant="h5"
					textAlign="center"
					style={{
						fontFamily: "Exo",
						fontWeight: "500",
						fontStyle: "italic",
						color: "white",
						marginBottom: "2rem",
					}}
				>
					For inquiries contact:{" "}
					<b>
						<span
							style={{
								cursor: "pointer",
							}}
							onClick={handleClick}
						>
							&nbsp;jonmacrohon@gmail.com
						</span>
					</b>
				</Typography>
				<Snackbar
					open={open}
					autoHideDuration={4000}
					onClose={handleClose}
					action={
						<>
							<IconButton
								size="small"
								aria-label="close"
								color="inherit"
								onClick={handleClose}
							>
								<CloseIcon fontSize="small" />
							</IconButton>
						</>
					}
				>
					<Alert
						onClose={handleClose}
						severity="success"
						sx={{ width: "100%" }}
					>
						Copied email to clipboard!
					</Alert>
				</Snackbar>
				<Grid container paddingBottom="4rem">
					<Grid item margin="auto">
						<IconButton
							onClick={() => {
								window.open("https://github.com/Jmacr0");
							}}
						>
							<GitHubIcon
								sx={{ fontSize: "5rem", color: "#f5f5f5" }}
							/>
						</IconButton>
						<IconButton
							onClick={() => {
								window.open(
									"https://www.linkedin.com/in/jmacro/"
								);
							}}
						>
							<LinkedInIcon
								sx={{ fontSize: "5rem", color: "#0077b5" }}
							/>
						</IconButton>
						<IconButton
							onClick={() => {
								window.open(
									"https://www.youtube.com/channel/UCkAXm8sPqgtuRpxZpdxP9MA"
								);
							}}
						>
							<YouTubeIcon
								sx={{ fontSize: "5rem", color: "#ff0000" }}
							/>
						</IconButton>
					</Grid>
				</Grid>
			</Paper>
		</Box>
	);
};

export default Socials;
