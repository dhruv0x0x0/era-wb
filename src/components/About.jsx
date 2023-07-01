import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';


const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        We are a team of undergraduates spanning from various majors and dedicated towards developing intelligent solutions for implementing autonomous robotics. 
        We are working on fabricating and realising an autonomous robot for the competition IEEE ICRA DJI RoboMasters Challenge 2019.

        The Competition is scheduled in the May of 2019 at Montreal, Canada.

        The challenge involves working on realtime artificial intelligent systems

        Members with different areas of expertise work together on this project.

        The challenge is being sponsored by giants in the field of robotics and AI like NVIDIA and Apple
      </motion.p>
    </div>
  );
};

export default SectionWrapper(About, 'aboutus');
