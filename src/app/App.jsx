import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import {
	About,
	Navbar,
	Contact,
	Experience,
	Feedbacks,
	StarsCanvas,
	Hero,
	Tech,
	Works,
} from "./../components";
import Education from "../components/Education";

const App = () => {
	return (
		<BrowserRouter>
			<div className="bg-primary z-0 relative">
				<div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
					<Navbar />
					<Hero />
				</div>
				<About />
				<Education />
				<Experience />
				<Tech />
				<Works />
				<Feedbacks />
				<div className="relative z-0">
					<Contact />
					<StarsCanvas />
				</div>
			</div>

			{/* toaster container */}
			<Toaster richColors position="top-right" />
		</BrowserRouter>
	);
};

export default App;
