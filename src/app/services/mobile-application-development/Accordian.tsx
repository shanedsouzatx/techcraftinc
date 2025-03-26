"use client"
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Accordioninner = () => {
  const [expandedPanel, setExpandedPanel] = useState<string | null>(null);

  const togglePanel = (panelId: string) => {
    setExpandedPanel((prevId) => (prevId === panelId ? null : panelId));
  };

  return (
    <div className="py-9 top-0 -z-50 bg-[url('https://res.cloudinary.com/dhggagqst/image/upload/v1742503688/White_Bg-08_rsfc7s.png')] bg-cover bg-center bg-no-repeat">

    <div className="max-w-6xl mx-auto py-9 px-4 md:px-0  ">
      {/* Text Section */}
      <div data-aos="zoom-in" className="text-center md:text-left">
      <h2 className="text-2xl md:text-5xl text-center font-bold bg-gradient-to-t from-[#48128A] to-[#8B3791] text-transparent bg-clip-text mb-4">
  BUILD POWERFUL APPLICATIONS THAT TRANSFORM YOUR BUSINESS
</h2>
<p className="text-center text-sm md:text-base text-[#687087]">
  In today's digital landscape, custom applications are essential for businesses looking to streamline operations and create exceptional user experiences.  
  Simply having a basic website isn't enough—you need tailored software solutions that address your specific business challenges.  
  At Tech Craft, we specialize in developing custom applications that enhance efficiency, improve customer engagement, and drive business growth.  
  Through innovative technology stacks, user-centered design, and agile development methodologies, we ensure your applications not only meet technical requirements but also deliver real business value.
</p>

      </div>

      {/* Accordion Section */}
      <div className="" data-aos="zoom-in">
        <h2 className="text-xl text-center md:text-2xl font-semibold text-[#333] my-6 md:my-8">
         
          DISCOVER THE ADVANTAGES OF TECH CRAFT'S APPLICATION DEVELOPMENT SERVICES
        </h2>

        {/* Panel Template */}
        { [
  {
    id: "accordion-panel-1",
    title: "What types of applications can you develop?",
    content: `We develop a wide range of applications including web applications, mobile apps (iOS and Android), progressive web apps (PWAs), enterprise software solutions, e-commerce platforms, and custom CRM/ERP systems. Our expertise spans across industries including healthcare, finance, retail, education, and manufacturing.`,
  },
  {
    id: "accordion-panel-2",
    title: "How does your application development process work?",
    content: `Our process follows agile methodology with clear phases: discovery and planning (requirements gathering), design (UI/UX prototyping), development (iterative coding sprints), testing (quality assurance), deployment, and ongoing maintenance. We emphasize collaboration, with regular client check-ins and demonstrations throughout the project lifecycle.`,
  },
  {
    id: "accordion-panel-3",
    title: "What technologies do you use for application development?",
    content: `We utilize modern technology stacks tailored to each project's needs. For frontend, we work with React, Angular, Vue.js, and Next.js. Backend technologies include Node.js, Python, Java, and .NET. We're experienced with cloud platforms (AWS, Azure, Google Cloud), databases (SQL and NoSQL), and containerization technologies like Docker and Kubernetes.`,
  },
  {
    id: "accordion-panel-4",
    title: "How do you ensure application security and scalability?",
    content: `Security is built into our development process with practices like code reviews, vulnerability scanning, and penetration testing. For scalability, we implement cloud-native architectures, microservices when appropriate, and design systems that can handle increased loads. We also conduct performance testing to identify and address bottlenecks before deployment.`,
  },
  {
    id: "accordion-panel-5",
    title: "What ongoing support do you provide after launch?",
    content: `We offer comprehensive post-launch support including bug fixes, performance monitoring, security updates, and feature enhancements. Our maintenance packages can be tailored to your needs, from basic support to dedicated development teams for continuous improvement. We also provide documentation and training to ensure your team can effectively use the application.`,
  },
].map((panel) => (
          <motion.div
            key={panel.id}
            className="mb-4 overflow-hidden rounded-xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: "auto",
              transition: { duration: 0.4, ease: "easeInOut" }, 
            }}
          >
            <h2>
              <motion.button
                type="button"
                onClick={() => togglePanel(panel.id)}
                className="flex items-center w-full p-5 font-medium text-white bg-gradient-to-b from-[#48128A] to-[#8B3791]   border-b-0 rounded-full focus:ring-4 focus:ring-white dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 gap-3 hover:shadow-lg transform hover:scale-80 transition duration-300 ease-in-out"
                aria-expanded={expandedPanel === panel.id}
                aria-controls={`accordion-content-${panel.id}`}
                whileHover={{ scale: 0.99 }} // Smooth scale on hover
              >
                {panel.title}
                <svg
                  className={`w-3 h-3 shrink-0 ml-auto transition-transform duration-300 ${
                    expandedPanel === panel.id ? "rotate-180" : "rotate-0"
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </motion.button>
            </h2>
            <AnimatePresence>
              {expandedPanel === panel.id && (
                <motion.div
                  id={`accordion-content-${panel.id}`}
                  className="shadow-lg bg-gradient-to-b from-white via-white to-[#BCBEC0]/70  p-4"
                  aria-labelledby={`accordion-button-${panel.id}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                    transition: { duration: 0.4, ease: "easeInOut" }, 
                  }}
                  exit={{ opacity: 0, height: 0, transition: { duration: 0.3 } }}
                >
                  <p
                    className="text-sm md:text-base text-[#687087] my-4"
                    dangerouslySetInnerHTML={{ __html: panel.content }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Accordioninner;

