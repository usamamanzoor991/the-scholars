import React, { useState } from "react";
import { GiFlowerPot } from "react-icons/gi";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Programs", href: "#programs" },
  { name: "About", href: "#about" },
  { name: "Curriculum", href: "#curriculum" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const handleNavigate = (href) => {
  const target = document.querySelector(href);
  if (!target) return;

  const rect = target.getBoundingClientRect();
  if (rect.top < 0 || window.innerHeight + window.scrollY >= document.body.scrollHeight) {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });  // Instant top on overscroll
  } else {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="w-full fixed top-0 left-0 z-50 flex items-center justify-center px-6 bg-background border-b border-black/5">
        <div className="container flex items-center justify-between py-4 gap-8">

          {/* Brand */}
          <a
            href="#hero"
            onClick={() => handleNavigate("#hero")}
            className="flex items-center gap-2 shrink-0"
          >
            <div className="bg-primary/10 p-2 rounded-full">
              <GiFlowerPot className="size-5 text-primary" />
            </div>
            <span className="body-lg font-semibold text-dark-primary leading-tight">
              The Scholars <br />Montessori & School
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6 flex-1 justify-center">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.name} className="relative group">
                  <button
                    className="flex items-center gap-1 body-md text-dark-primary/80 font-medium hover:text-dark-primary transition-colors border-b-2 border-primary pb-0.5"
                  >
                    {link.name}
                    <FiChevronDown className="size-3.5 mt-0.5 group-hover:rotate-180 transition-transform duration-200" />
                  </button>

                  {/* Dropdown */}
                  <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 pt-4 absolute top-full left-0">
                    <div className="bg-white rounded-[20px] shadow-xl border border-black/5 p-2 flex flex-col min-w-[220px]">
                      {link.children.map((child) => (
                        <a
                          key={child.name}
                          href={child.href}
                          onClick={() => handleNavigate(child.href)}
                          className="body-md text-black/70 hover:text-dark-primary hover:bg-primary/10 rounded-xl px-4 py-2.5 transition-colors"
                        >
                          {child.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavigate(link.href)}
                  className="body-md text-black/70 hover:text-dark-primary transition-colors whitespace-nowrap"
                >
                  {link.name}
                </a>
              )
            )}
          </div>

          {/* Enroll + Hamburger */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              className="hidden sm:block body-md bg-primary text-dark-primary font-semibold px-6 py-3 rounded-full hover:opacity-90 hover:scale-105 active:scale-95 cursor-pointer transition-all duration-300"
              onClick={() => window.open(`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=Hello%20I%20want%20to%20take%20admission%20in%20your%20school`, "_blank")}
            >
              Enroll Now
            </button>

            <button
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
              className="lg:hidden size-10 flex items-center justify-center rounded-full bg-primary/10 text-dark-primary hover:bg-primary/20 transition-colors"
            >
              <FiMenu className="size-5" />
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[300px] bg-background shadow-2xl flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${drawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-black/5">
          <div className="flex items-center gap-2">
            <div className="bg-primary/10 p-2 rounded-full">
              <GiFlowerPot className="size-4 text-primary" />
            </div>
            <span className="body-md font-semibold text-dark-primary">The Scholars</span>
          </div>
          <button
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
            className="size-9 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition-colors"
          >
            <FiX className="size-5 text-black/60" />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col gap-1 px-4 py-6 flex-1 overflow-y-auto">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.name} className="flex flex-col">
                <button
                  onClick={() => setProgramsOpen((o) => !o)}
                  className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-primary/10 transition-colors body-md text-dark-primary font-medium"
                >
                  {link.name}
                  <FiChevronDown
                    className={`size-4 transition-transform duration-200 ${programsOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {programsOpen && (
                  <div className="flex flex-col pl-4 gap-1">
                    {link.children.map((child) => (
                      <a
                        key={child.name}
                        href={child.href}
                        onClick={() => {
                          handleNavigate(child.href);
                          setDrawerOpen(false);
                        }}
                        className="px-4 py-2.5 rounded-xl body-md text-black/60 hover:text-dark-primary hover:bg-primary/10 transition-colors"
                      >
                        {child.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  handleNavigate(link.href);
                  setDrawerOpen(false);
                }}
                className="px-4 py-3 rounded-xl body-md text-black/70 hover:text-dark-primary hover:bg-primary/10 transition-colors"
              >
                {link.name}
              </a>
            )
          )}
        </div>

        {/* Drawer CTA */}
        <div className="px-6 py-6 border-t border-black/5">
          <button
            className="w-full body-md bg-primary text-dark-primary font-semibold py-4 rounded-full hover:opacity-90 hover:scale-105 active:scale-95 cursor-pointer transition-all duration-300"
            onClick={() => window.open(`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=Hello%20I%20want%20to%20take%20admission%20in%20your%20school`, "_blank")}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;