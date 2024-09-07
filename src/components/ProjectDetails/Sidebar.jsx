import TechstackWidget from './TechstackWidget';
import ProjectLinks from './ProjectLinks';

const Sidebar2 = ({links, techStack}) => {
	return (
		<aside className="flex flex-col gap-[1rem] md:gap-[1.5rem] w-full">
			<ProjectLinks githuburl={links?.githuburl} liveurl={links?.liveurl} videourl={links?.videourl} />
			<TechstackWidget techStack={techStack || []}></TechstackWidget>
		</aside>
	);
};

export default Sidebar2;
