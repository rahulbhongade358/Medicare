import React from "react";
import { WhyChooseCard } from "../../Components/Cardsmap/Cardmap";
import Footer from "./../../Components/Footer/Footer";
const About = () => {
  return (
    <div>
      <div className="bg-gray-50 ">
        <section className="bg-gray-50 py-10 text-center">
          <p className="text-4xl font-bold font-serif text-[#0288D1]">
            <span>Why Choose MediCare+</span>
          </p>
          <WhyChooseCard />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
