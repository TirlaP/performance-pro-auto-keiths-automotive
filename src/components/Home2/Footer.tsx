import Image from "next/image";
import { Explorer } from "../Footer/Explorer";
import { Services } from "../Footer/Services";
import { Logo } from "../Logo";
import { Button } from "../ui/button";
import {
    EmailInboxIcon,
    MapsIcon,
    PhoneCallIcon,
    RightArrow2Icon,
} from "../ui/icons";
import { Input } from "../ui/input";
import { SocialLogo2 } from "./SocialLogo";

const Footer = () => {
   return (
      <footer className="relative min-h-[727px] bg-background-dark bg-[url('/images/bg-1.svg')] bg-cover pb-[160px] pt-[100px] md:pb-[170px] md:pt-[125px] lg:pb-0 lg:pt-[150px] xl:h-[727px] xl:pt-[175px]">
         <div className="container absolute left-1/2 top-0 flex h-[150px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-x-20 rounded-lg bg-primary bg-[url('/images/bg-2.svg')] font-header md:flex-row">
            <h1 className="text-3xl font-extrabold uppercase leading-heavy text-white lg:text-5xl">
               subscribe now
            </h1>
            <div className="xl:w-[545px]">
               <div className="flex h-[60px] w-full skew-x-[8deg] items-center rounded bg-white px-3 *:-skew-x-[8deg]">
                  <Input
                     placeholder="ENTER EMAIL*"
                     className="border-none bg-transparent font-body font-bold text-default-tertiary placeholder:font-body placeholder:font-bold placeholder:text-default-tertiary focus:outline-none focus:ring-0"
                  />
                  <div>
                     <Button className="flex h-8 w-14 skew-x-[8deg] items-center justify-center rounded bg-primary *:-skew-x-[8deg]">
                        <RightArrow2Icon className="fill-white" />
                     </Button>
                  </div>
               </div>
            </div>
         </div>

         {/* -------------- content --------------- */}
         <div className="container px-5 xl:px-0">
            <div className="grid grid-cols-2 gap-y-5 md:grid-cols-4 lg:grid-cols-6">
               <div className="order-1">
                  <Services />
               </div>

               <div className="order-3 col-span-2 lg:order-2">
                  <h4 className="mb-6 font-header text-lg font-extrabold uppercase text-default">
                     contact info
                  </h4>

                  <ul className="grid gap-y-14 *:ml-1">
                     <li className="flex gap-x-5">
                        <div className="flex h-12 w-14 items-center justify-center">
                           <EmailInboxIcon className="fill-tertiary" />
                        </div>
                        <div className="grid justify-between">
                           <h5 className="text-sm font-bold uppercase leading-5 text-default">
                              Email us
                           </h5>
                           <p className="text-lg font-normal leading-7 text-default-foreground">
                              example@autofix.com
                           </p>
                        </div>
                     </li>

                     <li className="flex gap-x-5">
                        <div className="flex h-12 w-14 items-center justify-center">
                           <MapsIcon className="h-[30px] w-[22px] fill-tertiary" />
                        </div>
                        <div className="grid justify-between">
                           <h5 className="text-sm font-bold uppercase leading-5 text-default">
                              location
                           </h5>
                           <p className="text-lg font-normal leading-7 text-default-foreground">
                              528 seltice way coeur alene <br /> ID 83814,
                              California.
                           </p>
                        </div>
                     </li>

                     <li className="flex gap-x-5">
                        <div className="flex h-12 w-14 items-center justify-center">
                           <PhoneCallIcon className="fill-tertiary" />
                        </div>
                        <div className="grid justify-between">
                           <h5 className="text-sm font-bold uppercase leading-5 text-default">
                              phone no
                           </h5>
                           <p className="text-lg font-normal leading-7 text-default-foreground">
                              +1 (801) 485-6092
                           </p>
                        </div>
                     </li>
                  </ul>
               </div>

               <div className="order-2 lg:order-3">
                  <Explorer />
               </div>

               <div className="order-4 col-span-2">
                  <h4 className="mb-6 text-left font-header text-lg font-extrabold uppercase text-default">
                     our gallery
                  </h4>

                  <div className="grid w-full grid-cols-2 gap-3 lg:max-w-xs">
                     <Image
                        src="/images/image-24.png"
                        alt="home_2_footer_2"
                        width={150}
                        height={125}
                        quality={100}
                        className="h-auto w-full"
                     />
                     <Image
                        src="/images/image-25.png"
                        alt="home_2_footer_2"
                        width={150}
                        height={125}
                        quality={100}
                        className="h-auto w-full"
                     />
                     <Image
                        src="/images/image-26.png"
                        alt="home_2_footer_2"
                        width={150}
                        height={125}
                        quality={100}
                        className="h-auto w-full"
                     />
                     <Image
                        src="/images/image-27.png"
                        alt="home_2_footer_2"
                        width={150}
                        height={125}
                        quality={100}
                        className="h-auto w-full"
                     />
                  </div>
               </div>
            </div>
         </div>
         {/* ----------- content -------------- */}

         <div className="absolute bottom-0 left-0 flex w-full items-center justify-center bg-background-darkSecondary py-10">
            <div className="container flex items-center justify-between px-2.5 xl:px-0">
               <div>
                  <Logo />
               </div>

               <p className="hidden text-center font-body text-base font-medium leading-5 text-default-foreground md:block">
                  Copyright &copy; 2024{" "}
                  <span className="font-bold text-tertiary">Autofix</span>. All
                  Rights Reserved
               </p>

               <SocialLogo2 />
            </div>
         </div>
      </footer>
   );
};

export { Footer };

