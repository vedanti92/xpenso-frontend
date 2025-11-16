import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  return (
    <div className="h-screen w-full relative flex items-center justify-center overflow-hidden">
      {/* Blur background image */}
      <img
        src={assets.background}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover filter"
      />

      <div className="relative z-10 w-full max-w-lg px-6">
        <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg shadow-2xl p-8 max-h-[90vh] overflow-y-auto">
          <h3 className="text-2xl font-semibold text-black text-center mb-2">
            Create an Account
          </h3>
          <p className="text-sm text-slate-700 text-center mb-8">
            Level up your spending habits — join today!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
