/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { textVariant, fadeIn } from "./../utils/motion";
import { github, play } from "../assets";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_link }) => {
	return (
		<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
			<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full transition-all group"
			>
				<div className="relative w-full h-[230px]">
					<img
						src={image}
						alt="project_image"
						className="w-full h-full object-cover rounded-2xl"
					/>

					<div className="absolute inset-0 flex justify-end m-3 card-img_hover">
						<div
							onClick={() => window.open(source_code_link, "_blank")}
							className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
						>
							<img
								src={github}
								alt="source code"
								className="w-1/2 h-1/2 object-contain shadow"
							/>
						</div>
					</div>

					<div className="absolute inset-0 top-12 flex justify-end m-3 card-img_hover opacity-100 sm:opacity-0 transition-all sm:group-hover:opacity-100">
						<div
							onClick={() => window.open(live_link, "_blank")}
							className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
						>
							<img
								src={play}
								alt="source code"
								className="w-[35%] h-[35%] object-contain"
							/>
						</div>
					</div>
				</div>

				<div className="mt-5">
					<h3 className="text-white font-bold text-[24px]">{name}</h3>
					<p className="mt-2 text-secondary text-[14px]">{description}</p>
				</div>

				<div className="mt-4 flex flex-wrap gap-2">
					{tags.map((tag) => (
						<p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
							#{tag.name}
						</p>
					))}
				</div>
			</Tilt>
		</motion.div>
	);
};

ProjectCard.propTypes = {
	index: PropTypes.number,
	name: PropTypes.string,
	description: PropTypes.string,
	tags: PropTypes.array,
	image: PropTypes.string,
	source_code_link: PropTypes.string,
	live_link: PropTypes.string,
};

const Works = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>My Work</p>
				<h2 className={styles.sectionHeadText}>Projects.</h2>
			</motion.div>

			<div className="w-full flex">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="leading-[30px] mt-3 text-secondary text-[17px] max-w-3xl"
				>
					Following projects showcases my skills and experience through real-world
					examples of my work. Each project is briefly described with links to code
					repositories and live demos in it. It reflects my ability to solve complex
					problems, work with different technologies, and manage projects effectively.
				</motion.p>
			</div>

			<div className="mt-20 flex flex-wrap gap-7">
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} index={index} {...project} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Works, "work");
