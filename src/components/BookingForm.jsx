import React, { useState } from "react";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    pooja: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking submitted! (Backend not connected yet)");
  };

  return (
    <section
      id="booking"
      className="bg-cream py-16 px-4 text-maroon border-t border-maroon/10"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Book a Pooja Online
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-lg space-y-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="border p-3 rounded-md w-full"
              required
            />
            <input
              name="email"
              placeholder="Email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="border p-3 rounded-md w-full"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="border p-3 rounded-md w-full"
              required
            />
            <input
              name="pooja"
              placeholder="Type of Pooja"
              value={form.pooja}
              onChange={handleChange}
              className="border p-3 rounded-md w-full"
            />
          </div>

          <input
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            className="border p-3 rounded-md w-full"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Additional message..."
            value={form.message}
            onChange={handleChange}
            className="border p-3 rounded-md w-full"
          />

          <button
            type="submit"
            className="w-full bg-maroon text-cream py-3 rounded-md hover:opacity-90 transition"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </section>
  );
}