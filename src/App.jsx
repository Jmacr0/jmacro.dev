import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Intro from "./sections/Intro";
import SkillsBanner from "./sections/SkillsBanner";
import ParticlesBG from "./Particles";
import Title from "./sections/Title";
import NavBar from "./sections/NavBar";
import Archive from "./sections/Archive";
import Services from "./sections/Services";

import "./app.css";
import Socials from "./sections/Socials";

const Home = () => (
	<>
		<Title />
		<Intro />
		<Services />
		<SkillsBanner />
		<Socials />
	</>
);

const App = () => {
	return (
		<Router>
			<ParticlesBG />
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/archive" element={<Archive />} />
			</Routes>
		</Router>
	);
};

export default App;
