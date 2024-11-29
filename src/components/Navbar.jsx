import { useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles.js";
import { navLinks } from "./../constants/index";
import { menu, close } from "../assets/index.js";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);

	return (
		<nav
			className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
		>
			<div className="flex justify-between w-full max-w-7xl mx-auto">
				<Link
					to="/"
					className="flex gap-2 items-center"
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}
				>
					<img src="/logo.png" alt="logo" className="object-contain w-9 h-9" />
					<p className="text-white text-[18px] font-bold cursor-pointer">
						Rabbi <span className="sm:inline-block hidden"> Islam</span>
					</p>
				</Link>

				<ul className="list-none hidden sm:flex gap-10">
					{navLinks.map((link) => (
						<li
							key={link.id}
							className={`${
								active === link.title ? "text-white" : "text-secondary"
							} hover:text-white text-[18px] font-medium cursor-pointer`}
							onClick={() => setActive(link.title)}
						>
							<a href={`#${link.id}`}>{link.title}</a>
						</li>
					))}
				</ul>

				<div className="sm:hidden flex flex-1 justify-end items-center">
					<img
						src={toggle ? close : menu}
						alt="menu"
						className="w-[28px] cursor-pointer h-[28px] object-contain"
						onClick={() => setToggle(!toggle)}
					/>

					<div
						className={`${
							!toggle ? "hidden" : "flex"
						} p-6 black-gradient mx-4 rounded-xl absolute top-20 right-0 z-20 min-w-[140px]`}
					>
						<ul className="list-none sm:hidden flex items-start justify-end flex-col gap-4">
							{navLinks.map((link) => (
								<li
									key={link.id}
									className={`${
										active === link.title ? "text-white" : "text-secondary"
									} font-poppins font-medium cursor-pointer text-[16px]`}
									onClick={() => {
										setActive(link.title);
										setToggle(false);
									}}
								>
									<a href={`#${link.id}`}>{link.title}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
