import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { services,  techIcons } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Welcome to {" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Jambavan Software Systems
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
         We provide the scalable, secure, and intuitive platform you need to launch innovative products faster. Our technology handles the complexity, so your team can focus purely on creativity and growth. 
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>Expertise In</h3>

        {/* Responsive grid for techIcons */}
        <div className='mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 sm:gap-10 md:gap-12 justify-items-center'>
          {techIcons.slice(0, 10).map((techIcon) => (
            <div className='block-container w-20 h-20' key={techIcon.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                {/* Updated: Tech Icon Image size to w-full h-full (100% of the container) */}
                <img
                  src={techIcon.src}
                  alt={techIcon.name}
                  className='w-full h-full object-contain p-2' // Added p-2 for a little padding
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Services Provided</h3> 
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {services.map((service) => (
              <VerticalTimelineElement
                key={service.name}
                iconStyle={{ background: service.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    {/* Updated: Service Icon Image size to w-full h-full (100% of the container) */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className='w-full h-full object-contain p-1' // Added p-1 for slight padding/margin
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: service.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                     {service.title}
                  </h3>
                  <p className="text-lg text-gray-700 whitespace-pre-line leading-relaxed">
                  {service.description}
                </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {/* Using optional chaining (?.) on service.points to prevent the crash */}
                  {service.points?.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;