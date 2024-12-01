import {
	backend,
	creator,
	mobile,
	web,
	git,
	android,
	kotlin,
	androidStudio,
	ktor,
	firebase,
	materialUi,
	jetpackCompose,
	xml,
	java,
	mysql,
	mongodb,
	nodejs,
	express,
	tecognize,
	sansmo,
	shopper,
	mediaid,
	titan,
	admin,
	coffee,
	eCom,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "education",
		title: "Education",
	},
	{
		id: "work",
		title: "Project",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

export const educations = [
	{
		title: "Science",
		institute: "Ruppur High School",
		timeSpan: "2012 - 2017",
		description:
			"Ruppur High School is an educational establishment that is located at Ruppur, Pabna Sadar. Its Educational Institute Identification Number or EIIN, is 125611. On 01 January, 1998",
	},
	{
		title: "Science",
		institute: "Ishurdi Govt. College",
		timeSpan: "2015 - 2017",
		description:
			"Established in 1963, Ishwardi Government College (EIIN 125552), nationalized in 1986, today ranks as the second largest government college in Pabna district with a streak of success.",
	},
	{
		title: "FSIT",
		institute: "Daffodil International University",
		timeSpan: "2020 - 2024",
		description:
			"Being established in 2002, Daffodil International University has become a prominent private university in Bangladesh, fostering education and innovation for more than 20000 students.",
	},
];

const socialLinks = [
	{
		id: "gmail",
		title: "Gmail",
		link: "mailto:rabbiislam2823@gmail.com?subject=About work",
		icon: "/social/gmail.svg",
	},
	{
		id: "github",
		title: "Github",
		link: "https://github.com/rabbi-islam",
		icon: "/social/github.svg",
	},
	{
		id: "linked-in",
		title: "Linked In",
		link: "https://www.linkedin.com/in/rabbiislam-r3123/",
		icon: "/social/linkedin.svg",
	},

	{
		id: "facebook",
		title: "Facebook",
		link: "https://www.facebook.com/ProgrammerRabbiIslam/",
		icon: "/social/facebook.svg",
	},
];

const services = [
	{
		title: "App Developer",
		icon: web,
	},
	{
		title: "App Designer",
		icon: mobile,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
	{
		title: "Problem Solver",
		icon: creator,
	},
];

const technologies = [
	{
		name: "Android",
		icon: android,
	},
	{
		name: "Kotlin",
		icon: kotlin,
	},
	{
		name: "Android Studio",
		icon: androidStudio,
	},
	{
		name: "Ktor",
		icon: ktor,
	},
	{
		name: "Firebase",
		icon: firebase,
	},
	{
		name: "Material Ui",
		icon: materialUi,
	},
	{
		name: "Jetpack Compose",
		icon: jetpackCompose,
	},
	{
		name: "XML",
		icon: xml,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Express",
		icon: express,
	},
	{
		name: "Java",
		icon: java,
	},
	{
		name: "MySql",
		icon: mysql,
	},
];

const experiences = [
	{
		title: "App Designer",
		company_name: "Tecognize Solutions Limited",
		icon: tecognize,
		iconBg: "#E6DEDD",
		date: "February 2021 - December 2021",
		points: [
			"Developed and maintained front-end components for Android apps using Kotlin, Jetpack Compose, and Material UI to create responsive and visually appealing user interfaces.",
			"Collaborated with API providers to integrate and implement functional app features effectively.",
			"Resolved technical issues and optimized app performance through systematic debugging and problem-solving.",
			"Worked closely with cross-functional teams, including designers and back-end developers, to implement design concepts and seamlessly integrate app features."
		],
	},
	{
		title: "Lead Android Developer",
		company_name: "Sansmo International LTD.",
		icon: sansmo,
		iconBg: "#E6DEDD",
		date: "July 2022 - Present",
		points: [
			"Developing and maintaining Android applications using Kotlin Compose and MySQL.",
			"Collaborating with cross-functional teams, including designers, product managers, and other developers, to create user-friendly mobile solutions.",
			"Ensuring compatibility across a wide range of Android devices and versions.",
			"Participating in code reviews and providing constructive feedback to improve code quality and maintainability.",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a app as beautiful as our product, but rabbi proved me wrong.",
		name: "Kelly Kennedy",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/men/4.jpg",
	},
	{
		testimonial:
			"I've never met a app developer who truly cares about their clients' success like rabbi does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Rabbi optimized our qpp, our traffic increased by 50%. We can't thank them enough!",
		name: "Carl Coleman",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/men/6.jpg",
	},
];

const projects = [
	{
		name: "Shopper (E-Commerce)",
		description:
			"This is an e-commerce Android app built with Kotlin and Jetpack Compose, featuring cart management, product browsing and filtering.",
		tags: [
			{
				name: "jetpack compose",
				color: "blue-text-gradient",
			},
			{
				name: "kotlin",
				color: "pink-text-gradient",
			},
			{
				name: "ktor",
				color: "blue-text-gradient",
			},
		],
		image: shopper,
		source_code_link: "https://github.com/Sharif-Minhaz/Titan-Settlers",
		live_link: "https://titan-settlers.vercel.app/",
	},

];

export { services, technologies, socialLinks, experiences, testimonials, projects };
