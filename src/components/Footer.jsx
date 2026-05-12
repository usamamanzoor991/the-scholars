import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { GiFlowerPot } from "react-icons/gi";

const programs = [
    "Toddler (18m - 3y)",
    "Primary (3y - 6y)",
    "Elementary (Grades 1-6)",
    "Middle School (Grades 7-8)",
];

const quickLinks = [
    "Montessori Philosophy",
    "Admissions Process",
    "Campus Gallery",
    "Career Opportunities",
    "Contact Us",
];

const email = import.meta.env.VITE_EMAIL_ADDRESS;

const Footer = () => {
    return (
        <footer className="w-full flex flex-col">

            {/* Main Footer */}
            <div className="w-full flex items-start justify-center py-16 px-6 border-t border-black/5">
                <div className="container flex flex-col lg:flex-row gap-14">

                    {/* Brand Column */}
                    <div className="flex flex-col gap-5 lg:max-w-[220px]">
                        <div className="flex items-center gap-2">
                            <div className="bg-primary/10 p-2 rounded-full shrink-0">
                                <GiFlowerPot className="size-5 text-primary" />
                            </div>
                            <span className="body-md text-dark-primary leading-tight">
                                The Scholars<br />Montessori
                            </span>
                        </div>

                        <p className="body-md text-black/60 leading-relaxed">
                            Nurturing independence and natural curiosity through authentic
                            Montessori education since 2012.
                        </p>

                        <div className="flex items-center gap-3">
                            <a
                                href="#"
                                aria-label="Instagram"
                                className="size-9 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                            >
                                <FaInstagram className="size-4" />
                            </a>
                            <a
                                href="#"
                                aria-label="Facebook"
                                className="size-9 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                            >
                                <FaFacebookF className="size-4" />
                            </a>
                        </div>
                    </div>

                    {/* Nav Columns */}
                    <div className="flex flex-col sm:flex-row gap-14 flex-1 lg:justify-end">

                        {/* Programs */}
                        <div className="flex flex-col gap-5">
                            <h4 className="body-lg font-semibold text-black">Our Programs</h4>
                            <ul className="flex flex-col gap-4">
                                {programs.map((item) => (
                                    <li key={item}>
                                        <div className="body-md text-black/60 transition-colors ">
                                            {item}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div className="flex flex-col gap-5">
                            <h4 className="body-lg font-semibold text-black">Quick Links</h4>
                            <ul className="flex flex-col gap-4">
                                {quickLinks.map((item) => (
                                    <li key={item}>
                                        <a href="#" className="body-md text-black/60 hover:text-dark-primary transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Visit */}
                        <div className="flex flex-col gap-5">
                            <h4 className="body-lg font-semibold text-black">Visit Our Campus</h4>
                            <div className="flex flex-col gap-4">
                                <p className="body-md text-black/60 leading-relaxed sm:max-w-[200px] hover:text-dark-primary hover:cursor-pointer" onClick={() => window.open("https://www.google.com/maps/place/The+Scholars+Montessori+and+School/@33.6288423,73.0581652,16z/data=!4m6!3m5!1s0x38df95c430ff0d11:0x452ff1a80fd6eae4!8m2!3d33.6288425!4d73.0625431!16s%2Fg%2F11yhxvv06c?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D", "_blank")}>
                                    Street 1, opposite grand avenue event complex, Asghar Mall Scheme, Rawalpindi, 46300, Pakistan
                                </p>
                                <div className="flex flex-col gap-1">
                                    <div
                                        className="body-md text-black/60 hover:text-dark-primary transition-colors cursor-pointer"
                                        onClick={() => window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=Admission Inquiry&body=Hello,%20I%20want%20details%20about%20admissions.`, "_blank")}
                                    >
                                        {import.meta.env.VITE_EMAIL_ADDRESS}
                                    </div>
                                    <div
                                        className="body-md text-black/60 hover:text-dark-primary transition-colors cursor-pointer"
                                        onClick={() => window.open(`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`, "_blank")}
                                    >
                                        +{import.meta.env.VITE_WHATSAPP_NUMBER}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="w-full flex items-center justify-center py-5 px-6 border-t border-black/5">
                <div className="container">
                    <p className="body-md text-black/40 text-sm">
                        © 2024 The Scholars Montessori Academy. Nurturing the human spirit, one child at a time.
                    </p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;