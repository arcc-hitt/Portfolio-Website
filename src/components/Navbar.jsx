import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants/index";
import { logo, menu, close } from "../assets";
import { socials } from "../constants";
import { fadeIn } from "../utils/motion";
import { motion } from "framer-motion";

const Social = ({
  index,
  icon,
  title,
  social_link,
}) => {
  return (
    <>
      <motion.div
        variants={fadeIn("right", "spring", 0.5, 0.75)}
        initial="hidden"
        animate="show"
        className=' w-fit green-pink-gradient p-[1px] rounded-[10px] shadow-card'
      >
        <div className='bg-tertiary p-1 rounded-[10px] w-10 h-10 relative group overflow-hidden cursor-pointer'>
          <div className="absolute top-0 -inset-full w-10 h-10 z-5 block transform -skew-x-13
          bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
            <div className='flex card-img_hover'>
              <div
                onClick={() => window.open(social_link, "_blank")}
                className='flex justify-center items-center'
              >
                <img
                  src={icon}
                  alt={title}
                  className='w-full h-full object-contain rounded-[10px]'
                />
              </div>
            </div>
          </div>
      </motion.div>
    </>
  );
};

const Navbar = () => {
  
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  
  return (
    <nav
    className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to={"/"}
          className='flex items-center gap-2'
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt="logo" className='w-10 h-10 object-cover' />
          <p className='text-white text-[18px] cursor-pointer flex'>
            Portfolio&nbsp;<span className='sm:inline hidden'>|&nbsp;Archit</span>
          </p>
        </Link>
        
          <ul className='list-none hidden sm:flex flex-row gap-10'>
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${active === link.title ? "text-white" : "text-secondary"}
                hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>

        <div className='hidden sm:flex flex-wrap gap-6'>
          {socials.map((social, index) => (
            <Social key={`social-${index}`} index={index} {...social}/>
          ))}
        </div>
        
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu} alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-primary absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li key={link.id}
                className={`${active === link.title ? "text-white" : "text-secondary"}
                hover:text-white font-poppins text-[16px] font-medium cursor-pointer`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.title);
                }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar