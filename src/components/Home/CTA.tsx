import Image from "next/image";

import { MotionDiv } from "@/components/animations/motion";
import { Button } from "@/components/ui/button";
import { RightArrowIcon } from "@/components/ui/icons";

const CtaSection = () => {
   return (
      <section className="overflow-hidden bg-primary bg-[url('/images/bg-2.svg')] bg-cover px-5 py-8 font-header md:py-[69px] xl:px-0">
         <div className="container relative flex flex-col items-center justify-between gap-y-5 md:flex-row md:gap-y-0">
            <MotionDiv
               initial="offscreen"
               whileInView="onscreen"
               viewport={{ once: true }}
               variants={{
                  offscreen: { opacity: 0, y: -50 },
                  onscreen: {
                     opacity: 1,
                     y: 0,
                     transition: { duration: 0.5 },
                  },
               }}
            >
               <h2 className="text-center text-2xl font-black uppercase text-default md:text-start md:text-4xl lg:text-5xl xl:text-6xl">
                  get auto service
               </h2>
               <p className="text-center text-lg font-extrabold uppercase text-default md:text-start">
                  Small neighborhood repair shop with the customer in mind
               </p>
            </MotionDiv>
            <Image
               className="absolute left-1/2 top-1/2 hidden -translate-y-1/2 translate-x-1/3 md:flex"
               src="/images/icon-10.png"
               alt="cta"
               width={204}
               height={126}
            />
            <MotionDiv
               initial="offscreen"
               whileInView="onscreen"
               viewport={{ once: true }}
               variants={{
                  offscreen: { opacity: 0, y: 50 },
                  onscreen: {
                     opacity: 1,
                     y: 0,
                     transition: { duration: 0.5 },
                  },
               }}
               className="flex flex-col items-center justify-center gap-y-2"
            >
               <Button
                  size="skewBig"
                  variant="skewBig"
                  className="ml-1.5 h-[60px] w-[200px] rounded-sm bg-black hover:bg-black/80"
               >
                  <span>GET ESTIMATE</span>
                  <RightArrowIcon className="fill-white" />
               </Button>

               <h4 className="text-xl font-extrabold uppercase text-default md:text-3xl">
                  +1 (801) 485-6092
               </h4>
            </MotionDiv>
         </div>
      </section>
   );
};

export { CtaSection };

