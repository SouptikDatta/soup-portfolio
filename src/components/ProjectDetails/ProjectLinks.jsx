import { useState } from 'react';
import PatternImg2 from '../../img/patternImg2.jpg';
import {
    FaVideo,
	FaLink,
    FaGithub,
} from "react-icons/fa";
import { ImCross } from "react-icons/im";


const ProjectLinks = ({githuburl, liveurl}) => {
	const [isVideoOpen, setVideoOpen] = useState(false);

	const openVideoModal = () => {
		setVideoOpen(true);
	};

	const closeVideoModal = () => {
		setVideoOpen(false);
	};

	const handleClick = (url) => {
		window.open(url, "_blank");
	};

	return (
		<div className="flex flex-col items-center px-[2.5rem] p-[2rem] rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem] relative w-full overflow-hidden">
			<div
				className="before:absolute before:inset-0 before:bg-accent before:rounded-[10px] before:sm:rounded-[1.25rem] before:md:rounded-[3.125rem] before:opacity-70 before:z-[1] bg-blend-multiply absolute rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem] inset-0 w-full bg-no-repeat bg-center bg-cover z-[-1] bg-accent"
				style={{ backgroundImage: `url(${PatternImg2})` }}
			></div>
			
			{githuburl && (
			    <button onClick={() => handleClick(githuburl)}
					className="relative flex flex-row justify-center items-center h-[50px] w-64 overflow-hidden rounded-2xl bg-dark text-white shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-white before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-white after:duration-500 hover:text-dark hover:shadow-dark hover:before:h-2/4 hover:after:h-2/4"
				>
					<FaGithub className='relative z-10' size={25}/><span className="relative z-10 ml-2 font-NunitoSans font-bold text-xl">Github</span>
				</button>
			)}

			{liveurl && (
				<button onClick={() => handleClick(liveurl)}
					className="relative mt-2 pr-4 flex h-[50px] w-64 items-center justify-center overflow-hidden rounded-2xl bg-youtube font-medium text-white shadow-2xl transition-all duration-700 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-youtube hover:shadow-youtube hover:before:border-[25px]"
				>
					<FaLink className='relative z-10' size={23}/><span className="relative z-10 ml-2 font-NunitoSans font-bold text-xl">Live</span>
				</button>
			)}

			<button onClick={openVideoModal}
				className="relative mt-2 flex flex-row justify-center items-center h-[50px] w-64 overflow-hidden rounded-2xl border border-tumblr bg-white text-tumblr shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-tumblr before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-tumblr after:duration-500 hover:text-white hover:shadow-tumblr hover:before:h-2/4 hover:after:h-2/4">
				<FaVideo className='relative z-10' size={25}/><span className="relative z-10 ml-2 font-NunitoSans font-bold text-xl">Video</span>
			</button>

			{isVideoOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
					<div className="relative flex flex-col items-center w-11/12 md:w-1/2 lg:w-3/4 lg:h-3/4 bg-white p-4 rounded-lg">
						<button
							onClick={closeVideoModal}
							className="relative flex items-center justify-center z-50 top-[-50px] w-10 h-10 rounded-full bg-reddit text-white text-xl font-bold "
						>
							<ImCross size={20}/>
						</button>
						Coming soon
						{/* <iframe
                                src="https://www.youtube.com/embed/T4AWfmAYTNA"
                                className="absolute top-0 left-0 w-full h-full rounded-lg"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                        ></iframe> */}
					</div>
				</div>
			)}

		</div>
	);
};

export default ProjectLinks;
