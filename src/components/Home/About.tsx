import Image from "next/image";
import Link from "next/link";

import {
   MotionDiv,
   MotionH2,
   MotionP,
   MotionSection,
} from "@/components/animations/motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { buttonVariants } from "@/components/ui/button";
import { RightArrowIcon, SpannerIcon } from "@/components/ui/icons";

export interface FounderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const onscreen = { opacity: 1, x: 0, transition: { duration: 0.5 } };

const AboutSection = () => {
   return (
      <MotionSection className="overflow-hidden bg-background-dark bg-[url('/images/bg-1.svg')] bg-cover py-6 sm:py-12 lg:py-[150px]">
         <div className="container grid gap-y-5 px-5 font-header md:gap-y-10 lg:grid-cols-2 lg:gap-x-10 2xl:gap-x-12 2xl:px-0">
            <MotionDiv
               initial="offscreen"
               whileInView="onscreen"
               viewport={{ once: true }}
               variants={{
                  offscreen: { opacity: 0, x: -200 },
                  onscreen: {
                     opacity: 1,
                     x: 0,
                     transition: { duration: 0.5 },
                  },
               }}
               className="w-full items-center space-y-5 lg:space-y-7 xl:space-y-10"
            >
               <MotionH2
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true }}
                  variants={{
                     offscreen: { opacity: 0, x: -30 },
                     onscreen: {
                        opacity: 1,
                        x: 0,
                        transition: {
                           delay: 0.2,
                           bounce: 0.25,
                           type: "spring",
                        },
                     },
                  }}
                  className="text-center text-4xl font-black text-default md:text-5xl lg:text-start lg:text-6xl lg:leading-[50px] xl:leading-[70px]"
               >
                  KEITH'S AUTOMOTIVE - COMPLETE CAR CARE SINCE 1958
               </MotionH2>

               <MotionP
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true }}
                  variants={{
                     offscreen: { opacity: 0, x: -30 },
                     onscreen: {
                        opacity: 1,
                        x: 0,
                        transition: {
                           delay: 0.25,
                           bounce: 0.25,
                           type: "spring",
                        },
                     },
                  }}
                  className="text-center font-body text-base font-normal text-default-foreground md:text-lg md:leading-7 lg:text-start"
               >
                  With over 65 years of experience serving Salt Lake City, Keith's Automotive has been providing complete car care since 1958. We are ASE Certified Master Technicians specializing in everything but body work - from bumper to bumper repairs, safety & emissions testing, to decal renewals. Our commitment to quality workmanship and honest service has made us a trusted name in the community.
               </MotionP>

               <MotionDiv
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true }}
                  variants={{
                     offscreen: { opacity: 0, x: -30 },
                     onscreen: {
                        opacity: 1,
                        x: 0,
                        transition: {
                           delay: 0.3,
                           bounce: 0.25,
                           type: "spring",
                        },
                     },
                  }}
                  className="relative mx-auto max-w-[645px] rounded-l-md bg-[#24282F] p-5 py-10 md:p-10 lg:mx-0"
                  style={{
                     clipPath: "polygon(0 0, 94% 0, 100% 100%, 0% 100%)",
                  }}
               >
                  <p className="text-xs font-extrabold uppercase text-default-foreground sm:text-sm md:text-base xl:text-lg">
                     &quot;We Fix things GOOD, FAST & CHEAP. You may Choose any two: GOOD & FAST won&apos;t be CHEAP. CHEAP & GOOD won&apos;t be FAST. FAST & CHEAP won&apos;t be GOOD.&quot;
                  </p>
                  <SpannerIcon className="absolute right-20 top-1/2 -translate-y-2/4 fill-white opacity-10" />
               </MotionDiv>

               <Founder className="mx-auto flex size-fit items-center gap-x-8 lg:mx-0" />
            </MotionDiv>

            <MotionDiv
               initial="offscreen"
               whileInView="onscreen"
               viewport={{ once: true }}
               variants={{
                  offscreen: { opacity: 0, x: 40 },
                  onscreen,
               }}
            >
               <AspectRatio
                  ratio={151 / 119}
                  className="mx-auto size-fit max-w-[660px] lg:mx-0 lg:max-w-[755px]"
               >
                  <Image
                     src="/images/image-28.png"
                     alt=""
                     width={530}
                     height={530}
                     className="mx-auto size-fit rounded-md object-cover lg:mx-0"
                  />
               </AspectRatio>
            </MotionDiv>
         </div>
      </MotionSection>
   );
};

export { AboutSection };

const Founder = ({ className }: FounderProps) => {
   return (
      <MotionDiv
         initial="offscreen"
         whileInView="onscreen"
         viewport={{ once: true }}
         variants={{
            offscreen: { opacity: 0, x: -30 },
            onscreen: {
               opacity: 1,
               x: 0,
               transition: { delay: 0.35, bounce: 0.25, type: "spring" },
            },
         }}
         className={className}
      >
         <div className="leading-normal">
            <h4 className="text-lg font-extrabold uppercase leading-7 text-default">
               Keith's Team
            </h4>
            <p className="font-body text-lg font-normal text-default-foreground">
               ASE Certified Master Technicians
            </p>
         </div>
         <div>
            <Link
               className={buttonVariants({
                  variant: "skewBig",
                  size: "skewBig",
                  className: "h-[43px] w-[152px] md:h-[54px] md:w-[191px]",
               })}
               href="/about"
            >
               <span>LEARN MORE</span>
               <RightArrowIcon className="fill-white" />
            </Link>
         </div>
      </MotionDiv>
   );
};
