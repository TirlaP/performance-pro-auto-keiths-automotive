import { Explorer } from "@/components/Footer/Explorer";
import { Services } from "@/components/Footer/Services";
import { Logo } from "@/components/Logo";
import { SocialLogo } from "@/components/SocialLogo";
import { Button } from "@/components/ui/button";
import {
   EmailInboxIcon,
   MapsIcon,
   PhoneCallIcon,
   RightArrowIcon,
   SendIcon,
} from "@/components/ui/icons";
import { Input } from "@/components/ui/input";

const Footer = () => {
   return (
      <footer className="overflow-hidden bg-background-dark bg-[url('/images/bg-1.svg')] bg-cover pt-10 md:pt-[70px] xl:h-[727px] xl:pt-[120px]">
         <div className="container px-5 xl:px-0">
            <div className="grid grid-cols-2 gap-4 gap-y-8 md:grid-cols-4 lg:grid-cols-6">
               {/* FIXME: Services */}
               <div className="order-1">
                  <Services />
               </div>

               {/* FIXME: Contact Info */}
               <div className="order-3 col-span-2 w-full md:order-2">
                  <h4 className="mb-6 font-header text-lg font-extrabold uppercase text-default">
                     contact info
                  </h4>

                  <ul className="grid gap-y-5 *:ml-1 md:gap-y-8 lg:gap-y-14">
                     <li className="flex gap-x-5">
                        <div className="flex h-12 w-14 skew-x-6 items-center justify-center rounded-md bg-primary *:-skew-x-6">
                           <EmailInboxIcon className="fill-white" />
                        </div>
                        <div className="grid justify-between">
                           <h5 className="text-sm font-bold uppercase leading-5 text-default">
                              Email us
                           </h5>
                           <p className="text-lg font-normal leading-7 text-default-foreground">
                              tech@performanceproauto.com
                           </p>
                        </div>
                     </li>

                     <li className="flex gap-x-5">
                        <div className="flex h-12 w-14 skew-x-6 items-center justify-center rounded-md bg-primary *:-skew-x-6">
                           <PhoneCallIcon className="fill-white" />
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

                     <li className="flex gap-x-5">
                        <div className="flex h-12 w-14 skew-x-6 items-center justify-center rounded-md bg-primary *:-skew-x-6">
                           <MapsIcon className="h-[30px] w-[22px] fill-white" />
                        </div>
                        <div className="grid justify-between">
                           <h5 className="text-sm font-bold uppercase leading-5 text-default">
                              location
                           </h5>
                           <p className="text-lg font-normal leading-7 text-default-foreground">
                              2220 South 300 East Salt Lake City, <br /> UT 84115,
                              Utah.
                           </p>
                        </div>
                     </li>
                  </ul>
               </div>

               {/* FIXME: Newsletter */}
               <div className="order-4 col-span-2 w-full lg:order-3">
                  <h4 className="mb-3 font-header text-lg font-extrabold uppercase text-default md:mb-6">
                     newsletter
                  </h4>

                  <p className="text-lg font-normal leading-7 text-default-foreground">
                     Signup for our monthly newsletter to get the latest news.
                  </p>

                  <div className="my-4 grid gap-y-3 md:my-[30px] md:gap-y-5">
                     <div className="flex h-[60px] w-full items-center justify-between rounded bg-background-darkSecondary px-5 xl:w-[406px]">
                        <Input
                           className="border-none bg-background-darkSecondary px-0 text-sm font-medium leading-5 placeholder:text-default-foreground"
                           placeholder="EMAIL HERE*"
                        />
                        <SendIcon className="fill-tertiary" />
                     </div>

                     <Button
                        size="skewBig"
                        variant="skewBig"
                        className="ml-1.5"
                     >
                        <span>SUBSCRIBE NOW</span>
                        <RightArrowIcon className="fill-white" />
                     </Button>
                  </div>
               </div>

               {/* FIXME: Explore */}
               <div className="order-2 md:order-3 lg:order-4">
                  <Explorer />
               </div>
            </div>
         </div>

         <div className="mx-auto mt-10 flex max-w-[1720px] items-center justify-around bg-background-darkSecondary py-4 lg:mt-28 lg:h-[120px] lg:py-0">
            <div>
               <Logo />
            </div>

            <p className="hidden text-center font-body text-base font-medium leading-5 text-default-foreground lg:block">
               Copyright &copy; 2024{" "}
               <span className="font-bold text-tertiary">Liberty Auto SLC</span>. All
               Rights Reserved
            </p>

            <SocialLogo />
         </div>
      </footer>
   );
};

export { Footer };

