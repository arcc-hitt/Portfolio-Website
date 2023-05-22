import React from 'react'
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { social } from "../constants";
import { fadeIn } from "../utils/motion";
import Profile from "./Profile";

const Social = ({index, title, icon, social_link}) => {
  return (
      <motion.div
          variants={fadeIn("right", "spring", 0.5*index, 0.75)}
          className='w-[52px] green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div className='card-img_hover cursor-pointer'>
          <div
            className='bg-tertiary rounded-[20px] py-1 px-1 w-[50px] h-[50px] flex justify-evenly
            items-center flex-col card-img_hover cursor-pointer'
            onClick={() => window.open(social_link, "_blank")}
          >
            <img
              src={icon}
              alt={title}
              className='w-full h-full object-contain rounded-2xl'
            />
          </div>
        </div>
      </motion.div>
  );
}

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

        
        <div>
          <h1 className= {`${styles.heroHeadText}text-white`}>
            Hi!&nbsp;I'm <span className='text-[#915eff]'>Archit</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            I am a CSE Undergraduate and <br className='sm:block hidden'/>a budding Full-Stack Web Developer.
          </p>
          <div className='mt-4 flex flex-wrap gap-6'>
            {social.map((social, index) => (
              <Social key={`social-${index}`} index={index} {...social}/>
            ))}
          </div>
        </div>
      </div>         
      
      <ComputersCanvas/>

      <div className='absolute right-0 top-0 px-16 py-10 hidden xl:block'>
          <Profile/>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev
              animate={{y: [0, 24, 0]}}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
              
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero