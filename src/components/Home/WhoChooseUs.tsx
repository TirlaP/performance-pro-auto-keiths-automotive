import Image from "next/image";

import { FeatureCard } from "./FeatureCard";
import { features1_data } from "@/lib/mock-data";
import { MotionDiv } from "../animations/motion";

const WhoChooseUs = () => {
   return (
      <section className="overflow-hidden bg-[#12151B] bg-[url('/images/bg-1.svg')] bg-cover">
         <div className="flex flex-col items-center gap-0 overflow-hidden lg:flex-row lg:items-end">
            <MotionDiv
               initial="offscreen"
               whileInView="onscreen"
               viewport={{ once: true }}
               variants={{
                  offscreen: { opacity: 0, x: -400 },
                  onscreen: {
                     opacity: 1,
                     x: 0,
                     transition: { duration: 0.5 },
                  },
               }}
               className="w-full lg:w-[900px]"
            >
               <Image
                  src="/images/image-21.png"
                  alt="who choose us"
                  width={900}
                  height={770}
                  className="h-full w-full"
               />
            </MotionDiv>
            <MotionDiv
               initial="offscreen"
               whileInView="onscreen"
               viewport={{ once: true }}
               variants={{
                  offscreen: { opacity: 0 },
                  onscreen: {
                     opacity: 1,
                     transition: { duration: 0.5 },
                  },
               }}
               className="grid w-full grid-cols-2 bg-background-darkSecondary lg:w-[920px]"
            >
               {features1_data.map((x, index) => (
                  <FeatureCard
                     key={x.id}
                     desc={x.desc}
                     i={x.id}
                     icon={x.icon}
                     title={x.title}
                     index={index + 1}
                  />
               ))}
            </MotionDiv>
         </div>

         <MotionDiv
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            className="container grid grid-cols-2 items-center justify-between gap-5 overflow-hidden px-3 py-14 font-header md:grid-cols-4 lg:flex-row lg:py-[150px]"
         >
            <MotionDiv
               variants={{
                  offscreen: { opacity: 0, x: -200 },
                  onscreen: {
                     opacity: 1,
                     x: 0,
                     transition: { duration: 0.5 },
                  },
               }}
            >
               <FanFactCard footnote="years experience" title="65+" />
            </MotionDiv>
            <MotionDiv
               variants={{
                  offscreen: { opacity: 0, x: 200 },
                  onscreen: {
                     opacity: 1,
                     x: 0,
                     transition: { duration: 0.5 },
                  },
               }}
            >
               <FanFactCard footnote="customer satisfaction" title="100%" />
            </MotionDiv>
            <MotionDiv
               variants={{
                  offscreen: { opacity: 0, x: -200 },
                  onscreen: {
                     opacity: 1,
                     x: 0,
                     transition: { duration: 0.5 },
                  },
               }}
            >
               <FanFactCard footnote="vehicles serviced" title="50K+" />
            </MotionDiv>
            <MotionDiv
               variants={{
                  offscreen: { opacity: 0, x: 200 },
                  onscreen: {
                     opacity: 1,
                     x: 0,
                     transition: { duration: 0.5 },
                  },
               }}
            >
               <FanFactCard footnote="ASE Master Certified" title="✓" />
            </MotionDiv>
         </MotionDiv>
      </section>
   );
};

const FanFactCard = ({
   footnote,
   title,
}: {
   title: string;
   footnote: string;
}) => {
   return (
      <div className="flex w-full flex-col items-center justify-center gap-y-2.5 lg:gap-y-5">
         <div className="flex h-[63px] w-[138px] skew-x-6 items-center justify-center rounded-md bg-background-darkSecondary text-[42px] font-black text-tertiary *:block *:-skew-x-6 lg:h-[90px] lg:w-[198px] lg:text-6xl">
            <h2>{title}</h2>
         </div>
         <h3 className="text-center text-[13px] font-extrabold uppercase text-default-foreground lg:text-lg">
            {footnote}
         </h3>
      </div>
   );
};

export { WhoChooseUs };
