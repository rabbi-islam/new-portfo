import { educations } from "../constants";
import { motion } from "framer-motion";



export default function Education() {
	return (
		<section
			id="education"
			className="py-16 bg-gray-900"
		>
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="space-y-8">
						{educations.slice(0, 2).map((education, index) => (
							<motion.div
								initial={{ opacity: 0, y: -150 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: (index + 1) * 0.5 }}
								key={index}
								className="bg-gray-800 shadow-lg rounded-lg p-6"
							>
								<div className="text-gray-200">
									<span className="inline-block px-2.5 text-sm py-1 bg-blue-600 rounded-lg">{education.timeSpan}</span>
								</div>
								<div className="text-2xl font-semibold  text-gray-200 mt-3">
									{education.title}
								</div>
								<div className="text-md  text-blue-600 my-2">
									{education.institute}
								</div>
								<div className="text-sm text-gray-400">
									{education.description}
								</div>
							</motion.div>
						))}
					</div>
					<div className="space-y-8">
						{educations.slice(2).map((education, index) => (
							<motion.div
								initial={{ opacity: 0, y: -150 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: (index + 1) * 1.2 }}
								key={index}
								className=" bg-gray-800 shadow-lg rounded-lg p-6"
							>
								<div className="text-gray-200">
									<span className="inline-block px-2.5 text-sm py-1 bg-blue-600 rounded-lg">{education.timeSpan}</span>
								</div>
								<div className="text-2xl font-semibold  text-gray-200 mt-3">
									{education.title}
								</div>
								<div className="text-md  text-blue-600 my-2">
									{education.institute}
								</div>
								<div className="text-sm text-gray-400">
									{education.description}
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}