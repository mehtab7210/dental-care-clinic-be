import { useForm } from "react-hook-form";
import { useState } from "react";
import { services } from "../data/services";

const AppointmentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log("Appointment data:", data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Book Your Appointment
      </h2>

      {isSubmitted && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
          Thank you for booking! We'll contact you shortly to confirm your
          appointment.
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              First Name
            </label>
            <input
              type="text"
              {...register("firstName", { required: "First name is required" })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            {errors.firstName && (
              <p className="mt-1 text-red-500 text-sm">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Last Name
            </label>
            <input
              type="text"
              {...register("lastName", { required: "Last name is required" })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            {errors.lastName && (
              <p className="mt-1 text-red-500 text-sm">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            {errors.email && (
              <p className="mt-1 text-red-500 text-sm">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Phone
            </label>
            <input
              type="tel"
              {...register("phone", { required: "Phone number is required" })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            {errors.phone && (
              <p className="mt-1 text-red-500 text-sm">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Service
          </label>
          <select
            {...register("service", { required: "Please select a service" })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.id} value={service.slug}>
                {service.title}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-red-500 text-sm">
              {errors.service.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Preferred Date
            </label>
            <input
              type="date"
              {...register("date", { required: "Please select a date" })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            {errors.date && (
              <p className="mt-1 text-red-500 text-sm">{errors.date.message}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Preferred Time
            </label>
            <select
              {...register("time", { required: "Please select a time" })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="">Select time</option>
              <option value="09:00">9:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="13:00">1:00 PM</option>
              <option value="14:00">2:00 PM</option>
              <option value="15:00">3:00 PM</option>
              <option value="16:00">4:00 PM</option>
            </select>
            {errors.time && (
              <p className="mt-1 text-red-500 text-sm">{errors.time.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Additional Notes
          </label>
          <textarea
            {...register("notes")}
            rows="4"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Any specific concerns or requirements..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
