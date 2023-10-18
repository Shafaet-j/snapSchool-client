import React from "react";
import Blog from "./Blog";

const BlogSection = () => {
  return (
    <section className=" container mx-auto py-10">
      <h1 className=" lg:text-5xl text-3xl font-bold mb-10 dark:text-slate-300">
        Our Latest <span className=" text-primary">News</span>{" "}
      </h1>
      <div className=" grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-7">
        <Blog
          image="https://cdn.pixabay.com/photo/2016/03/05/22/53/camera-1239384_1280.jpg"
          title="Learn Photography from Experts"
          subtitle="Mirrorless mounts have allowed the creation of increasingly lens designs, and as such, we have seen more and more rectilinear full frame lenses that push to wider and wider focal lengths, including single-digit focal lengths"
        />
        <Blog
          image="https://cdn.pixabay.com/photo/2016/11/29/02/59/drone-1866961_1280.jpg"
          title="Learn Photography from Experts"
          subtitle="Mirrorless mounts have allowed the creation of increasingly lens designs, and as such, we have seen more and more rectilinear full frame lenses that push to wider and wider focal lengths, including single-digit focal lengths"
        />
        <Blog
          image="https://cdn.pixabay.com/photo/2014/05/22/22/05/photo-351528_1280.jpg"
          title="Learn Photography from Experts"
          subtitle="Mirrorless mounts have allowed the creation of increasingly lens designs, and as such, we have seen more and more rectilinear full frame lenses that push to wider and wider focal lengths, including single-digit focal lengths"
        />
      </div>
    </section>
  );
};

export default BlogSection;
