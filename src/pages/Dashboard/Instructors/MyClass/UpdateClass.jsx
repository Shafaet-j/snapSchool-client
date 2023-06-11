import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const UpdateClass = ({ modalHandler, isOpen, selectedClass, closeModal }) => {
 
  // console.log(selectedClass.name);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch(
      `https://snapschool-server-shafaet-j.vercel.app/class/${selectedClass._id}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          closeModal()
          toast.success("Successfully Updated.");
        }
      });
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium text-center leading-6 text-gray-900"
                >
                  Update Your class
                </Dialog.Title>
                <div className="mt-2 mb-4">
                  <p className="text-lg font-bold">Test:</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text font-semibold">
                        Classes Name*
                      </span>
                    </label>
                    <input
                      {...register("name", { required: true })}
                      type="text"
                      defaultValue={selectedClass?.name}
                      placeholder="Type Class name"
                      className="input input-bordered w-full"
                    />
                  </div>

                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text font-semibold">
                        Available seats*
                      </span>
                    </label>
                    <input
                      type="text"
                      defaultValue={selectedClass?.available_seat}
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
                      defaultValue={selectedClass?.price}
                      {...register("price", { required: true })}
                      placeholder="Type here"
                      className="input input-bordered w-full "
                    />
                  </div>
                  <input
                    className=" btn btn-primary my-8"
                    type="submit"
                    value="Update class"
                  />
                </form>

                <hr className="mt-8 " />
                <div className="flex mt-2 justify-around">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                  {/* <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                    onClick={modalHandler}
                  >
                    Updateee
                  </button> */}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default UpdateClass;
