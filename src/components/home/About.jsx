import React from "react";
import { FaCheckDouble, FaUsers } from "react-icons/fa";
import { GiFlowerPot } from "react-icons/gi";
import { BsPatchCheck } from "react-icons/bs";

const pillars = [
  {
    icon: <FaUsers className="size-5 text-[#8A5A00]" />,
    title: "Respect for the Child",
    description:
      "Acknowledging each student’s unique personality and developmental timeline.",
    bg: "bg-[#F7F1E7]",
  },
  {
    icon: <GiFlowerPot className="size-5 text-[#7A52CC]" />,
    title: "The Prepared Environment",
    description:
      "Classrooms designed to facilitate maximum independence and exploration.",
    bg: "bg-[#F1EBFF]",
  },
  {
    icon: <FaCheckDouble className="size-5 text-[#B05B5B]" />,
    title: "Multi-Age Classrooms",
    description:
      "Peer learning where older children mentor younger ones, fostering community.",
    bg: "bg-[#FCEEEE]",
  },
];

const About = () => {
  return (
    <section id="about" className="bg-background min-h-screen w-full flex items-center justify-center pt-22 pb-4 px-6">
      <div className="relative container flex flex-col lg:flex-row items-center gap-14">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="w-full rounded-[32px] overflow-hidden shadow-sm">
            <img
              src="/classroom.jpg"
              alt="Montessori Classroom"
              className="w-full sm:h-[520px] h-[390px] object-fill"
            />
          </div>
        </div>

        {/* Floating Card */}
        <div className="lg:top-[70%] lg:left-[18%] md:top-[35%] md:left-[60%] sm:top-[30%] sm:left-[45%] sm:absolute flex justify-end">
          <div className="sm:max-w-[320px] bg-white rounded-[28px] shadow-xl p-8 flex items-start gap-4 border border-black/5">
            <div className="bg-primary/10 p-3 rounded-full shrink-0">
              <BsPatchCheck className="size-6 text-[#8A5A00]" />
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="heading-sm text-black">
                AMI/AMS Certified Guides
              </h3>

              <p className="body-md text-black/60 leading-relaxed">
                Our educators hold international certifications in Montessori
                pedagogy.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 flex flex-col gap-10">
          {/* Heading */}
          <div className="flex flex-col gap-4">
            <h2 className="headline-lg text-black leading-tight max-w-[500px]">
              Three Pillars of The Scholars Montessori
            </h2>
          </div>

          {/* Pillars */}
          <div className="flex flex-col gap-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="flex items-start gap-5">
                <div
                  className={`p-3 rounded-full shrink-0 ${pillar.bg}`}
                >
                  {pillar.icon}
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="body-lg text-lg text-black">
                    {pillar.title}
                  </h3>

                  <p className="body-md text-black/60 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="flex items-center sm:justify-start justify-center gap-14 flex-wrap pt-4">
            <div className="flex flex-col items-center">
              <h3 className="display-xl text-dark-primary">12+</h3>
              <p className="body-md text-black/60">
                Years of Excellence
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="display-xl text-dark-primary">100%</h3>
              <p className="body-md text-black/60">
                Certified Guides
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;