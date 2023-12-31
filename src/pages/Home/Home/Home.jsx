import React, { useContext } from "react";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import { AuthContext } from "../../../providers/AuthProviders";
import { PuffLoader } from "react-spinners";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import WhatOurStudentSay from "../WhatOurStudentSay/WhatOurStudentSay";
import Offer from "../Offer/Offer";
import { Helmet } from "react-helmet-async";
import AboutUs from "../AboutUs/AboutUs";
import BlogSection from "../BlogSection/BlogSection";

const Home = () => {
  return (
    <div className="dark:bg-slate-950">
      <Helmet>
        <title>SnapSchool | Home</title>
      </Helmet>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <PopularClasses></PopularClasses>
      <Offer></Offer>
      <PopularInstructors></PopularInstructors>
      <WhatOurStudentSay></WhatOurStudentSay>
      <BlogSection />
    </div>
  );
};

export default Home;
