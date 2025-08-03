import React from "react";
import { useForm } from "react-hook-form";
import "./contact.css";
const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const Submit = (Data) => console.log(Data);

  return (
    <div>
      <div className=" m-5 p-5 font-serif ">
        <span className="text-3xl block text-center font-bold  text-[#0288D1]">
          "We’re Here to Support Your Health and Well-being – Anytime,
          Anywhere."
        </span>
        <span className=" block  font-bold text-gray-600">
          Welcome to the Contact Center of Therm X Hospital. Whether you're a
          patient, a medical professional, or a concerned visitor, our team is
          here to assist you. We understand that health concerns require
          immediate attention, and we’re committed to responding to your queries
          with care and urgency.
        </span>
        <span className="  text-center font-bold block items-center py-5  ">
          “Reach out to us with your health queries, feedback, or partnership
          requests. Fill out the form and we’ll get back to you within 24-
          hours.”
        </span>
      </div>

      <div className="w-full lg:w-[60%] flex lg:order-1 xl:order-2">
        <div className="p-6 m-5 lg:ml-[40px] w-full h-fit rounded-3xl bg-white shadow-2xl transition-all duration-300 contact-form">
          <form
            onSubmit={handleSubmit(Submit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 text-black"
          >
            <div className="flex flex-col">
              <input
                placeholder="First Name"
                type="text"
                {...register("firstName", { required: true })}
                className="w-full border border-gray-300 rounded-xl py-3 px-4 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
              />
              {errors.firstName && (
                <span className="text-red-600 text-sm mt-1 text-center">
                  *This field is required*
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <input
                placeholder="Middle Name"
                type="text"
                {...register("middleName", { required: true })}
                className="w-full border border-gray-300 rounded-xl py-3 px-4 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
              />
              {errors.middleName && (
                <span className="text-red-600 text-sm mt-1 text-center">
                  *This field is required*
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <input
                placeholder="Last Name"
                type="text"
                {...register("lastName", { required: true })}
                className="w-full border border-gray-300 rounded-xl py-3 px-4 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
              />
              {errors.lastName && (
                <span className="text-red-600 text-sm mt-1 text-center">
                  *This field is required*
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-gray-600 font-medium">Gender</label>
              <select
                {...register("gender", { required: true })}
                className="w-full border border-gray-300 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
              >
                <option value="">Select</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <span className="text-red-600 text-sm mt-1 text-center">
                  *This field is required*
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <input
                placeholder="Email"
                type="email"
                {...register("email", { required: true })}
                className="w-full border border-gray-300 rounded-xl py-3 px-4 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
              />
              {errors.email && (
                <span className="text-red-600 text-sm mt-1 text-center">
                  *This field is required*
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <input
                placeholder="Contact"
                type="tel"
                {...register("Contactnumber", { required: true })}
                className="w-full border border-gray-300 rounded-xl py-3 px-4 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
              />
              {errors.Contactnumber && (
                <span className="text-red-600 text-sm mt-1 text-center">
                  *This field is required*
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-gray-600 font-medium">
                Who are you?
              </label>
              <select
                {...register("Whoareyou", { required: true })}
                className="w-full border border-gray-300 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
              >
                <option value="">Select</option>
                <option value="doctor">Doctor</option>
                <option value="nurse">Nurse</option>
                <option value="patient">Patient</option>
                <option value="visitor">Visitor</option>
              </select>
              {errors.Whoareyou && (
                <span className="text-red-600 text-sm mt-1 text-center">
                  *This field is required*
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <input
                placeholder="Purpose of Inquiry"
                type="text"
                {...register("inquiry", { required: true })}
                className="w-full border border-gray-300 rounded-xl py-3 px-4 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
              />
              {errors.inquiry && (
                <span className="text-red-600 text-sm mt-1 text-center">
                  *This field is required*
                </span>
              )}
            </div>

            <div className="flex flex-col md:col-span-2">
              <label className="mb-1 text-gray-600 font-medium">Message</label>
              <textarea
                placeholder="Please describe your question, issue, or request in detail"
                {...register("messagebox", { required: true })}
                rows="4"
                className="w-full border border-gray-300 rounded-xl py-3 px-4 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
              ></textarea>
              {errors.messagebox && (
                <span className="text-red-600 text-sm mt-1 text-center">
                  *This field is required*
                </span>
              )}
            </div>

            <div className="flex flex-col md:col-span-2">
              <label className="mb-1 text-gray-600 font-medium">
                Preferred Contact Method
              </label>
              <select
                {...register("contactmethod", { required: true })}
                className="w-full border border-gray-300 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
              >
                <option value="">Select</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="whatsapp">WhatsApp</option>
              </select>
              {errors.contactmethod && (
                <span className="text-red-600 text-sm mt-1 text-center">
                  *This field is required*
                </span>
              )}
            </div>
            <div className="flex justify-center md:col-span-2">
              <input
                type="submit"
                value="Submit"
                className="bg-blue-500 hover:bg-blue-600 transition-colors duration-200 text-white font-semibold rounded-2xl px-6 py-3 cursor-pointer mt-6 shadow-md"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
