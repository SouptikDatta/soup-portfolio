import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import projects from '../../data/projects.js';
import PatternImg2 from '../../img/patternImg2.jpg';
import Sidebar2 from './Sidebar.jsx';
import SocialLinks from './SocialLinks.jsx';
import Breadcrumb from './BreadCrumb.jsx';

const ProjectDetails = () => {
  const { id } = useParams();  // Get the project ID from the URL
  const [portfolio, setPortfolio] = useState(null);
  const [currentFeature, setCurrentFeature] = useState(0);

	useEffect(() => {
		let portfolio = projects[ id - 1 ];
		if (portfolio) {
			setPortfolio(portfolio);
		}
	}, [id, portfolio]);

    console.log(portfolio?.features);

    const handleFeatureClick = (index) => {
        setCurrentFeature(index);
    };


	if (!portfolio) {
		return <div>Loading...</div>;
	}

  return (
    <div className='p-4'>	
		<Breadcrumb />	
		<section className="pageWrap pt-[1.5rem] lg:pt-6 relative w-full">
			<div className="container sm:container md:container lg:container xl:max-w-[73.125rem] mx-auto">
				<div className="pageInner grid gap-[3.125rem] lg:gap-[1.875rem] lg:grid-cols-3 grid-cols-1 w-[calc(100vw-2.5rem)] md:w-full">
					<div className="col-span-2 grid gap-10">
						<div className="postDetail relative w-[calc(100vw-2.5rem)] md:w-full">
							<div className="postDetailImage relative border-4 border-accent rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem] overflow-hidden md:w-full">
								<img className="w-full" src={portfolio?.image.url} alt=""></img>
								<SocialLinks />
							</div>
							
							<div className="postInfo relative mt-[-3rem] md:mt-[-6rem] z-[1] pr-2 md:pr-5 pl-6 ml-12 py-3 md:py-5 md:pt-6 md:pb-6 md:ml-2 md:left-1/2 md:-translate-x-1/2 max-w-[calc(100%-5rem)] md:w-[calc(60%)] md:pl-[3.5rem] lg:pl-[4.6875rem]">
								<div
									className="before:absolute before:inset-0 before:bg-gray before:rounded-[10px] before:sm:rounded-[1.25rem] before:md:rounded-[1.875rem] before:opacity-70 before:z-[1] bg-blend-multiply absolute rounded-[10px] sm:rounded-[1.25rem] md:rounded-[1.875rem] inset-0 w-full bg-no-repeat bg-center bg-cover z-[-1] bg-gray"
									style={{ backgroundImage: `url(${PatternImg2})` }}
								></div>
								<span className="bg-accent rounded-[10px] w-[3rem] md:w-[5.25rem] absolute text-center text-white md:text-[1.375rem] font-Poppins font-semibold p-1  md:top-[3.4375rem] left-[-2rem] md:left-[-3.125rem]">
									<i className="text-accent2 uppercase text-[10px] md:text-[13px] font-Poppins font-bold block not-italic leading-none bg-white py-[7px] mb-1 rounded-t-[8px] rounded-b-[3px]">
										June
									</i>
									15
								</span>
								<span className="flex items-center text-accent gap-1 text-[0.6rem] md:text-[1rem] font-NunitoSans">
									By <span className='font-Poppins text-[0.6rem] md:text-[1rem] font-extrabold'>Souptik Datta</span>
								</span>
								<h3 className="text-accent2 text-[1.2rem] md:text-[1.8rem] font-Poppins font-bold mt-1">
									{portfolio?.title}
								</h3>
								<i className="bg-[#d5daf2] h-[1px] border-0 relative before:absolute before:bg-accent before:w-[4.125rem] before:h-[3px] before:z-[1] block before:mt-[-1px] mt-1 md:mt-5 md:mb-2"></i>
							</div>
							
							{/* Post Detail */}
						</div>

						{/* Features Section */}

						<div className="postDetailInner flex flex-col gap-5 w-full mt-[3.4375rem]">
							<div className="featuresSection grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
								<div className="featuresList">
									{portfolio?.features.map((feature, index) => (
										<p
											key={index}
											className={`text-desc2 text-[1rem] md:text-[1.125rem] leading-normal cursor-pointer ${currentFeature === index ? 'text-accent font-bold' : ''}`}
											onClick={() => handleFeatureClick(index)}
										>
											{feature.feature}
										</p>
									))}
								</div>
								<div className="featuresImage">
									<img
										src={portfolio?.features[currentFeature].image}
										alt={portfolio?.features[currentFeature].title}
										className="w-full rounded-[10px] md:rounded-[1.25rem] border-2 border-gray-200"
									/>
								</div>
							</div>
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
			</div>
			{/* Page Wrap */}
		</section>
	</div>
  );
};

export default ProjectDetails;
