import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { shaq, bwmap, worldmap } from '../assets';
import SocialMenu from './socialMenu';

const Hero = () => {
  return (
    <section id="hero" className="relative flex sm:flex-row flex-col w-full h-screen mx-auto sm:bg-hero bg-hero-mobile overflow-hidden">
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}>
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>
          <div>
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase pr-4 sm:pr-6`} style={{ marginLeft: '-60px' }}>
              Hi, Welcome to {' '}
              <span
                className="sm:text-battleGray sm:text-[7vw] 
                text-eerieBlack text-[7vw] font-mova
                font-extrabold uppercase"
                style={{ color: '#6194fb' }}>
                ERA
              </span>
                
            </h1>
            <section  className="footer-follow" style={{ fontSize: 48, display: 'flex', gap: '20px', marginLeft:'25px' }}>
          <SocialMenu />
          </section>
            <p className={`${styles.heroSubText} mt-2 text-eerieBlack text-centre`}>
              The Rising Of A New ERA <br className="sm:block hidden" />
              <br className="sm:block hidden" />
            <br className="sm:block hidden" />
            <br className="sm:block hidden" />


            <p className={`mt-2 text eerieBlack text-[1.4vw] items-centre text-centre pl-6`}>
              Team for Autonomous Robotics
            </p>
            </p>
            
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"></div>

          <div></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center">
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
        <div>
        <img
            className="mt-[16vw] ml-[25.5vw] 
            lg:ml-[44vw] md:ml-[33vw] xmd:ml-[33vw] 2xl:ml-[52vw]
            sm:h-[80vh] md:h-[60vh] xl:h-[70vh]"
            src={shaq}
            alt="ROBO"
          />
        </div>
      </section>
    </section>
  );
};

export default Hero;
