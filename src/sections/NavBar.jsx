import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import logo from "../assets/images/jmacro.dev.png";

const navLinks = ["about", "projects", "socials"];

const NavBar = () => {
	return (
		<Box sx={{ display: "flex" }}>
			<AppBar component="nav" style={{ backgroundColor: "white" }}>
				<Toolbar>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1 }}
					>
						<img
							src={logo}
							alt="jmacro-dev-logo"
							style={{ maxHeight: "5rem" }}
						/>
					</Typography>
					<Box sx={{ display: { xs: "none", sm: "block" } }}>
						{navLinks.map((link) => (
							<Button key={link} className="nav-link">
								{link}
							</Button>
						))}
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default NavBar;
