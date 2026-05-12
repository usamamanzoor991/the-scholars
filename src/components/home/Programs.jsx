import React from "react";
import { PiBabyLight } from "react-icons/pi";
import { LuBookOpen } from "react-icons/lu";
import { CiCircleCheck } from "react-icons/ci";

const environments = [
  {
    tag: "Early Years",
    title: "Toddler & Primary (Ages 1.5–6)",
    description:
      "Focusing on practical life skills, sensorial exploration, and building a strong foundation in language and grace.",
    icon: <PiBabyLight className="size-14 text-black/10" />,
    points: [
      "Practical life & self-care skills",
      "Sensorial materials for brain development",
      "Emerent literacy & phonemic awareness",
    ],
    button: "Explore Primary Program",
    tagColor: "bg-[#F8A1A1] text-[#753537]",
  },
  {
    tag: "Academy",
    title: "Elementary & Middle (Grades 1–8)",
    description:
      "Advanced academics through inquiry-based projects, adolescent erdkinder, and community-focused leadership.",
    icon: <LuBookOpen className="size-14 text-black/10" />,
    points: [
      "Project-based science & humanities",
      "Advanced mathematics & geometry",
      "Leadership & community engagement",
    ],
    button: "Explore Academy Program",
    tagColor: "bg-[#AB8FFE] text-[#3F1E8C]",
  },
];

const Programs = () => {
  return (
    <section id="programs" className="min-h-screen w-full flex items-center justify-center pt-22 pb-4 px-6">
      <div className="container flex flex-col items-center gap-4">
        {/* Heading */}
        <div className="max-w-2xl text-center flex flex-col gap-4">
          <h2 className="headline-lg text-black">
            Our Learning Environments
          </h2>

          <p className="body-lg text-lg text-black/60">
            Tailored for developmental milestones, our programs provide the
            perfect balance of challenge and support.
          </p>
        </div>

        {/* Cards */}
        <div className="w-full grid lg:grid-cols-2 gap-8">
          {environments.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[32px] border border-black/5 shadow-sm px-8 py-8 flex flex-col justify-between gap-8"
            >
              {/* Top */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-5">
                  <span
                    className={`w-fit px-4 py-1 rounded-full text-sm font-semibold ${item.tagColor}`}
                  >
                    {item.tag}
                  </span>

                  <div className="flex flex-col gap-4">
                    <h3 className="display-md text-black max-w-[420px]">
                      {item.title}
                    </h3>

                    <p className="body-md text-black/60 max-w-[500px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="shrink-0">{item.icon}</div>
              </div>

              {/* Points */}
              <div className="flex flex-col gap-4">
                {item.points.map((point, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-black/80"
                  >
                    <CiCircleCheck className="size-5 text-dark-primary shrink-0" />
                    <span className="body-md">{point}</span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <button className="w-full border-2 border-primary rounded-full py-4 body-lg text-dark-primary font-semibold transition-all duration-300 hover:bg-primary cursor-pointer">
                {item.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;