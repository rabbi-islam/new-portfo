import PropTypes from "prop-types";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import Socials from "./Socials";

// eslint-disable-next-line react-refresh/only-export-components
const ServiceCard = ({ index, title, icon }) => (
	<Tilt
		options={{
			max: 45,
			scale: 1,
			speed: 450,
		}}
		className="xs:w-[250px] w-full transition-all"
	>
		<motion.div
			variants={fadeIn("right", "spring", index * 0.5, 0.75)}
			className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
		>
			<div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
				<img src={icon} alt="web-development" className="w-16 h-16 object-contain" />

				<h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
			</div>
		</motion.div>
	</Tilt>
);

ServiceCard.propTypes = {
	index: PropTypes.number,
	title: PropTypes.string,
	icon: PropTypes.any,
};

// eslint-disable-next-line react-refresh/only-export-components
const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>

			<motion.p
				className="text-secondary text-[17px] max-w-3xl mt-4 leading-[30px]"
				variants={fadeIn("", "", 0.1, 1)}
			>
				I&apos;m a Full Stack Native Android App Developer. I am working in this sector almost 3+ year. I used Kotlin as my Programming language for frontend and Node and Express JS for backend. I have done lot of project using those technology and also done some remote projects in my spare time, tackling challenging problems and crafting seamless mobile experiences.
			    <br className="sm:block hidden" />
                My goal is to bring your vision to life through creative solutions and clean design, ensuring that your app delivers a top-notch user experience while reflecting your brand's identity.
			</motion.p>

			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard key={index} {...service} />
				))}
			</div>

			<Socials />
		</>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(About, "about");
