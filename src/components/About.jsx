import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt>
      <motion.div></motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <div className={`${styles.paddingX} w-full h-screen mx-auto bg-primary`}>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p className="mt-4 text-secondary lg:text-lg l md:text-base sm:text-sm lg:leading-7 md:left-5">
        Hello! I'm Nishit Darji, a passionate web development student.
        Proficient in HTML, CSS, and JavaScript, I specialize in building
        dynamic web applications with React.js and sleek designs using Tailwind
        CSS. I also enjoy crafting user-friendly designs with Figma and Canva.
        Eager to collaborate and contribute to innovative web projects. Let's
        connect and build something amazing together!
      </motion.p>

      <div>
        {services.map((service, index) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </div>
  );
};

export default About;
