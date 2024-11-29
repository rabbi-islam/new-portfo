/* eslint-disable react-refresh/only-export-components */
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { toast } from "sonner";

const initialData = { name: "", message: "", email: "" };

const Contact = () => {
	const [form, setForm] = useState(initialData);
	const [loading, setLoading] = useState(false);
	const formRef = useRef();

	const handleChange = (e) => {
		const { name, value } = e.target;

		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!form.name || !form.email || !form.message)
			return toast.error("Please fill out all the form data.");

		setLoading(true);

		emailjs
			.send(
				import.meta.env.VITE_EMAIL_SERVICE_ID,
				import.meta.env.VITE_EMAIL_TEMPLATE_ID,
				{
					from_name: form.name,
					to_name: "Rabbi",
					from_email: form.email,
					to_email: "rabbiislam2823@gmail.com",
					message: form.message,
				},
				import.meta.env.VITE_EMAIL_PUBLIC_KEY
			)
			.then(() => {
				setForm(initialData);
				toast.success("Thank you. I will get back to you ASAP");
			})
			.catch((err) => {
				toast.error("Failed to send mail.", err.message);
			})
			.finally(() => setLoading(false));
	};

	return (
		<div className="xl:mt-12 xl:flex-row flex flex-col-reverse gap-10 overflow-hidden">
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[0.75] bg-black-100 p-5 xs:p-8 rounded-2xl"
			>
				<p className={styles.sectionSubText}>Get in touch</p>
				<h3 className={styles.sectionHeadText}>Contact.</h3>

				<form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Name</span>
						<input
							disabled={loading}
							type="text"
							name="name"
							required
							value={form.name}
							onChange={handleChange}
							placeholder="What's your good name?"
							className="bg-tertiary disabled:bg-slate-900 disabled:cursor-not-allowed disabled:text-slate-500 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your email</span>
						<input
							disabled={loading}
							type="email"
							name="email"
							value={form.email}
							required
							onChange={handleChange}
							placeholder="What's your web address?"
							className="bg-tertiary disabled:bg-slate-900 disabled:cursor-not-allowed disabled:text-slate-500 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Message</span>
						<textarea
							disabled={loading}
							rows={7}
							name="message"
							value={form.message}
							required
							onChange={handleChange}
							placeholder="What you want to say?"
							className="bg-tertiary disabled:bg-slate-900 disabled:cursor-not-allowed disabled:text-slate-500 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>

					<button
						disabled={loading}
						type="submit"
						className="bg-tertiary disabled:bg-slate-600 disabled:cursor-not-allowed active:shadow-none py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
					>
						{loading ? "Sending..." : "Send"}
					</button>
				</form>
			</motion.div>

			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
			>
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");
