import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useMobileScreen } from "../hooks/useMobileScreen";

const Hero = () => {
	const isMobile = useMobileScreen();

	return (
		<section className="relative w-full h-screen mx-auto overflow-x-hidden">
			<div
				className={`${styles.paddingX} inset-0 absolute top-[70px] max-w-7xl mx-auto items-start justify-center flex gap-5`}
			>
				<div className="flex flex-col justify-center items-center mt-5">
					<motion.div
						animate={{ y: [0, 160, 0] }}
						transition={{ duration: 20, repeat: Infinity, repeatType: "loop" }}
						className="bg-[#915eff] w-5 h-5 rounded-full"
					/>
					<div className="w-1 sm:h-[290px] h-40 violet-gradient" />
				</div>

				<div className={`${isMobile ? "mt-12" : ""}`}>
					<h2 className={`${styles.heroHeadText} text-white`}>
						Hi, I&apos;m <span className="text-[#914eff]">Rabbi</span>{" "}
					</h2>

					<p className={`${styles.heroSubText} text-white-100`}>
						I&apos;m a Full Stack Native Android App Developer.{" "}
						<br className="sm:block hidden" /> I use Kotlin and Node JS for my app developement project.
					</p>
				</div>
			</div>

			{!isMobile ? (
				<ComputersCanvas />
			) : (
				<div className="w-full">
					<img
						draggable={false}
						className="absolute bottom-[120px] scale-[1.18] inline-block"
						src="/desktop_pc/fallback-desktop.png"
						alt="my-desktop"
					/>
				</div>
			)}

			<div className="absolute xs:bottom-11 bottom-32 w-full flex items-center justify-center">
				<a href="#about">
					<div className="w-[30px] h-[50px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
						<motion.div
							className="w-2.5 h-2.5 rounded-full mb-1 bg-secondary"
							animate={{ y: [0, 24, 0] }}
							transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
