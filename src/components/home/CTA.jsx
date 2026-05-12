import React from "react";

const CTA = () => {
    return (
        <section id="contact" className="w-full flex items-center justify-center pt-22 pb-4 px-6">
            <div className="container">
                <div className="w-full bg-primary rounded-[32px] px-12 py-16 flex flex-col items-center gap-6 text-center">

                    <h2 className="headline-lg text-dark-primary leading-tight max-w-2xl">
                        Discover the Montessori Difference
                    </h2>

                    <p className="body-md text-dark-primary/70 leading-relaxed max-w-md">
                        Join a community where children are empowered to lead their own
                        educational journey. Schedule your campus tour today.
                    </p>

                    <div className="flex items-center gap-4 flex-wrap justify-center pt-2">
                        <button
                            className="body-md bg-dark-primary text-primary font-semibold px-8 py-4 rounded-full hover:opacity-90 hover:cursor-pointer transition-all duration-300"
                            onClick={() => window.open(`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=Hello%20I%20want%20to%20take%20a%20tour%20of%20your%20school`, "_blank")}
                        >
                            Schedule a Tour
                        </button>

                        <button
                            className="body-md bg-background/30 text-dark-primary font-semibold px-8 py-4 rounded-full border border-dark-primary/20 hover:bg-background/40 hover:cursor-pointer transition-all duration-300"
                            onClick={() => window.open(`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=Hello%20I%20want%20to%20request%20information%20about%20your%20school`, "_blank")}
                        >
                            Request Information
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CTA;