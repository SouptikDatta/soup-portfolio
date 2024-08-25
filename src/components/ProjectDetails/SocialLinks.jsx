import React from 'react';
import {
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
    FaGithub,
} from "react-icons/fa";

const SocialLinks = () => {
	const handleClick = (url) => {
		window.open(url, "_blank");
	};

	return (
		<div className="socialLinks hidden md:flex flex-col items-center gap-[10px] absolute left-7 bottom-28 md:bottom-9">
			<button
				className="relative h-[2.5rem] w-[2.5rem] inline-flex items-center justify-center overflow-hidden rounded-full border bg-gray text-black shadow-2xl transition-all before:absolute before:h-0 before:w-0 hover:text-white before:rounded-full before:bg-dark before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-[2.5rem] hover:before:w-[2.5rem]"
				onClick={() => handleClick("https://github.com/SouptikDatta")}
			>
				<FaGithub className="relative z-20" size={30} />
			</button>
			<button
				className="relative h-[2.5rem] w-[2.5rem] inline-flex items-center justify-center overflow-hidden rounded-full border bg-gray text-linkedin shadow-2xl transition-all before:absolute before:h-0 before:w-0 hover:text-white before:rounded-full before:bg-linkedin before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-[2.5rem] hover:before:w-[2.5rem]"
				onClick={() => handleClick("https://linkedin.com/in/souptikdatta")}
			>
				<FaLinkedinIn className="relative z-20" size={25} />
			</button>
			<button
				className="relative h-[2.5rem] w-[2.5rem] inline-flex items-center justify-center overflow-hidden rounded-full border bg-gray text-instagram shadow-2xl transition-all before:absolute before:h-0 before:w-0 hover:text-white before:rounded-full before:bg-instagram before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-[2.5rem] hover:before:w-[2.5rem]"
				onClick={() => handleClick("https://instagram.com/nameless_person_2000")}
			>
				<FaInstagram className="relative z-20" />
			</button>
			<button
				className="relative h-[2.5rem] w-[2.5rem] inline-flex items-center justify-center overflow-hidden rounded-full border bg-gray text-accent shadow-2xl transition-all before:absolute before:h-0 before:w-0 hover:text-white before:rounded-full before:bg-accent before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-[2.5rem] hover:before:w-[2.5rem]"
				onClick={() => handleClick("https://facebook.com/Akshaydatta18")}
			>
				<FaFacebookF className="relative z-20" />
			</button>
		</div>
	);
};

export default SocialLinks;
