/* eslint-disable react-refresh/only-export-components */
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useMobileScreen } from "../hooks/useMobileScreen";

let techs = null;

const Tech = () => {
	const isMobile = useMobileScreen();

	if (isMobile) {
		techs = technologies.map((tech) => (
			<div key={tech.name} className="hexagon black-gradient" id="hexagon">
				<img
					draggable={false}
					className="z-10 absolute w-[90px] h-[90px] object-contain"
					src={tech.icon}
					alt={tech.name}
				/>
			</div>
		));
	} else {
		techs = technologies.map((technology) => (
			<div className="w-28 h-28" key={technology.name}>
				<BallCanvas icon={technology.icon} />
			</div>
		));
	}

	return (
		<div
			className={`flex flex-row flex-wrap justify-center ${
				isMobile ? "gap-x-20 gap-y-10" : "gap-7"
			} `}
		>
			{/* {} */}

			{techs}
		</div>
	);
};

export default SectionWrapper(Tech, "tech");
