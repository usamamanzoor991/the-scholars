import React from "react";
import {
    PiBroom,
    PiShapes,
    PiCalculator,
    PiArrowSquareOut,
    PiGlobeHemisphereWest,
    PiLeaf,
} from "react-icons/pi";

const curriculumAreas = [
    {
        icon: <PiBroom className="size-14 text-dark-primary" />,
        title: "Practical Life",
        description:
            "Developing concentration, coordination, and independence through real-world activities like food prep and plant care.",
    },
    {
        icon: <PiShapes className="size-14 text-[#7A52CC]" />,
        title: "Sensorial",
        description:
            "Refining the senses through tactile, visual, and auditory materials that reveal the mathematical order of the world.",
    },
    {
        icon: <PiCalculator className="size-14 text-[#B05B5B]" />,
        title: "Mathematics",
        description:
            "Moving from concrete to abstract with tactile golden beads and specialized manipulative materials.",
    },
    {
        icon: <PiArrowSquareOut className="size-14 text-dark-primary" />,
        title: "Language",
        description:
            "Rich immersion in oral expression, phonics, grammar, and creative writing at each child’s own pace.",
    },
    {
        icon: <PiGlobeHemisphereWest className="size-14 text-[#7A52CC]" />,
        title: "Cultural Studies",
        description:
            "Exploring Geography, Science, and History to build a global perspective and respect for the environment.",
    },
    {
        icon: <PiLeaf className="size-14 text-[#B05B5B]" />,
        title: "Adolescent Erdkinder",
        description:
            "The “Land-Children” program for middle schoolers, connecting academics with meaningful physical and social work.",
    },
];

const Curriculum = () => {
    return (
        <section id="curriculum" className="w-full min-h-screen flex items-center justify-center pt-22 pb-4 px-6">
            <div className="container flex flex-col gap-4">
                {/* Header */}
                <div className="flex flex-col items-start justify-between gap-4">
                    <h2 className="headline-lg text-black">
                        Curriculum
                    </h2>
                    <div className="w-full flex justify-between">
                        <p className="body-md text-black/60">
                            A comprehensive approach to human development.
                        </p>

                        <button className="flex items-center gap-2 body-lg text-primary font-semibold transition-all duration-300 hover:translate-x-1">
                            <span>View Full Curriculum</span>
                            <span>→</span>
                        </button>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                    {curriculumAreas.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white hover:scale-105 transition-all duration-300 cursor-pointer rounded-[28px] overflow-hidden border border-black/5 shadow-sm flex flex-col"
                        >
                            {/* Icon Section */}
                            <div className="bg-black/[0.03] min-h-[180px] flex items-center justify-center">
                                {item.icon}
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col gap-4">
                                <h3 className="body-md text-dark-primary">
                                    {item.title}
                                </h3>

                                <p className="body-md text-black/60 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Curriculum;