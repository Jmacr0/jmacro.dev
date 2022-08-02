import Intro from "./sections/Intro";
import SkillsBanner from "./sections/SkillsBanner";
import ParticlesBG from "./Particles";
import Title from "./sections/Title";
import NavBar from "./sections/NavBar";

import "./app.css";
import Projects from "./sections/Projects";
import Socials from "./sections/Socials";

const App = () => {
	return (
		<>
			<ParticlesBG />
			<NavBar />
			<Title />
			<Intro />
			<SkillsBanner />
			<Projects />
			<Socials />
		</>
	);
};

export default App;
