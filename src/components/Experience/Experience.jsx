import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import PatternImg2 from "../../img/patternImg2.jpg";
import "swiper/css";
import "swiper/css/pagination";
import experienceData from "../../data/experiences.js";

const Experience = () => {
  const duplicatedExperience = [
    ...experienceData.experience,
    ...experienceData.experience,
  ]; // Duplicate the array

  return (
    <section className="workExpWrap p-2 md:p-6 mt-24 md:mt-16 py-[4.5rem] md:py-[2.5rem] lg:py-[2.5rem] relative w-full">
      <span className="bg-accent absolute right-0 bottom-[-.75rem] h-6 w-1/2"></span>
      <div
        className="fixedBg bg-contain bg-repeat before:absolute before:z-[1] before:inset-0 before:opacity-90 before:bg-dark bg-dark gradBg1 bg-blend-color-dodge xl:rounded-tl-[20rem] lg:rounded-tl-[18rem] md:rounded-tl-[15rem] sm:rounded-tl-[10rem] rounded-tl-0 overflow-hidden"
        style={{ backgroundImage: `url(${PatternImg2})` }}
      ></div>
      <div className="container md:container lg:container xl:max-w-[86.875rem] mx-auto">
        <div className="secTitleWrap flex justify-center text-center w-full mb-[2.1875rem]">
          <div className="secTitle max-w-[100%] md:max-w-[90%] lg:max-w-[55%]">
            <h2 className="text-white text-[1.875rem] md:text-[3.125rem] font-Poppins font-bold relative">
              <i className="h-[3.5rem] w-[3.5rem] md:h-[5.625rem] md:w-[5.625rem] rounded-[10px] md:rounded-[1.25rem] absolute ml-[-1.75rem] md:ml-[-2.8125rem] left-1/2 bg-shapBgDark z-[-1] top-[-12%] md:top-[-15%]"></i>
              My Work{" "}
              <span className="text-white text-[1.875rem] md:text-[3.125rem] font-Caveat font-bold relative">
                Experience
              </span>
            </h2>
            {/* Section Title */}
          </div>
          {/* Section Title Wrap */}
        </div>

        <div
          className="eduBox md:w-[60%] flex group ml-auto mr-auto items-center rounded-[10px] md:[1.875rem] lg:rounded-[3.125rem] before:absolute before:inset-0 hover:before:bg-accent before:bg-white before:opacity-70 before:z-[1] bg-blend-multiply before:rounded-[10px] before:sm:rounded-[1.25rem] before:md:rounded-[3.125rem] bg-no-repeat bg-center bg-cover hover:bg-accent bg-white py-[1.2rem] md:py-[1.5rem] lg:py-[1.8rem] px-[1.25rem] md:px-[2.5rem] lg:px-[3.125rem] relative my-[10px]"
          style={{ backgroundImage: `url(${PatternImg2})` }}
        >
          <span
            className="group-hover:bg-white bg-accent absolute font-Poppins font-semibold group-hover:text-accent text-white text-[0.8rem] md:text-[1.25rem] rounded-[5px] md:rounded-[10px] z-[1] right-[1.25rem] sm:right-[1.875rem] md:right-[2.5rem] lg:right-[3.125rem] h-[calc(100%+1.25rem)] flex items-center justify-center bottom-[-10px] px-4"
            style={{
              textOrientation: "mixed",
              writingMode: "vertical-rl",
            }}
          >
            Feb - July (2024)
          </span>
          <div className="eduBoxInfoInner relative z-[1] flex flex-col max-w-[80%] md:max-w-[80%] lg:max-w-[75%]">
            <h3 className="group-hover:text-white text-accent2 text-[0.8rem] md:text-[1.5rem] font-Poppins font-bold">
              Software Developer Intern
            </h3>
            <span className="group-hover:text-white text-accent font-NunitoSans font-semibold text-[0.7rem] md:text-[1.125rem] mt-1">
              Synopix (Atlanta, GA)
            </span>
            <p className="group-hover:text-desc text-desc2 text-[0.7rem] md:text-[1.125rem] font-NunitoSans mt-2">
              Tecchnologies: React, Postman, Material UI, Tailwind CSS, Ant
              Design, Bitbucket
            </p>
          </div>
        </div>

        <div className="sliderWrap w-full relative ">
          <Swiper
            slidesPerView={3} // Show 3 slides on larger screens
            spaceBetween={0} // Add some space between slides
            centeredSlides={true}
            loop={true} // Enable looping
            autoplay={{
              delay: 3000, // Adjust the delay (in ms) for auto-sliding
              disableOnInteraction: false, // Keep autoplay on interaction
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]} // Use Autoplay and Pagination modules
            breakpoints={{
              315: {
                slidesPerView: 1,
                direction: "horizontal",
                centeredSlides: false,
                loop: true,
              },
              766: {
                slidesPerView: 2,
                direction: "vertical",
                centeredSlides: false,
                loop: true,
              },
              1210: {
                slidesPerView: 3,
                direction: "vertical",
                centeredSlides: true,
                loop: true,
              },
            }}
            className="mySwiper"
          >
            {duplicatedExperience?.map((item, i) => {
              return (
                <SwiperSlide
                  className="slideItem"
                  key={`${item.expCount}-${i}`}
                >
                  <div className="expBox xl:px-[6.875rem] relative">
                    <div
                      className="expBoxBg hidden md:block before:absolute before:inset-0 before:bg-accent before:rounded-[10px] before:sm:rounded-[1.25rem] before:md:rounded-[3.125rem] before:opacity-70 before:z-[1] bg-blend-multiply absolute rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem] inset-0 top-full bottom-full bg-no-repeat bg-center bg-cover z-[-1] bg-accent"
                      style={{ backgroundImage: `url(${PatternImg2})` }}
                    ></div>
                    <div className="grid gap-[1.5rem] xl:grid-cols-2 lg:grid-cols-1 grid-cols-1 items-center">
                      <div className="gridItem xl:order-1">
                        <div className="expImg relative overflow-hidden rounded-[10px] sm:rounded-[1.25rem] lg:rounded-[1.875rem] xl:rounded-[3.125rem] opacity-0">
                          <img
                            className="w-full"
                            src={item.expImg}
                            alt=""
                          ></img>
                          {/* Work Experience Image */}
                        </div>
                      </div>
                      <div className="gridItem p-4 md:p-0">
                        <div className="expCap relative w-full pl-0 xl:pl-[7.5rem]">
                          <i className="text-white before:bg-dark3 before:rotate-[45deg] before:rounded-[.9375rem] before:inset-0 before:absolute before:z-[-1] font-Poppins font-extrabold text-[1.875rem] md:text-[2.75rem] lg:text-[3.75rem] not-italic h-[3.125rem] w-[3.125rem] md:h-[5rem] md:w-[5rem] lg:h-[7.5rem] lg:w-[7.5rem] flex justify-center items-center absolute md:top-5 right-0 md:left-0 z-[-1]">
                            {item.expCount}
                          </i>
                          <span className="font-Poppins font-light text-desc text-[0.8rem] md:text-[1.125rem]">
                            {item.expDate}
                          </span>
                          <h2 className="font-Poppins font-bold text-accent md:text-white text-[1.4rem] lg:text-[1.8rem] xl:text-[2rem]">
                            {item.expTitle}
                          </h2>
                          <p className="font-NunitoSans font-normal text-desc text-[0.7rem] md:text-[1rem] max-w-full md:max-w-[95%] ">
                            {item.expDesc}
                          </p>
                          {/* Work Experience Cap */}
                        </div>
                      </div>
                    </div>
                    {/* Work Experience Box */}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      {/* Work Experience Wrap */}
    </section>
  );
};

export default Experience;
