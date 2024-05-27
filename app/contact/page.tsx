import { Metadata } from "next";
import ContactPageHead from "../components/Contact/ContactPageHead";
import ContactForm from "../components/Contact/ContactForm";

export const metadata: Metadata = {
  title: "Trusmi | Contact Us",
  description:
    "Whatever you need, we’re here to help. Just get in touch, and we’ll try our best to respond within 24 hours.",
};

export default function Contact() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        {/* <HomeBackgroundEffectSpots count={7} /> */}
        <ContactPageHead className="pb-20 z-10" />
        <ContactForm className="pb-28 z-10" />
      </div>
    </>
  );
}
