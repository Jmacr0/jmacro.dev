import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import logo from "../assets/images/jmacro.dev.png";
import { Link } from "react-router-dom";

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
						<Link to="/">
							<img
								src={logo}
								alt="jmacro-dev-logo"
								style={{ maxHeight: "5rem" }}
							/>
						</Link>
					</Typography>
					<Box sx={{ display: { xs: "none", sm: "block" } }}>
						{navLinks.map((link) => (
							<Link
								key={link}
								to={`/#${link}`}
								className="nav-link"
							>
								<Button className="nav-link">{link}</Button>
							</Link>
						))}
						<Link to="/archive" className="nav-link">
							<Button className="nav-link">Archive</Button>
						</Link>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default NavBar;
