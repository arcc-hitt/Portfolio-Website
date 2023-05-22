import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { profile } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Profile = () => {
  return (
    <Tilt className='sm:w-[360px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-5 w-full h-[260px] flex justify-evenly items-center flex-col'
        >
          <img src={profile} alt={profile} className='w-full h-full object-cover-top rounded-2xl'/>
        </div>
        
      </motion.div>
    </Tilt>
  );
};

export default SectionWrapper(Profile, "");