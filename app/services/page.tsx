"use client";
import React from "react";
import { useState } from "react";
export default function ServicesPage() {
  const [email, setEmail] = useState("");
  
  const handleSubmit = () => {
    if (!email) return;
    alert(`Thank you! We'll contact you at ${email}`);
    setEmail("");
  };
  const services = [
    {
      num: "/01",
      title: "Agricultural Exports",
      desc:
        "We specialize in the export of agricultural commodities, starting with rice and spices. Our focus is on consistency in quality, packaging, and international compliance.",
    },
    {
      num: "/02",
      title: "Sourcing & Procurement",
      desc:
        "We work with verified suppliers and follow defined procurement standards to ensure product reliability and traceability.",
    },
    {
      num: "/03",
      title: "Quality Control",
      desc:
        "Each shipment follows documented quality checks aligned with export requirements and buyer specifications.",
    },
    {
      num: "/04",
      title: "Packaging & Compliance",
      desc:
        "Export grade packaging with attention to labeling, hygiene, and destination specific regulations.",
    },
    {
      num: "/05",
      title: "Logistics Coordination",
      desc:
        "Clear documentation, shipment planning, and coordination to ensure predictable delivery timelines.",
    },
    {
      num: "/06",
      title: "Scalable Trade Operations",
      desc:
        "Our systems are designed to expand across new products and markets without compromising consistency.",
    },
  ];

  return (
    <>
      {/* SERVICES SECTION */}
      <section className="px-20 py-24">
        <h1 className="text-5xl font-normal mb-20">Services</h1>

        <div className="grid grid-cols-3 gap-x-20 gap-y-24">
          {services.map((service) => (
            <div key={service.num}>
              <div className="text-red-900 mb-4">{service.num}</div>

              <h3 className="text-2xl font-normal mb-6 leading-snug">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed max-w-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="bg-red-900 px-20 py-20">
        <div className="text-white text-sm font-semibold mb-5">Have Any Question?</div>
        <h2 className="text-5xl font-normal text-white mb-12">Let Us Reach You</h2>
        <div className="flex gap-0 max-w-2xl">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-6 py-4 text-lg border-2 border-white bg-white text-gray-900"
          />
          <button
            onClick={handleSubmit}
            className="px-12 py-4 bg-red-900 text-white border-2 border-white hover:bg-red-800 transition text-lg font-medium"
          >
            Send
          </button>
        </div>
      </section>
    </>
  );
}
