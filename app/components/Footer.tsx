"use client";

import Image from "next/image";
import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 px-20 py-16">
      <div className="grid grid-cols-3 gap-16 mb-16">
        <div>
          <h3 className="text-lg font-semibold mb-6 text-gray-600">Pages</h3>
          <div className="space-y-4">
            <div>About</div>
            <div>Services</div>
            <div>Contact</div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-6 text-gray-600">Contact</h3>
          <div className="space-y-4">
            <div>000-000-00-07</div>
            <div>bhaskar@trueoceanglobal.com</div>
          </div>
        </div>

        <div className="text-right">
          <div className="text-4xl font-semibold">Committed. Skilled.</div>
          <div className="text-4xl font-semibold">Respected.</div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image src="/logo-v2.png" alt="TrueOcean" width={72} height={72} />
          <div>
            <div className="text-2xl font-bold">TrueOcean</div>
            <div className="text-xs text-gray-600">GLOBAL</div>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white hover:bg-red-900 hover:text-white transition">
            <Facebook size={20} />
          </div>
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white hover:bg-red-900 hover:text-white transition">
            <Twitter size={20} />
          </div>
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white hover:bg-red-900 hover:text-white transition">
            <Linkedin size={20} />
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-8">
        Copyright © 2026 True Ocean Global Pvt Ltd – All Rights Reserved.
      </div>
    </footer>
  );
}
