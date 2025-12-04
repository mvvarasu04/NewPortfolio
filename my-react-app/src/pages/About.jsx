import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { services, techIcons } from "../constants"; 

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className="max-container">
      {/* --- Hero Heading --- */}
      <h1 className="head-text">
        Welcome to{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Jambavan Software Systems
        </span>{" "}
        👋
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          We provide the scalable, secure, and intuitive platform you need to
          launch innovative products faster. Our technology handles the
          complexity, so your team can focus purely on creativity and growth.
        </p>
      </div>

      {/* --- Expertise Section --- */}
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">Expertise In</h3>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 sm:gap-10 md:gap-12 justify-items-center">
          {techIcons.slice(0, 12).map((techIcon, index) => (
            <div
              className="block-container w-20 h-20"
              key={techIcon.name || `tech-${index}`}
            >
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={techIcon.src}
                  alt={techIcon.name || "Technology Icon"}
                  className="w-full h-full object-contain p-2"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Services Section --- */}
      <div className="py-16">
        <h3 className="subhead-text">Services Provided</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {services.map((service, sIndex) => (
              <VerticalTimelineElement
                key={service.name || `service-${sIndex}`}
                iconStyle={{ background: service.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={service.image}
                      alt={service.title || "Service Icon"}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: `8px solid ${service.iconBg}`,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-700 whitespace-pre-line leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {service.points?.map((point, pIndex) => (
                    <li
                      key={`${service.name || sIndex}-point-${pIndex}`}
                      className="text-gray-600 font-normal pl-1 text-sm"
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

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
