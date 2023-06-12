import React from "react";
import { useForm } from "react-hook-form";
import { TbFidgetSpinner } from "react-icons/tb";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
const AddClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading, setLoading } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const {
            name,
            instructor_name,
            instructor_email,
            available_seat,
            price,
          } = data;
          const classItem = {
            name,
            feedback: "",
            status: "pending",
            instructor_name,
            instructor_email,
            available_seat,
            total_enrolled: 0,
            price: parseFloat(price),
            image: imgURL,
          };

          axiosSecure.post("/class", classItem).then((data) => {
            if (data.data.insertedId) {
              Swal.fire("Your class is added");
            }
          });
        }
      });
  };

  return (
    <section className=" container mx-auto">
      <Helmet>
        <title>SnapSchool | Dashboard | AddClasses</title>
      </Helmet>
      <h1>Add your classes</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex items-center gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Classes Name*</span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Type Class name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">
                Select Your Image
              </span>
            </label>
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input file-input-bordered w-full"
            />
          </div>
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-semibold">Instructor name*</span>
          </label>
          <input
            {...register("instructor_name", { required: true })}
            type="text"
            defaultValue={user.displayName}
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-semibold">Instructor email*</span>
          </label>
          <input
            {...register("instructor_email", { required: true })}
            type="email"
            defaultValue={user.email}
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-semibold">Available seats*</span>
          </label>
          <input
            type="text"
            {...register("available_seat", { required: true })}
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-semibold">Price*</span>
          </label>
          <input
            type="number"
            {...register("price", { required: true })}
            placeholder="Type here"
            className="input input-bordered w-full "
          />
        </div>
        <button className=" btn btn-primary w-[200px] mt-7" type="submit">
          {loading ? (
            <span className="loading loading-spinner loading-md"></span>
          ) : (
            "Add class"
          )}
        </button>
      </form>
    </section>
  );
};

export default AddClass;
