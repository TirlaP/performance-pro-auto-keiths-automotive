import { SocialLogo } from "@/components/SocialLogo";
import {
   MotionDiv,
   MotionH1,
   MotionP,
   MotionSection,
} from "@/components/animations/motion";

export const onscreen = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const HeroSection = () => {
   return (
      <MotionSection
         initial="offscreen"
         whileInView="onscreen"
         viewport={{ once: true }}
         className="relative h-screen w-full bg-[url('/images/image-29.png')] bg-cover bg-center bg-no-repeat"
      >
         <MotionDiv
            variants={{
               offscreen: { opacity: 0, x: -100 },
               onscreen: { opacity: 1, x: 0, transition: { duration: 0.5 } },
            }}
            className="offscreen absolute top-1/2 hidden md:block lg:flex"
         >
            <SocialLogo isRotate />
         </MotionDiv>
         <div className="flex h-full w-full flex-col items-center justify-center font-header text-default">
            <MotionH1
               variants={{
                  offscreen: { opacity: 0, y: -100 },
                  onscreen,
               }}
               className="text-center text-4xl font-black sm:text-[50px] sm:leading-[50px] md:text-[70px] md:leading-[70px] lg:text-[90px] lg:leading-[90px] xl:text-[100px] xl:leading-[100px]"
            >
               <span>COMPLETE</span>
               <br />
               <span className="text-primary">CAR</span> <span className="text-tertiary">CARE</span>
            </MotionH1>
            <div className="flex items-center gap-x-2 md:gap-x-4">
               <MotionP
                  variants={{
                     offscreen: { opacity: 0, y: 100 },
                     onscreen,
                  }}
                  className="mt-2.5 grid justify-end text-xs font-extrabold leading-[14px] sm:text-sm md:mt-5 md:text-xl md:leading-5"
               >
                  <span className="text-end">ASE CERTIFIED</span>
                  <span className="text-end">TECHNICIANS</span>
               </MotionP>
               <MotionH1
                  variants={{
                     offscreen: { opacity: 0, y: 100 },
                     onscreen,
                  }}
                  className="text-center text-[50px] font-bold leading-[60px] md:text-[70px] md:font-[900] md:leading-[80px] lg:text-[80px] lg:leading-[90px] xl:text-[100px] xl:leading-[100px]"
               >
                  SINCE 1958
               </MotionH1>
            </div>

            <div className="mt-10 md:hidden">
               <SocialLogo />
            </div>
         </div>
      </MotionSection>
   );
};

export { HeroSection };

