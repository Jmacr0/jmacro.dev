import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const navLinks = ["about", "services", "socials"];

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
						<RouterLink to="/">
							<img
								src={logo}
								alt="jmacro-dev-logo"
								style={{ maxHeight: "5rem" }}
							/>
						</RouterLink>
					</Typography>
					<Box sx={{ display: { xs: "none", sm: "block" } }}>
						{navLinks.map((link) => (
							<ScrollLink
								key={link}
								to={link}
								smooth={true}
								duration={500}
								className="nav-link"
							>
								<Button className="nav-link">{link}</Button>
							</ScrollLink>
						))}
						<RouterLink to="/archive" className="nav-link">
							<Button className="nav-link">Archive</Button>
						</RouterLink>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default NavBar;
