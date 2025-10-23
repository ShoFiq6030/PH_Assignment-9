import React from "react";

export default function BookingModal({ handleToggleModal, onSubmitBooking }) {
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box space-y-6">
        {/* Modal Title */}
        <h3 className="text-2xl font-semibold text-center text-gray-800">
          Book Your Session
        </h3>
        <p className="text-sm text-gray-500 text-center">
          Fill out your details to book this skill session.
        </p>

        {/* Booking Form */}
        <form method="dialog" className="space-y-4" onSubmit={onSubmitBooking}>
          {/* Name Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Full Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Email Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Email Address</span>
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="M22 7L12 13 2 7" />
              </svg>
              <input
                type="email"
                name="email"
                placeholder="mail@site.com"
                className="grow"
                required
              />
            </label>
          </div>

          {/* Buttons */}
          <div className="modal-action flex justify-end gap-3 mt-6">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-outline"
              onClick={handleToggleModal}
            >
              Close
            </button>
          </div>
        </form>
      </div>

      <form method="dialog" className="modal-backdrop">
        <button onClick={handleToggleModal}>close</button>
      </form>
    </dialog>
  );
}
