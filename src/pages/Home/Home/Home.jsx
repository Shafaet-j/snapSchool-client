import React, { useContext } from "react";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import { AuthContext } from "../../../providers/AuthProviders";

const Home = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <h4>Loading</h4>;
  }
  return (
    <div>
      <Banner></Banner>
      <PopularClasses></PopularClasses>
    </div>
  );
};

export default Home;
