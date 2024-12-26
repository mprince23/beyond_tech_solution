import React from "react";
import About2 from "../component/about/about2";
import About5 from "../component/about/about5";
import About1 from "../component/about/about1";
import About3 from "../component/about/about3";
import Experience from "../component/about/experience";
import TeamPage from "../component/about/teampage";
import About7 from "../component/about/about7";
import Clients from "../component/about/clients";
import About9 from "../component/about/About9";

const About = () => {
  return (
    <div>
      <About1 />
      <About2 />
      <About3 />
      <Experience />
      <About5 />
      <TeamPage />
      {/* <About7 /> */}
      <Clients />
      <About9 />
    </div>
  );
};

export default About;
