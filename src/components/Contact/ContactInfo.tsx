import { EmailInboxIcon, MapsIcon, TelephoneIcon } from "../ui/icons";
import { ContactInfoCard } from "./ContactInfoCard";

const ContactInfo = () => {
   return (
      <section className="container py-9 font-header md:py-[80px] lg:py-[120px] xl:py-[150px]">
         <div className="mx-auto mb-5 flex max-w-[527px] flex-col items-center justify-center md:mb-[30px] lg:mb-[40px] xl:mb-[50px] 2xl:mb-[60px]">
            <span className="relative z-10 text-center text-sm font-extrabold uppercase leading-7 text-default-black before:absolute before:-left-2 before:top-1/2 before:-z-10 before:ml-0.5 before:h-[23px] before:w-[23px] before:-translate-x-0 before:-translate-y-1/2 before:rounded-full before:bg-tertiary before:content-[''] lg:text-base">
               contact info
            </span>

            <h1 className="my-2.5 text-3xl font-black uppercase lg:my-4 lg:text-4xl xl:text-5xl xl:leading-heavy">
               clients support
            </h1>
         </div>
         <div className="grid gap-3 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-7">
            <ContactInfoCard
               Icon={MapsIcon}
               title="location"
               contact={["528 seltice way coeur alene ID 83814, California"]}
            />
            <ContactInfoCard
               Icon={EmailInboxIcon}
               title="email us"
               contact={["support@autofix.com", "admin@autofix.com"]}
            />
            <ContactInfoCard
               Icon={TelephoneIcon}
               title="phone"
               contact={["+1 (801) 485-6092"]}
               isCentered
            />
         </div>
      </section>
   );
};

export { ContactInfo };

