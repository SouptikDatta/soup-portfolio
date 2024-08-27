import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import projects from '../../data/projects.js';
import PatternImg2 from '../../img/patternImg2.jpg';
import Sidebar2 from './Sidebar.jsx';
import SocialLinks from './SocialLinks.jsx';
import Breadcrumb from './BreadCrumb.jsx';
import { FaAngleDoubleRight } from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();
  const [portfolio, setPortfolio] = useState(null);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [fade, setFade] = useState(true); // State to control fade effect
  const featureRef = useRef(null);

	useEffect(() => {
		let portfolio = projects[ id - 1 ];
		if (portfolio) {
			setPortfolio(portfolio);
		}
	}, [id, portfolio]);

	useEffect(() => {
		const interval = setInterval(() => {
		  	setFade(false); // Start fade out
		  	setTimeout(() => {
				setCurrentFeature(prev => (prev + 1) % (portfolio?.features?.length || 1));
				setFade(true); // Start fade in
		  	}, 500); // Duration of fade-out
		}, 3000); // Change every 3 seconds
	
		return () => clearInterval(interval);
	}, [portfolio]);

	useEffect(() => {
		// Scroll the selected feature into view smoothly
		const featureElement = featureRef.current?.querySelectorAll('p')[currentFeature];
		if (featureElement) {
			featureRef.current.scrollTo({
				top: featureElement.offsetTop - featureRef.current.offsetTop,
				behavior: 'smooth',
			});
		}
	}, [currentFeature]);


	const handleFeatureClick = (index) => {
		setCurrentFeature(index);
	};


	if (!portfolio) {
		return <div>Loading...</div>;
	}

  return (
    <div className='p-4 pt-2'>	
		<Breadcrumb />	
		<section className="pageWrap pt-4 lg:pt-6 relative w-full">
			<div className="container sm:container md:container lg:container xl:max-w-full mx-auto">
				<div className="pageInner grid col-span-2 lg:gap-[1.875rem] lg:grid-cols-3 grid-cols-1 w-full">
					<div className="col-span-2 mb-2">
						<div className="postDetail relative w-[calc(100vw-2.5rem)] md:w-full">
							<div className="postDetailImage relative border-4 border-accent rounded-[10px] sm:rounded-[1.25rem] md:rounded-2xl overflow-hidden md:w-full">
								<img className="w-full" src={portfolio?.image.url} alt=""></img>
								<SocialLinks />
							</div>
							
							<div className="postInfo relative mt-[-3rem] md:mt-[-6rem] z-[1] pr-2 md:pr-5 pl-6 ml-12 py-3 md:py-5 md:pt-6 md:pb-6 md:ml-2 md:left-1/2 md:-translate-x-1/2 max-w-[calc(100%-5rem)] md:w-[calc(60%)] md:pl-[3.5rem] lg:pl-[4.6875rem]">
								<div
									className="before:absolute before:inset-0 before:bg-gray before:rounded-[10px] before:sm:rounded-[1.25rem] before:md:rounded-[1.875rem] before:opacity-70 before:z-[1] bg-blend-multiply absolute rounded-[10px] sm:rounded-[1.25rem] md:rounded-[1.875rem] inset-0 w-full bg-no-repeat bg-center bg-cover z-[-1] bg-gray"
									style={{ backgroundImage: `url(${PatternImg2})` }}
								></div>
								<span className="bg-accent rounded-[10px] w-[3.2rem] md:w-[5.25rem] absolute text-center text-white text-[0.8rem] md:text-[1.375rem] font-Poppins font-semibold p-1 top-[1.2rem] md:top-[3.4375rem] left-[-2rem] md:left-[-3.125rem]">
									<i className="text-accent2 uppercase text-[8px] md:text-[13px] font-Poppins font-bold block not-italic leading-none bg-white py-[7px] mb-1 rounded-t-[8px] rounded-b-[3px]">
										December
									</i>
									15
								</span>
								<span className="flex items-center text-accent gap-1 text-[0.6rem] md:text-[1rem] font-NunitoSans">
									By <span className='font-Poppins text-[0.6rem] md:text-[1rem] tracking-wider font-extrabold'>Souptik Datta</span>
								</span>
								<h3 className="text-accent2 text-[1.2rem] md:text-[1.8rem] font-Poppins font-bold tracking-widest mt-1">
									{portfolio?.title}
								</h3>
								<i className="bg-[#d5daf2] h-[1px] border-0 relative before:absolute before:bg-accent before:w-[4.125rem] before:h-[3px] before:z-[1] block before:mt-[-1px] mt-1 md:mt-5 md:mb-2"></i>
							</div>
							
							{/* Project Detail */}
						</div>
						
					</div>
					
					<Sidebar2
						links={{
							liveurl: portfolio?.liveurl || '',
							githuburl: portfolio?.githuburl || ''
						}}
						techStack={portfolio?.techStack || []}
					/>
				</div>
				
				<div className="flex justify-center text-center mt-4 max-w-[100%]">
					<h2 className="text-accent2 text-[1.65rem] md:text-[2.5rem] font-Poppins font-bold relative">
						<i className="h-[3.5rem] w-[3.5rem] md:h-[5.625rem] md:w-[5.625rem] rounded-[10px] md:rounded-[1.25rem] absolute ml-[-1.75rem] md:ml-[-2.8125rem] left-1/2 bg-shapBg z-[-1] top-[-12%] md:top-[-15%]"></i>
						Project <span className="text-accent text-[1.65rem] md:text-[2.5rem] font-Caveat font-bold relative">
							Features
						</span>
					</h2>
				</div>
				{/* Features Section */}
				<div className="featurebox flex flex-col items-center gap-5 w-full mt-[1.4375rem] p-4 rounded-xl bg-darkblue">
					<div className="featuresSection grid grid-cols-1 md:grid-cols-2 items-center">
						<div className="featuresList max-h-[350px] p-2 md:p-4 mb-2 md:mr-2 overflow-y-auto" ref={featureRef}>
							{portfolio?.features.map((feature, index) => (
								<p
									key={index}
									className={`flex flex-row items-center font-Poppins mt-2 md:mt-4 text-desc2 text-[0.7rem] md:text-[1rem] leading-normal cursor-pointer transition-transform duration-500 
										${currentFeature === index ? 'p-2 rounded-xl bg-cyan text-dark font-bold scale-105' : ''}`}
									onClick={() => handleFeatureClick(index)}
								>
									<FaAngleDoubleRight size={25} className='mr-4' />{feature.feature}
								</p>
							))}
						</div>
						<div className={`featuresImage transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}>
							<img
							src={portfolio?.features[currentFeature].image}
							alt={portfolio?.features[currentFeature].feature}
							className="w-full rounded-[10px] md:rounded-[1.25rem] border-2 border-white"
							/>
						</div>
					</div>
				</div>

			</div>
			{/* Page Wrap */}
		</section>
	</div>
  );
};

export default ProjectDetails;
