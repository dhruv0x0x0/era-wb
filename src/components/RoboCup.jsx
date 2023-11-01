import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-30 h-30 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const RoboCup = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h2 className={styles.sectionHeadTextLight}>RoboCup MSL</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
RoboCup Middle Size League (MSL) is an international competition where teams of 5
fully autonomous robots play soccer with a regular-size FIFA soccer ball. The vision of the competition is to reach a level in autonomous robots where a team of fully autonomous robots can win against the most recent FIFA World Cup winner by the year 2050. We aim to be among the first entrants from India and not only compete but win as undergraduates against teams that comprise a significant number of PG members. This makes our campaign ever more challenging and drives us to work harder than ever. To know more about the competition and our latest work, click here.

      </motion.p>
      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <br/><br/><br/> */}
      {/* <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
1.  <b>Innovative R&D Hub</b>: Dive into an exceptional pool of talent. Immerse yourself in our team's expertise, fostering dynamic collaborations to pioneer groundbreaking solutions and drive mutual growth.<br/>
2.  <b>Branding Brilliance</b>: Flaunt your brand on robots, banners, and uniforms, capturing attention through thrilling competitions, widespread media coverage, and the power of word-of-mouth buzz.<br/>
3.  <b>Empowering Future Leaders</b>: Empower gifted students through invaluable guidance and mentorship, all while increasing your company's visibility among budding professionals.<br/>
4.  <b>Digital Dominance</b>: Amplify your online presence across our website and social media channels, magnifying your outreach and forging connections with a broader audience, all through the influential network of Team ERA.
      </motion.p> */}
<br/><br/><br/> 
    </div>
  );
};

export default SectionWrapper(RoboCup, 'robocup');
