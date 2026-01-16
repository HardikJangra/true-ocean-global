"use client";

import { useState } from "react";
import Link from "next/link";

export default function NotFound() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!email) return;
    alert(`Thank you! We'll contact you at ${email}`);
    setEmail("");
  };

  return (
    <>
      <section className="flex flex-col items-center justify-center py-40 bg-white">
        <h1 className="text-3xl text-gray-900 mb-8">
          404! Page not found...
        </h1>

        <Link
          href="/"
          className="bg-red-900 text-white px-10 py-4 hover:bg-red-800 transition"
        >
          Go homepage
        </Link>
      </section>

      <section id="contact" className="bg-red-900 px-20 py-20">
        <div className="text-white text-sm font-semibold mb-5">
          Have Any Question?
        </div>

        <h2 className="text-5xl font-normal text-white mb-12">
          Let Us Reach You
        </h2>

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
