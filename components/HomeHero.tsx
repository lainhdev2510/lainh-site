"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/HeroHightlight";
import AnimationContainer from "./ui/AnimationContainer";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import {
  SiExpo,
  SiGo,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function HomeHero() {
  const animation = {
    hide: { x: -8, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };
  return (
    <HeroHighlight>
      <AnimationContainer>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          Hi, I&apos;m
          <Highlight className="text-black dark:text-white ml-2">
            Nguyen Huu Lai
          </Highlight>
          <br />
        </motion.h1>
        <motion.p className="mt-2">
          Insights from an experienced full stack engineer who loves to develop
          applications from passion.
        </motion.p>
      </AnimationContainer>
      <AnimationContainer>
        <motion.h6 className="mt-10 my-2 font-bold text-lg text-center">
          My favorite tech stack
        </motion.h6>
        <TooltipProvider delayDuration={0}>
          <motion.ul
            initial="hide"
            animate="show"
            transition={{ delayChildren: 0.2, staggerChildren: 0.05 }}
            className="flex flex-wrap items-center justify-center mx-auto gap-x-5 lg:mx-0"
          >
            <motion.li variants={animation} className="opacity-100">
              <Tooltip>
                <TooltipTrigger>
                  <div className="transition duration-300 ease-out text-neutral-700 hover:text-white">
                    <SiNextdotjs className="w-6 h-6" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Next.js</p>
                </TooltipContent>
              </Tooltip>
            </motion.li>
            <motion.li variants={animation} className="opacity-100">
              <Tooltip>
                <TooltipTrigger>
                  <div className="transition duration-300 ease-out text-neutral-700 hover:text-[#61DAFB]">
                    <SiReact className="w-6 h-6" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>React</p>
                </TooltipContent>
              </Tooltip>
            </motion.li>
            <motion.li variants={animation} className="opacity-100">
              <Tooltip>
                <TooltipTrigger>
                  <div className="transition duration-300 ease-out text-neutral-700 hover:text-[#61DAFB]">
                    <SiExpo className="w-6 h-6" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Expo</p>
                </TooltipContent>
              </Tooltip>
            </motion.li>
            <motion.li variants={animation} className="opacity-100">
              <Tooltip>
                <TooltipTrigger>
                  <div className="transition duration-300 ease-out text-neutral-700 hover:text-[#3178C6]">
                    <SiTypescript className="w-6 h-6" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Typescript</p>
                </TooltipContent>
              </Tooltip>
            </motion.li>
            <motion.li variants={animation} className="opacity-100">
              <Tooltip>
                <TooltipTrigger>
                  <div className="transition duration-300 ease-out text-neutral-700 hover:text-[#38B2AC]">
                    <SiTailwindcss className="w-6 h-6" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Tailwind CSS</p>
                </TooltipContent>
              </Tooltip>
            </motion.li>
            <motion.li variants={animation} className="opacity-100">
              <Tooltip>
                <TooltipTrigger>
                  <div className="transition duration-300 ease-out text-neutral-700 hover:text-[#8CC84B]">
                    <SiNodedotjs className="w-6 h-6" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Node.js</p>
                </TooltipContent>
              </Tooltip>
            </motion.li>
            <motion.li variants={animation} className="opacity-100">
              <Tooltip>
                <TooltipTrigger>
                  <div className="transition duration-300 ease-out text-neutral-700 hover:text-[#764ABC]">
                    <SiPostgresql className="w-6 h-6" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Postgresql</p>
                </TooltipContent>
              </Tooltip>
            </motion.li>
            <motion.li variants={animation} className="opacity-100">
              <Tooltip>
                <TooltipTrigger>
                  <div className="transition duration-300 ease-out text-neutral-700 hover:text-[#E535AB]">
                    <SiGo className="w-6 h-6" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Go</p>
                </TooltipContent>
              </Tooltip>
            </motion.li>
          </motion.ul>
        </TooltipProvider>
      </AnimationContainer>
      <AnimationContainer>
        <motion.h6 className="text-center mt-10 font-bold text-lg">
          About me
        </motion.h6>
        <motion.p className="text-sm max-w-screen-sm mx-auto">
          I&apos;m an 5 years experience full stack engineer. beyond the world of
          gears and machines, I craft engaging and responsive web applications
          using React and delve into the realm of mobile app development with
          React Native. Apart from coding, I express my creative side by
          designing sleek interfaces using Figma. Now, I&apos;m learning Golang
          to improve my backend skills. Let&apos;s build something amazing together!
          ✨
        </motion.p>
      </AnimationContainer>
    </HeroHighlight>
  );
}
