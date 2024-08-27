import { useState } from 'react';
import PatternImg2 from '../../img/patternImg2.jpg';
import { FaVideo, FaLink, FaGithub } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const ProjectLinks = ({ githuburl, liveurl }) => {
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
        <div className="flex flex-col items-center p-4 md:p-6 rounded-md sm:rounded-lg md:rounded-xl relative w-full max-w-md md:max-w-lg lg:max-w-xl overflow-hidden">
            <div
                className="before:absolute before:inset-0 before:bg-accent before:rounded-md before:opacity-20 before:z-1 bg-blend-multiply absolute rounded-md sm:rounded-lg md:rounded-xl inset-0 w-full bg-no-repeat bg-center bg-cover z-[-1] bg-accent"
                style={{ backgroundImage: `url(${PatternImg2})` }}
            ></div>

            {githuburl && (
                <button
                    onClick={() => handleClick(githuburl)}
                    className="relative flex flex-row justify-center items-center h-8 md:h-12 w-[90%] overflow-hidden rounded-lg bg-dark text-white shadow-lg transition-all duration-300 before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-white before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-white after:duration-500 hover:text-dark hover:shadow-dark hover:before:h-2/4 hover:after:h-2/4"
                >
                    <FaGithub className='relative z-10 text-md md:text-2xl' />
                    <span className="relative z-10 ml-2 font-NunitoSans font-bold text-sm sm:text-xl">Github</span>
                </button>
            )}

            {liveurl && (
                <button
                    onClick={() => handleClick(liveurl)}
                    className="relative flex flex-row justify-center items-center h-8 md:h-12 w-[90%] overflow-hidden rounded-lg bg-youtube text-white shadow-lg transition-all duration-700 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-youtube hover:shadow-youtube hover:before:border-[15px] mt-2"
                >
                    <FaLink className='relative z-10 text-md md:text-2xl' />
                    <span className="relative z-10 ml-2 font-NunitoSans font-bold text-sm md:text-xl">Live</span>
                </button>
            )}

            <button
                onClick={openVideoModal}
                className="relative flex flex-row justify-center items-center h-8 md:h-12 w-[90%] overflow-hidden rounded-lg border border-tumblr bg-tumblr text-white shadow-lg transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-white before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-white after:duration-500 hover:text-tumblr hover:shadow-white hover:before:h-2/4 hover:after:h-2/4 mt-2"
            >
                <FaVideo className='relative z-10 text-md md:text-2xl' />
                <span className="relative z-10 ml-2 font-NunitoSans font-bold text-sm md:text-xl">Video</span>
            </button>

            {isVideoOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                    <div className="relative flex flex-col items-center w-11/12 md:w-2/3 lg:w-1/2 bg-black rounded-lg">
                        <button
                            onClick={closeVideoModal}
                            className="absolute top-[-50px] md:top-[-30px] sm:right-[-40px] md:right-[-30px] w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-reddit text-white flex items-center justify-center"
                        >
                            <ImCross size={20} />
                        </button>
                        <iframe title="Project Demo Video"
                            src="https://www.youtube.com/embed/T4AWfmAYTNA"
                            className="w-full h-48 sm:h-64 md:h-72 rounded-lg"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectLinks;
