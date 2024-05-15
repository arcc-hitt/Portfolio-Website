// import React, { useState, useEffect, useRef } from "react";
// import { Tilt } from "react-tilt";
// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import { github } from "../assets";
// import { SectionWrapper } from "../hoc";
// import { projects } from "../constants";
// import { fadeIn, textVariant } from "../utils/motion";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import ReactPaginate from "react-paginate";

// const ProjectCard = ({
//   index,
//   name,
//   description,
//   tags,
//   image,
//   source_code_link,
// }) => {
//   const h3Ref = useRef(null);

//   const adjustFontSize = () => {
//     const h3Element = h3Ref.current;
//     if (!h3Element) return;

//     const lineHeight = parseInt(window.getComputedStyle(h3Element).lineHeight, 10);
//     const clientHeight = h3Element.clientHeight;
//     const fontSize = parseInt(window.getComputedStyle(h3Element).fontSize, 10);

//     const lines = clientHeight / lineHeight;

//     const minFontSize = 14; // Define a minimum font size
//     const maxReductionFactor = 0.75; // Maximum factor for reducing font size

//     if (lines > 1) {
//       const newFontSize = Math.max(
//         fontSize * (1 - (lines - 1) * maxReductionFactor),
//         minFontSize
//       );
//       h3Element.style.fontSize = `${newFontSize}px`;
//     }
//   };

//   useEffect(() => {
//     adjustFontSize();
//     window.addEventListener("resize", adjustFontSize);

//     return () => {
//       window.removeEventListener("resize", adjustFontSize);
//     };
//   }, []);

//   return (
//     <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>    
//       <Tilt
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
//       >
//         <div className='relative w-full h-[230px]'>
//           <img
//             src={image}
//             alt='project_image'
//             className='w-full h-full object-cover rounded-2xl'
//           />

//           <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
//             <div
//               onClick={() => window.open(source_code_link, "_blank")}
//               className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
//             >
//               <img
//                 src={github}
//                 alt='source code'
//                 className='w-1/2 h-1/2 object-contain'
//               />
//             </div>
//           </div>
//         </div>

//         <div className='mt-5'>
//           <h3 className='text-white font-bold text-[24px] multi-line-text' ref={h3Ref}>{name}</h3>
//           <p className='mt-2 text-secondary text-[14px]'>{description}</p>
//         </div>

//         <div className='mt-4 flex flex-wrap gap-2'>
//           {tags.map((tag) => (
//             <p
//               key={`${name}-${tag.name}`}
//               className={`text-[14px] ${tag.color}`}
//             >
//               #{tag.name}
//             </p>
//           ))}
//         </div>
//       </Tilt>
//     </motion.div>
//   );
// };

// const ProjectsPerPage = 3;

// const chunkArray = (array, chunkSize) => {
//   const chunkedArray = [];
//   for (let i = 0; i < array.length; i += chunkSize) {
//     chunkedArray.push(array.slice(i, i + chunkSize));
//   }
//   return chunkedArray;
// };

// const Works = () => {
//   const chunkedProjects = chunkArray(projects, ProjectsPerPage);

//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={`${styles.sectionSubText} `}>My work</p>
//         <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
//       </motion.div>

//       <div className='w-full flex'>
//         <motion.p
//           variants={fadeIn("", "", 0.1, 1)}
//           className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
//         >
//           Following projects showcases my skills and experience through
//           real-world examples of my work. Each project is briefly described with
//           links to code repositories and live demos in it. It reflects my
//           ability to solve complex problems, work with different technologies,
//           and manage projects effectively.
//         </motion.p>
//       </div>
      
//       <div className='mt-20'>
//         <Carousel
//             showThumbs={false}
//             infiniteLoop={true}
//             autoPlay={true}
//             interval={5000}
//           >
//             {chunkedProjects.map((chunk, index) => (
//               <div key={`slide-${index}`} className="flex justify-center items-center">
//                 {chunk.map((project, projectIndex) => (
//                   <div key={`project-${projectIndex}`} className="mx-4 text-left">
//                     <ProjectCard {...project} />
//                   </div>
//                 ))}
//               </div>
//             ))}
//         </Carousel>
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(Works, "work");
import React, { useState, useEffect, useRef } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const h3Ref = useRef(null);

  const adjustFontSize = () => {
    const h3Element = h3Ref.current;
    if (!h3Element) return;

    const lineHeight = parseInt(window.getComputedStyle(h3Element).lineHeight, 10);
    const clientHeight = h3Element.clientHeight;
    const fontSize = parseInt(window.getComputedStyle(h3Element).fontSize, 10);

    const lines = clientHeight / lineHeight;

    const minFontSize = 14; // Define a minimum font size
    const maxReductionFactor = 1; // Maximum factor for reducing font size

    if (lines > 1) {
      const newFontSize = Math.max(
        fontSize * (1 - (lines - 1) * maxReductionFactor),
        minFontSize
      );
      h3Element.style.fontSize = `${newFontSize}px`;
    }
  };

  useEffect(() => {
    adjustFontSize();
    window.addEventListener("resize", adjustFontSize);

    return () => {
      window.removeEventListener("resize", adjustFontSize);
    };
  }, []);

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>    
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px] multi-line-text' ref={h3Ref}>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
