import React from "react";
import { Mail, Phone, Clock } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-white text-gray-700 text-sm px-6 py-2 flex justify-between items-center border-b border-gray-200">
      {/* Left Side Info */}
      <div className="flex items-center gap-6">
        <span className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-yellow-500" />
          Open - Mon - Fri: 9am to 5pm
        </span>
        <span className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-yellow-500" />
          info@yoursite.com
        </span>
        <span className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-yellow-500" />
          +0 123-456-7890
        </span>
      </div>

      {/* Right Side Button */}
      <button className="bg-yellow-400 text-white font-semibold px-5 py-2">
        GET A QUOTE
      </button>
    </div>
  );
}
