import PatternImg from '../../img/patternImg.jpg';
import { ReactComponent as RightDownIcon } from '../../icons/RightDown.svg';
import {Link} from 'react-router-dom'
import projects from '../../data/projects.js'

export const SectionTitle = (props) => {
  return (
    <div className="secTitleWrap flex justify-center text-center w-full mb-[2.1875rem]">
      <div className="secTitle max-w-[100%] md:max-w-[90%] lg:max-w-[55%]">
        <h2 className="text-accent2 text-[1.875rem] md:text-[3.125rem] font-Poppins font-bold relative">
          <i className="h-[3.5rem] w-[3.5rem] md:h-[5.625rem] md:w-[5.625rem] rounded-[10px] md:rounded-[1.25rem] absolute ml-[-1.75rem] md:ml-[-2.8125rem] left-1/2 bg-shapBg z-[-1] top-[-12%] md:top-[-15%]"></i>
          {props.title} <span className="text-accent text-[1.875rem] md:text-[3.125rem] font-Caveat font-bold relative">
            {props.titleInner}
          </span>
        </h2>
        {/* Section Title */}
      </div>
      {/* Section Title Wrap */}
    </div>
  );
};

const Portfolio = ( ) => {
  const portfolioStyle = [
		'basis-full md:basis-[41.57%] px-[.9375rem]',
		'basis-full md:basis-[58.3%] px-[.9375rem]',
		'basis-full md:basis-2/6 px-[.9375rem]',
		'basis-full md:basis-2/6 px-[.9375rem]',
		'basis-full md:basis-2/6 px-[.9375rem]',
		'basis-full md:basis-[58.3%] px-[.9375rem]',
		'basis-full md:basis-[41.57%] px-[.9375rem]',
	];

	return (
		<div id='projects' className='projects'>
			<section id="Projects" className="portWrap mt-16 md:mt-0 py-[4.5rem] md:py-[5.5rem] lg:py-[6.5rem] xl:py-[7.5rem relative w-full">
				<div
					className="absolute left-0 top-20 bottom-0 -z-10 w-[100%] bg-left-top bg-no-repeat opacity-20"
					style={{ backgroundImage: `url(${PatternImg})` }}
				></div>
				<div className="container sm:container md:container lg:container xl:container 2xl:container mx-auto">
					<SectionTitle
						title="My Amazing"
						titleInner="Projects"
					></SectionTitle>
					<div className="portList flex flex-wrap relative mx-[-.9375rem] mb-[-1.875rem]">
						{projects.map(
							(item, index) =>
								index < 5 && (
									<div className={portfolioStyle[index]} key={index}>
										<div className="portBox group mb-[1.875rem] before:transition-all before:ease-in-out before:duration-500 before:bg-accent before:absolute before:opacity-0 before:hover:opacity-90 before:inset-[10%] before:hover:inset-0 relative overflow-hidden rounded-[10px] sm:rounded-[1.25rem] lg:rounded-[1.25rem] xl:rounded-[1.5rem] before:z-[1] text-center w-full">
											<img className="w-full" src={item.image.url} alt={item.title}></img>
											<div className="projInfo transition-all ease-in-out duration-500 delay-200 absolute left-0 group-hover:top-2/4 top-3/4 translate-y-[-50%] p-5 text-center w-full z-[1] opacity-0 invisible group-hover:opacity-100 group-hover:visible">
												<h3 className="text-white text-sm md:text-[1.5rem] font-Poppins font-bold">{item.title}</h3>
												<p className="text-white font-NunitoSans text-[0.7rem] md:text-[1rem] mt-1 md:mt-2">{item.description}</p>
												<Link
													className="inline-flex items-center justify-center border-[2px] sm:border-[5px] border-[rgba(255,255,255,.25)] hover:rotate-[-90deg] hover:duration-500 hover:border-white rounded-[10px] sm:h-[3.5625rem] sm:w-[3.5625rem] h-[2.5rem] w-[2.5rem] mt-2 md:mt-5"
													to={`/projects/${index+1}`}
												>
													<RightDownIcon className="h-3 w-3 sm:h-4 sm:w-4 fill-white"></RightDownIcon>
												</Link>
											</div>
										</div>
										{/* project Box */}
									</div>
								)
						)}
						{/* projects List */}
					</div>
				</div>
				{/* projects Wrap */}
			</section>
		</div>
	);
};

export default Portfolio;
