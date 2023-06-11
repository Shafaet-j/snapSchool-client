import React, { useContext } from "react";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import { AuthContext } from "../../../providers/AuthProviders";
import { PuffLoader } from "react-spinners";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import WhatOurStudentSay from "../WhatOurStudentSay/WhatOurStudentSay";
import Offer from "../Offer/Offer";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const { loading } = useContext(AuthContext);
  // if (loading) {
  //   return (
  //     <div className="  absolute top-[30%] right-[50%]">
  //       <PuffLoader></PuffLoader>
  //     </div>
  //   );
  // }
  return (
    <div className="dark:bg-slate-950">
      <Helmet>
        <title>SnapSchool | Home</title>
      </Helmet>
      <Banner></Banner>
      <PopularClasses></PopularClasses>
      <Offer></Offer>
      <PopularInstructors></PopularInstructors>
      <WhatOurStudentSay></WhatOurStudentSay>
    </div>
  );
};

export default Home;
